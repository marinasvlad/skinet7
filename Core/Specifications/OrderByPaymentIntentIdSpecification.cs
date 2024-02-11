﻿using System.Linq.Expressions;
using Core.Entities.OrderAggregate;
using Core.Specifications;

namespace Core;

public class OrderByPaymentIntentIdSpecification : BaseSpecification<Order>
{
    public OrderByPaymentIntentIdSpecification(string paymentIntentId) : base(o => o.PaymentIntentId == paymentIntentId)
    {
    }
}
