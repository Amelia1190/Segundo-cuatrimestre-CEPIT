import { Personajes } from "./personajes";
import { verdugo } from "./verdugo";

export class CaballeroEvolucionado extends Personajes {
public habilidadEspecial1: string = "Corte Celestial";
public nivelEvolucion: string;
public fuerzaEspada: number=100;

    constructor(nombre: string, nivel: number, habilidades: string, _experiencia = 500, _NivelEvolucion: string, _fuerzaEspada = 10, _escudoDeAcero: string) {
        super(nombre, nivel, habilidades);
        this.nivelEvolucion = "experto";
    }

    // Método para usar la habilidad especial
    habilidadEspecial(): void {
        console.log("El Caballero Evolucionado ejecuta Corte Celestial, demostrando el poder que ha recibido de los dioses.");
        this.fuerzaEspada *= 1.5; // Aumenta la fuerza del ataque.
    }

     atacar(objetivo: verdugo): void {
       let  daño = this.fuerzaEspada * 2;
      console.log(`${this.nombre} ataca con  ${this.fuerzaEspada} que es  un poderoso ataque, infligiendo ${daño} de daño contra el Verdugo.`);
    }

    defender(): void {
        
        console.log(`${this.nombre} levanta su escudo y reduce el daño recibido de parte del sayón.`);
}
}