using API.Errors;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace API.Extensions;

public static class ApplicationServicesExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration conf)
    {


        services.AddDbContext<StoreContext>(opt =>
        {
            opt.UseSqlite(conf.GetConnectionString("DefaultConnection"));
        });
        services.AddSingleton<IConnectionMultiplexer>(c => {
            var options = ConfigurationOptions.Parse(conf.GetConnectionString("redis"));
            return ConnectionMultiplexer.Connect(options);
        });

        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
        services.AddScoped<IBasketRepository, BasketRepository>();        
        services.AddScoped<ITokenService, TokenService>();
        services.AddScoped<IOrderService, OrderService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.Configure<ApiBehaviorOptions>(options =>
        {
            options.InvalidModelStateResponseFactory = actionContext =>
            {
                var errors = actionContext.ModelState
                .Where(i => i.Value.Errors.Count() > 0)
                .SelectMany(x => x.Value.Errors)
                .Select(x => x.ErrorMessage).ToArray();

                var errorResponse = new ApiValidationErrorResponse
                {
                    Errors = errors
                };

                return new BadRequestObjectResult(errorResponse);
            };
        });

        services.AddCors(opt => {
            opt.AddPolicy("CorsPolicy", policy => {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
            });
        });

        return services;
    }
}
