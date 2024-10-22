import { mago} from "./mago";
import { Personajes } from "./personajes";

export class SapoRepulsivo extends Personajes {
    
    private veneno: number; // Toxicidad de su vómito
    private colorCamuflaje: string; // Color para camuflarse
    private nivelDeNauseas: number; 

   public  constructor(nombre: string, nivel: number, habilidades: string, veneno: number, colorCamuflaje: string, nivelDeNauseas = 22) {
        super(nombre, nivel, habilidades);
        this.veneno = veneno;
        this.colorCamuflaje = colorCamuflaje;
        this.nivelDeNauseas = nivelDeNauseas;
    }

    

    atacar(Mago: mago): void {
        console.log(`${this.nombre} escupe un chorro de baba tóxica (${this.veneno}) a Gandalf`);
        Mago.recibirDaño(this.veneno);
    }

    defender(): void {
        console.log(`${this.colorCamuflaje} utiliza su color amarillo brillante como una señal de advertencia para sus depredadores. Su nivel de nauseas se mantiene en ${this.nivelDeNauseas}`);
    }
}