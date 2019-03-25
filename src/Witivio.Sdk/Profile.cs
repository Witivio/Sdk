using Newtonsoft.Json;

namespace Witivio.Sdk
{
    public class Profile
    {

        [JsonProperty("userId")]
        public string UserId { get; set; }

        [JsonProperty("upn")]
        public string Upn { get; set; }

        [JsonProperty("aadId")]
        public string AadId { get; set; }

        [JsonProperty("displayName")]
        public string DisplayName { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("channel")]
        public string Channel { get; set; }
    }
}
