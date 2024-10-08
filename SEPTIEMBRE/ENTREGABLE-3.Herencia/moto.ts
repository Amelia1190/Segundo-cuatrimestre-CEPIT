import { Vehiculo } from './vehiculo';

export class Moto extends Vehiculo {


    constructor(marca: string, modelo: string, uso: string, tipo: string, patente: string) {
        super(marca, modelo, uso, tipo, patente); 
        
    
    }

}
