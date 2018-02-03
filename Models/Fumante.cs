namespace ProjetoFerias.Models
{
    public class Fumante
    {
        public float Anos { get; set; }
        public int Cigarros { get; set; }
        public float Carteira { get; set; }

        public float CalculaGastos(){
            var result = (this.Anos * 360 * this.Cigarros) * (this.Carteira/20);
            return result;
        }
    }
}