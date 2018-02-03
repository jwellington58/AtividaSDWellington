namespace ProjetoFerias.Models
{
    public class Veiculo
    {
        public double Litros { get; set; }
        public double Distancia{get;set;}

        public void CalculaDistancia(double tempo, double velocidade){
            this.Distancia = tempo * velocidade;
        }
        public void CalculaLitros(){
            this.Litros = this.Distancia/12;
        }
    }
}