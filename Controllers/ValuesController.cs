using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ProjetoFerias.Controllers
{
    [Route("api/valores/")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IActionResult Get(int num1, int num2)
        {   
            var m = 0;
            var i = 0;
            if(num1<num2){
                for(i = num1; i<=num2;i++){
                    m+=i;
                }
                return Ok(m/i);
            }else if(num1>num2){
                for(i = num2; i<=num1;i++){
                    if(i%2==0){
                        m+=1;
                    }
                }
                return Ok(m);
            }
            return BadRequest("Os números não podem ser iguais");
        }

        
    }
}
