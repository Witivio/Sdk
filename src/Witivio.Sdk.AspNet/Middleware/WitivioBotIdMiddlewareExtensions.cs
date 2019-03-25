using Microsoft.AspNetCore.Builder;
using System;

namespace Witivio.Sdk.AspNet
{
    public static class WitivioBotIdMiddlewareExtensions
    {
        /// <summary>
        /// Adds middleware to validate that all requests come from Witivio 365 using 'witivio-botid' HTTP header validation
        /// </summary>
        /// <param name="app">The Microsoft.AspNetCore.Builder.IApplicationBuilder instance this method extends.</param>
        /// <param name="configureOptions">Option to configure the botId</param>
        /// <returns></returns>
        public static IApplicationBuilder UseBotIdValidation(this IApplicationBuilder app, WitivioBotIdOptions options)
        {
            return app.UseMiddleware<WitivioBotIdMiddleware>(options);
        }

        /// <summary>
        /// Adds middleware to validate that all requests come from Witivio 365 using 'witivio-botid' HTTP header validation
        /// </summary>
        /// <param name="app">The Microsoft.AspNetCore.Builder.IApplicationBuilder instance this method extends.</param>
        /// <param name="configureOptions">Option to configure the botId</param>
        /// <returns></returns>
        public static IApplicationBuilder UseBotIdValidation(this IApplicationBuilder app, Action<WitivioBotIdOptions> configureOptions)
        {
            var options = new WitivioBotIdOptions();
            configureOptions(options);

            return app.UseMiddleware<WitivioBotIdMiddleware>(options);
        }
    }
}
