import { Vehiculo } from './vehiculo';

export class Camion extends Vehiculo {

    constructor(marca: string, modelo: string, uso: string, tipo: string, patente: string) {
        super(marca, modelo,uso, tipo, patente); // llamo al constructor de vehiculo
    }


}
