using Microsoft.AspNetCore.Builder;
using System;

namespace Witivio.Sdk.AspNet
{
    public static class ApiKeyMiddlewareExtensions
    {
        /// <summary>
        /// Adds middleware to validate that all requests come from Witivio 365 using 'api key' HTTP header validation
        /// </summary>
        /// <param name="app">The Microsoft.AspNetCore.Builder.IApplicationBuilder instance this method extends.</param>
        /// <param name="configureOptions">Option to configure the api key</param>
        /// <returns></returns>
        public static IApplicationBuilder UseApiKeyValidation(this IApplicationBuilder app, ApiKeyOptions options)
        {
            return app.UseMiddleware<ApiKeyMiddleware>(options);
        }

        /// <summary>
        /// Adds middleware to validate that all requests come from Witivio 365 using 'api key' HTTP header validation
        /// </summary>
        /// <param name="app">The Microsoft.AspNetCore.Builder.IApplicationBuilder instance this method extends.</param>
        /// <param name="configureOptions">Option to configure the api key</param>
        /// <returns></returns>
        public static IApplicationBuilder UseApiKeyValidation(this IApplicationBuilder app, Action<ApiKeyOptions> configureOptions)
        {
            var options = new ApiKeyOptions();
            configureOptions(options);

            return app.UseMiddleware<ApiKeyMiddleware>(options);
        }
    }
}
