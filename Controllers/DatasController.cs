using System;
using Microsoft.AspNetCore.Mvc;

namespace ProjetoFerias.Controllers
{   [Route("api/datas")]
    public class DatasController : Controller
    {
        [HttpGet]
        public IActionResult CalculaVencimento(int vencimento){
            DateTime data = new DateTime();
            data = DateTime.Now;
            data = data.AddDays(vencimento);
            
            return Ok(data.ToString("dd/MM/yyyy"));
            
        }
        [HttpPost]
        public IActionResult CalculaDia([FromBody] DateTime data){
            Console.WriteLine(data);
            data.ToString("dd/MM/yyyy");
            Console.WriteLine(data);
            var d = new DateTime(data.Year,data.Day,data.Month);
            return Ok(d.DayOfYear);
        }

        
    }
}