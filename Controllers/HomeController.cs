using Microsoft.AspNetCore.Mvc;

namespace ProjetoFerias.Controllers
{   [Route("/home/")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult index()
        {
            return View();
        }
        
    }
}