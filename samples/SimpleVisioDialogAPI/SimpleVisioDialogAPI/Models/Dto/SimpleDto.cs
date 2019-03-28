using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleVisioDialogAPI.Models.Dto
{
    public class SimpleDto
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
