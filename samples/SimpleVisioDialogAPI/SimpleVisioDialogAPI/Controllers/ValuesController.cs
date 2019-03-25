using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SimpleVisioDialogAPI.Models.Dto;
using Witivio.Sdk;

namespace SimpleVisioDialogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpPost("read_data")]
        public IActionResult ReadData([FromBody] VisioDialog visioDialog)
        {
            // Read a parameter variable from the visio dialog
            var requestId = visioDialog.GetPropertyValue("REQUEST_ID");

            // wrap the dto
            var result = new ResultWrapper<SimpleDto>(new SimpleDto
            {
                Name = "name to return"
            });

            // return the result
            return Ok(result);
        }
    }
}
