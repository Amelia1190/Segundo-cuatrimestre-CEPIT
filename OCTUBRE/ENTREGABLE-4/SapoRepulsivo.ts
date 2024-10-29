import { mago} from "./mago";
import { Personajes } from "./personajes"; 

export class SapoRepulsivo extends Personajes {
    
    private veneno: number; // Toxicidad de su vómito
    private colorCamuflaje: string= "amarillo brillante" // Color para camuflarse
    private nivelDeNauseas: number; 
    private vida:number= 50;

 constructor(nombre: string, nivel: number, habilidades: string, veneno: number, colorCamuflaje: string, nivelDeNauseas = 22) {
        super(nombre, nivel, habilidades);
        this.veneno = veneno;
        this.colorCamuflaje = colorCamuflaje;
        this.nivelDeNauseas = nivelDeNauseas;
    }

    

    atacar(Mago: mago): void {
        console.log(`${this.nombre} escupe un chorro de baba tóxica de intensidad ${this.veneno} a Gandalf.`);
    Mago.recibirDano(this.veneno);
    }

    defender(): void {
        console.log(`${this.nombre} y su  ${this.colorCamuflaje} lo utiliza  como una señal de advertencia para sus depredadores. Su nivel de nauseas se mantiene en ${this.nivelDeNauseas}.`);
    }



    recibirDano(daño: number) {
        this.vida = 0;
        console.log(`${this.nombre} ha recibido ${daño} de daño. Vida restante: ${this.vida}.`);
      }

   
}