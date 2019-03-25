﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace Witivio.Sdk
{
    public class VisioDialog
    {
        [JsonProperty("userId")]
        public string UserId { get; set; }

        [JsonProperty("userProfileId")]
        public string UserProfileId { get; set; }

        [JsonProperty("userProfileName")]
        public string UserProfileName { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("api")]
        public JToken Api { get; set; }

        [JsonExtensionData]
        public Dictionary<string, JToken> Properties { get; set; }
    }
}