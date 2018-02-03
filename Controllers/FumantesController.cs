using System;
using Microsoft.AspNetCore.Mvc;
using ProjetoFerias.Models;

namespace ProjetoFerias.Controllers
{   [Route("api/fumantes/")]
    public class FumantesController : Controller
    {
        [HttpPost]
        public IActionResult CalculaGastos([FromBody] Fumante f){
            //var r = f.CalculaGastos().ToString("0.00");
            return Ok(f.CalculaGastos());
        }
    }
}