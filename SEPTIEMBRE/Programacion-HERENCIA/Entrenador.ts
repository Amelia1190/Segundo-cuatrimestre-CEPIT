import { Persona } from "./persona";
import { Jugador } from "./Jugador";

export class jugador extends Persona {
    private arrJugadores: Jugador[];

    constructor(nombre: string, dni: number, arrJug: Jugador[]) {
        super(nombre, dni);
        this.arrJugadores = arrJug; // Asignación correcta
    }

    public cambiarCapitan(jugador: Jugador): void {
        for (let i = 0; i < this.arrJugadores.length; i++) {
            this.arrJugadores[i].setesCapitan(false); 
        }
        jugador.setesCapitan(true); // Activar nuevo capitán
    }

    // Método para establecer si un jugador es capitán
    public setEsCapitan(esCapitan: boolean): void {
        this.setesCapitan= esCapitan; 
    }
}
