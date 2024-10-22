export abstract class vehiculo{
    protected  marca: string;
    protected modelo: string;
    protected año: string;

    // Constructor
    constructor (marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
abstract capacidad(): void
 calcularConsumo(distanciaRecorrida: number , litrosConsumidos: number) {
    return litrosConsumidos / distanciaRecorrida;
}
}