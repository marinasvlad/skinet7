using System.Text.Json;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Services;

public class ResponseCacheServices : IResponseCacheService
{
    private readonly IDatabase _database;
    private readonly IConnectionMultiplexer _redis;

    public ResponseCacheServices(IConnectionMultiplexer redis)
    {
        _database = redis.GetDatabase();
    }

    public async Task CreateResponseAsync(string cacheKey, object response, TimeSpan timeToLive)
    {
        if(response == null) return;

        var options = new JsonSerializerOptions{
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        var serialisedResponse = JsonSerializer.Serialize(response, options);

        await _database.StringSetAsync(cacheKey, serialisedResponse, timeToLive);
    }

    public async Task<string> GetChachedResponseAsync(string cachedKey)
    {
        var cachedResponse = await _database.StringGetAsync(cachedKey);

        if(cachedResponse.IsNullOrEmpty)
        {
            return null;
        } 

        return cachedResponse;
    }
}
