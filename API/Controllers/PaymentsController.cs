using API.Errors;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace API.Controllers;

public class PaymentsController : BaseApiController
{
    private const string WhSecret = "whsec_1143172b2b88a5a58e5be89e0d9c6db0d352819cadf25bc75787c6df80edabd9";
    private readonly IPaymentService _paymentService;
    private readonly ILogger<PaymentsController> _logger;

    public PaymentsController(IPaymentService paymentService, ILogger<PaymentsController> logger){
        _paymentService = paymentService;
        _logger = logger;
    }

    [Authorize]
    [HttpPost("{basketId}")]
    public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId){
        var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);

        if(basket == null) return BadRequest(new ApiResponse(400, "Problem with your basket"));

        return basket;
    }

    [HttpPost("webhook")]
    public async Task<ActionResult> StripeWebhook(){
        var json = await new StreamReader(Request.Body).ReadToEndAsync();

        var stripeEvent = EventUtility.ConstructEvent(json, 
        Request.Headers["Stripe-Signature"], WhSecret);

        PaymentIntent intent;
        Order order;

        switch(stripeEvent.Type){
            case "payment_intent.succeeded":
                intent = (PaymentIntent) stripeEvent.Data.Object;
                _logger.LogInformation("Payment succeded: {intent.Id}", intent.Id);
                order = await _paymentService.UpdatePaymentOrderSucceded(intent.Id);
                _logger.LogInformation("Order updated to payment recived: {order.Id}", order.Id);                
                break;
            case "payment_intent.payment_failed":
                intent = (PaymentIntent) stripeEvent.Data.Object;
                _logger.LogInformation("Payment failed: {intent.Id}", intent.Id);
                order = await _paymentService.UpdatePaymentOrderFailed(intent.Id);
                _logger.LogInformation("Order updated to payment failed: {order.Id}", order.Id);                   
                break;
        }

        return new EmptyResult();
    }
}
