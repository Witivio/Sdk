using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Witivio.Sdk.AspNet
{
    public class ApiKeyMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ApiKeyOptions _options;
        private const string HEADER = "apiKey";

        public ApiKeyMiddleware(RequestDelegate next, ApiKeyOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));
            _next = next;
            _options = options;

        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Headers.ContainsKey(HEADER))
            {
                var apiKeyValue = context.Request.Headers[HEADER].ToString();
                if (!string.IsNullOrWhiteSpace(apiKeyValue))
                {
                    if (apiKeyValue == _options.ApiKey)
                        await _next(context);
                }
            }
            else
            {
                context.Response.StatusCode = 403;
            }
        }
    }
}
