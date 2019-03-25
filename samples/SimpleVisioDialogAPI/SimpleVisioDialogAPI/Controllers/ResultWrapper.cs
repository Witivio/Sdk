using SimpleVisioDialogAPI.Models.Dto;

namespace SimpleVisioDialogAPI.Controllers
{
    internal class ResultWrapper<T>
    {
        private SimpleDto simpleDto;

        public ResultWrapper(SimpleDto simpleDto)
        {
            this.simpleDto = simpleDto;
        }
    }
}