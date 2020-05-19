using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;

namespace Witivio.Sdk
{
    public static class VisioDialogExtensions
    {
        /// <summary>
        /// Get the value of a property. Generally its a variable collected in a dialog
        /// </summary>
        /// <param name="dto"></param>
        /// <param name="propertyName"></param>
        /// <returns></returns>
        public static string GetPropertyValue(this VisioDialog dto, string propertyName)
        {
            if (dto.Properties == null)
                return null;

            JToken tokenValue;
            string value = null;
            if (dto.Properties.TryGetValue(propertyName, out tokenValue))
            {
                value = tokenValue.Value<string>();
            }
            return value;
        }
     
    }
}
