import { Persona } from "./persona";

export class Jugador extends Persona {
  setesCapitan(arg0: boolean) {
      throw new Error("Method not implemented.");
  }
  private camiseta: number;

  private posicion: string;
  private esCapitan: boolean;
  private equipoActual: string;

  // Constructor de la clase Jugador
  constructor(
    nombre: string,
    apellido: string,
    pasaporte: string,
    fechaNacimiento: Date,
    camiseta: number,
    posicion: string,
    esCapitan: boolean,
    equipoActual: string
  ) {
    // Llamada al constructor de la clase base (Persona)
    super(nombre, apellido, pasaporte, fechaNacimiento);

    // Inicialización de las propiedades de Jugador
    this.camiseta = camiseta;
    this.posicion = posicion;
    this.esCapitan = esCapitan; 
    this.equipoActual = equipoActual;
  }

}
