namespace Core.Interfaces;

public interface IResponseCacheService
{
    Task CreateResponseAsync(string cacheKey, object response, TimeSpan timeToLive);

    Task<string> GetChachedResponseAsync(string cachedKey);
    
}
