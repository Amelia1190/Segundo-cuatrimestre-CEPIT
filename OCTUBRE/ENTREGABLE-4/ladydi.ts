import { Personajes } from "./personajes";

export class ladydi extends Personajes {
    public atacar(): void {
     }
    public defender(): void {
     }
  public cantoDeSirena: number;
  public danceFeghting: string;
   
 
     constructor(nombre: string, nivel: number = 1, habilidades: string, cantoDeSirena: number, danceFeghting: string) {
         super(nombre, nivel, habilidades);
          this.cantoDeSirena= 7;
         this.danceFeghting= "baile de lucha"
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
    return this.danceFeghting;
     }
   public setdefender(danceFeghting: string){
     this.danceFeghting= danceFeghting;
 }
 
}
