﻿using Core.Entities;

namespace Core.Interfaces;

public interface IBasketRepository
{
    Task<CustomerBasket> GetBasketAsync(string basketIt);

    Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket);

    Task<bool> DeleteBasketAsync(string basketId);
}
