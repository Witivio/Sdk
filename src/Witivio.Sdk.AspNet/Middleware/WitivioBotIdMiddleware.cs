using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace Witivio.Sdk.AspNet
{
    public class WitivioBotIdMiddleware
    {
        private readonly WitivioBotIdOptions _options;
        private readonly RequestDelegate _next;
        private const string HEADER = "witivio-botid";

        public WitivioBotIdMiddleware(RequestDelegate next, WitivioBotIdOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));
            _options = options;
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Headers.ContainsKey(HEADER))
            {
                var botIdValue = context.Request.Headers[HEADER].ToString();
                if (!string.IsNullOrWhiteSpace(botIdValue))
                {
                    if (botIdValue == _options.BotId)
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
