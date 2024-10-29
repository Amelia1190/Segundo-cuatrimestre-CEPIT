import { caballero } from "./caballero";
import { Personajes } from "./personajes";

export class ladydi extends Personajes {
  public nombre2: string= "Diana"
  public cantoDeSirena: number;
  public estiloDeDanzaDeCombate : string;
  public defensa: number= 50; 
  public vida: number=100;
   
 
     constructor(nombre: string, nivel: number = 1, habilidades: string, cantoDeSirena: number,stiloDeDanzaDeCombate : string) {
         super(nombre, nivel, habilidades);
          this.cantoDeSirena= cantoDeSirena = 7;
         this.estiloDeDanzaDeCombate= "baile de lucha"
         this.nombre2= "Lady di"
        
     }
     // Atacar
 public  getatacar(){
     return  this. cantoDeSirena;
   }
   public setatacar(cantidadDeCanciones: number){
      this.cantoDeSirena= cantidadDeCanciones;
  }
 
   
 // //Defender 
 public getdefender(){
    return this.estiloDeDanzaDeCombate;
     }
   public setdefender(estiloDeDanzaDeCombate: string){
     this.estiloDeDanzaDeCombate= estiloDeDanzaDeCombate;
 }


//  metodos

public atacar(objetivo: caballero): void {
    let danio = this.cantoDeSirena * 3; 
    objetivo.vida -= danio;
    console.log(`${this.nombre} utiliza su canto de sirena para atacar a Conan y su  ${objetivo.escudoDeAcero}. El caballero  recibe ${danio} puntos de daño.`);
}


public defender(): void {
    this.defensa === 50; 
      console.log(`${this.nombre2} utiliza su ${this.estiloDeDanzaDeCombate} para defenderse. Reduce ${this.defensa} puntos de daño ante cualquier ataque del contrincante.`);

}
}