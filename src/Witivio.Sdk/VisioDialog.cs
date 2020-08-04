using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace Witivio.Sdk
{
    public class VisioDialog
    {
        /// <summary>
        /// Unique Id of a user
        /// </summary>
        [JsonProperty("userId")]
        public string UserId { get; set; }

        /// <summary>
        /// The language spoken by the user. The value is detected by the chatbot.
        /// The format is TwoLetterISOLanguageName. Ex: en or fr
        /// </summary>
        [JsonProperty("userLanguage")]
        public string UserLanguage { get; set; }

        /// <summary>
        /// Id of the profile
        /// </summary>
        [JsonProperty("userProfileId")]
        public string UserProfileId { get; set; }

        /// <summary>
        /// Name of the profile
        /// </summary>
        [JsonProperty("userProfileName")]
        public string UserProfileName { get; set; }

        /// <summary>
        /// ID of the tenant (only sent from Teams channel)
        /// </summary>
        [JsonProperty("tenantId")]
        public string TenantId { get; set; }

        /// <summary>
        /// Username / Display name of a user
        /// </summary>
        [JsonProperty("userName")]
        public string UserName { get; set; }

        /// <summary>
        /// Full history of the conversation
        /// </summary>
        [JsonProperty("conversationHistory")]
        public IEnumerable<string> ConversationHistory { get; set; }

        /// <summary>
        /// Message sent to the bot that trigger the conversation tree
        /// </summary>
        [JsonProperty("initialMessage")]
        public string InitialMessage { get; set; }

        /// <summary>
        /// Message initialy sent to the bot. Used for escalation
        /// </summary>
        [JsonProperty("initialQuestion")]
        public string InitialQuestion { get; set; }

        /// <summary>
        /// Channel of the chatbot
        /// </summary>
        [JsonProperty("channel")]
        public string Channel { get; set; }

        [JsonProperty("api")]
        public JToken Api { get; set; }

        /// <summary>
        /// Additionnal properties collected during a dialog
        /// </summary>
        [JsonExtensionData]
        public Dictionary<string, JToken> Properties { get; set; }
    }
}
