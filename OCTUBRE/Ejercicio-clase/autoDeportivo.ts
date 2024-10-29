import { vehiculo } from "./vehiculo";

export class AutoDeportivo extends vehiculo {
  private capacidadDePasajeros: number;

  constructor(marca: string, modelo: string, año: number, capacidadDePasajeros: number) {
    super(marca, modelo, año);
    this.capacidadDePasajeros = capacidadDePasajeros;
  }
capacidad(){
    return 3;
  }
}