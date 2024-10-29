

import { Personajes } from "./personajes";
import { SapoRepulsivo } from "./SapoRepulsivo";
//  const defVarita= "hsjsjs";
 
export class mago extends Personajes {
  
 private cantidadHechizos: number;
 private  defVarita: string;
 private vida:number= 100;

  

    constructor(nombre: string, nivel: number, habilidades: string, cantidadHechizos: number, defVarita: string) {
        super(nombre, nivel, habilidades);
         this.cantidadHechizos = 500;
        this.defVarita= "convierte en conejo"
    }


// // Atacar
// public  getatacar(SapoRepulsivo:SapoRepulsivo){
//       console.log(`El mago ${this.nombre} lanza un hechizo poderoso!`)
//       SapoRepulsivo.recibirDaño(this.cantidadHechizos)
//     }



  atacar(sapoRepulsivo:SapoRepulsivo): void {
    console.log(`El mago ${this.nombre} lanza un hechizo poderoso  de ${this.cantidadHechizos} de alcance  a sapoRepulsivo destruyendolo casi completamente. `);
   
  }

  defender(): void {
    console.log(`El mago ${this.defVarita} al enemigo y se protege con su varita mágica creando una barrera energética alrededor de él.`);
  }




 recibirDano(daño: number) {
     this.vida = 0;
    console.log(`${this.nombre} ha recibido ${daño} de daño. Vida restante: ${this.vida}`);
}
}
  



