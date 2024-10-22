

import { Personajes } from "./personajes";
//  const defVarita= "hsjsjs";
 
export class mago extends Personajes {
    atacar(): void {
    }
    defender(): void {
    }
 private cantidadHechizos: number;
 private  defVarita: string;
 private vida:number= -10;
  

    constructor(nombre: string, nivel: number, habilidades: string, cantidadHechizos: number, defVarita: string) {
        super(nombre, nivel, habilidades);
         this.cantidadHechizos = 5;
        this.defVarita= "Convierte en conejo"
    }


// Atacar
public  getatacar(){
      console.log(`El mago ${this.nombre} lanza un hechizo poderoso!`)

    }

 //Defender 
public getdefender(){
  console.log(`El mago ${this.nombre} se protege con su varita ${this.defVarita}.`);
      }
    public setdefender(defVarita: string){
      this.defVarita= defVarita;
 }
  // Metodo para ganar Experiencia
  
  recibirDaño(daño: number) {
    this.vida = 0;
    console.log(`${this.nombre} ha recibido ${daño} de daño. Vida restante: ${this.vida}`);
  }
 }

