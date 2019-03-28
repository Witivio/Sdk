using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Witivio.Sdk
{
    public class ResultWrapper : ResultWrapper<object>
    {

    }

    public class ResultWrapper<T>
    {
        public ResultWrapper()
        {

        }

        public ResultWrapper(T result)
        {
            Result = result;
        }

        [JsonProperty("hasResult")]
        public bool HasResult => Result != null;
        [JsonProperty("result")]
        public T Result { get; set; }
    }

    public class ResultsWrapper<T>
    {
        public ResultsWrapper()
        {

        }

        public ResultsWrapper(IEnumerable<T> results)
        {
            Results = results;
        }

        [JsonProperty("hasResults")]
        public bool HasResults => Results?.Count() > 0;
        [JsonProperty("results")]
        public IEnumerable<T> Results { get; set; }
    }
}
