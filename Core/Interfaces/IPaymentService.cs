using Core.Entities;
using Core.Entities.OrderAggregate;

namespace Core.Interfaces;

public interface IPaymentService
{
    Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId);

    Task<Order> UpdatePaymentOrderSucceded(string paymentIntentId);
    Task<Order> UpdatePaymentOrderFailed(string paymentIntentId);
}
