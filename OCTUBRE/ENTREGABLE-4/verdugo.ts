import { Personajes } from "./personajes";


export class verdugo extends Personajes {
    public atacar(): void {
     }
    public defender(): void {
     }
  public elementosTortura: number;
  public hachaDeVerdugo: string;
   
 
     constructor(nombre: string, nivel: number = 1, habilidades: string, _elementosTortura: number, _hachaDeVerdugo: string) {
         super(nombre, nivel, habilidades);
          this.elementosTortura = 5;
         this.hachaDeVerdugo= "hacha de verdugo"
     }
     // Atacar
 public  getatacar(){
     return  this.elementosTortura;
 
   }
   public setatacar(elementosTortura: number){
      this.elementosTortura= elementosTortura;
  }
 
   
 // //Defender 
 public getdefender(){
    return this.hachaDeVerdugo;
     }
   public setdefender(hachaDeVerdugo: string){
     this.hachaDeVerdugo= hachaDeVerdugo;
 }
 

}