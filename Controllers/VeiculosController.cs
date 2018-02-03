using Microsoft.AspNetCore.Mvc;
using ProjetoFerias.Models;

namespace ProjetoFerias.Controllers
{
    [Route("api/veiculos")]
    public class VeiculosController : Controller
    {
        [HttpGet]
        public IActionResult ObterGastos(double tempo, double velocidade){
            var v = new Veiculo();
            v.CalculaDistancia(tempo, velocidade);
            v.CalculaLitros();
            return Ok(v);
        }
        
    }
}