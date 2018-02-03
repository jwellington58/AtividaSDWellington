namespace ProjetoFerias.Models
{
    public class Notas
    {
        public float N1 { get; set; }
        public float N2 { get; set; }
        public string Calcular(){
            var result = (this.N1*2 + this.N2*3)/5;
            if(result >= 7 && result <= 10){return "aprovado";}
            else if(result >= 5 && result < 7){return "recuperação";}
            return "reprovado";
        }
    }
}