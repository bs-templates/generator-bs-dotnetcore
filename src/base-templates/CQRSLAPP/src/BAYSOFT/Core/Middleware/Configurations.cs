using BAYSOFT.Core.Domain.Interfaces.Infrastructures.Data.Contexts;
using BAYSOFT.Core.Infrastructures.Data.Contexts;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ModelWrapper.Middleware;
using System;
using System.Reflection;

namespace BAYSOFT.Core.Middleware
{
    public static class Configurations
    {
        public static IServiceCollection AddMiddleware(this IServiceCollection services, IConfiguration configuration, Assembly presentationAssembly)
        {
            services.AddDbContext<IDefaultDbContext, DefaultDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    sql => sql.MigrationsAssembly(presentationAssembly.GetName().Name)));

            var assembly = AppDomain.CurrentDomain.Load("BAYSOFT");

            services.AddMediatR(assembly);

            services.AddModelWrapper()
                .AddDefaultReturnedCollectionSize(10)
                .AddMinimumReturnedCollectionSize(1)
                .AddMaximumReturnedCollectionSize(100)
                .AddQueryTermsMinimumSize(3)
                .AddSuppressedTerms(new string[] { "the" });

            // YOUR CODE GOES HERE
            return services;
        }

        public static IApplicationBuilder UseMiddleware(this IApplicationBuilder app)
        {
            //app.UseAuthentication();
            //app.UseAuthorization();
            // YOUR CODE GOES HERE
            return app;
        }
    }
}
