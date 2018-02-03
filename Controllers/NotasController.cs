using System;
using Microsoft.AspNetCore.Mvc;
using ProjetoFerias.Models;

namespace ProjetoFerias.Controllers
{
    [Route("api/notas/")]
    public class NotasController : Controller
    {   [HttpGet]
        public IActionResult CalcularNota(Notas n){
            var result = n.Calcular();
            Console.WriteLine(n.N1+" "+n.N2);
            return Ok(result);
        }
    }
}