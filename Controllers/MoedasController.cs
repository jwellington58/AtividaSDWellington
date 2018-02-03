using Microsoft.AspNetCore.Mvc;
using ProjetoFerias.Models;

namespace ProjetoFerias.Controllers
{
    [Route("api/moedas/")]
    public class MoedasController : Controller
    {
        [HttpGet]
        public IActionResult CalculaMoedas(int nota){
            
            var moeda = new Moeda();
            moeda.Moedas10 = ((nota)/0.1);
            moeda.Moedas25 = nota/0.25;
            moeda.Moedas50 = nota/0.5;
        
            return Ok(moeda);
        }
        
    }
}