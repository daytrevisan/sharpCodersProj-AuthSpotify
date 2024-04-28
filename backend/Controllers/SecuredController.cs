using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace myApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SecuredController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public void Test()
        {
            return;
        }
    }
}