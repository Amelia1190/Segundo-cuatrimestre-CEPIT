import { vehiculo } from "./vehiculo";

export class AutoCiudad extends vehiculo {
 private consumo: number;
  private capacidadDePasajeros: number;
    static calcularConsumo: any;
  

  constructor(marca: string, modelo: string, año: number, capacidadDePasajeros: number, consumo: number) {
    super(marca, modelo, año);
    this.capacidadDePasajeros = capacidadDePasajeros;
    this.consumo= consumo;
  }
capacidad(){
    return 5;
}
calcularConsumo(distanciaRecorrida=100, litrosConsumidos=8) {
        return litrosConsumidos* distanciaRecorrida;
  }
}