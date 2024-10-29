import { caballero } from "./caballero";
import { Personajes } from "./personajes";



export class verdugo extends Personajes {
    
public elementosTortura: number;
public hachaDeVerdugo: string;
public defensa: number;
   
 
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
//   METODOS

 public atacar( objetivo: caballero): void {
    let danio = this.elementosTortura* 2;
    objetivo.vida -= danio;
    objetivo.estado = "intimidado";
    console.log(`${this.nombre} ataca a Conan con su ${this.hachaDeVerdugo} infligiendo ${danio} de daño.`);
   
 }

public defender(): void {
    this.defensa === 100;
    console.log (`El verdugo utiliza su arma final con un poder ${this.elementosTortura} dejando extinto al Conan. Su nivel de defensa se mantiene en 100. ` )
}
}
