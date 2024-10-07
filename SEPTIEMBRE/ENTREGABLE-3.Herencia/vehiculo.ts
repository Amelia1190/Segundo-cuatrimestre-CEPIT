export class Vehiculo {
    protected marca: string;
    protected modelo: string;     // USE PROTECTED 
    protected uso: string; 
    protected tipo: string; 
    protected patente: string; 

    constructor(marca: string, modelo: string, uso: string, tipo: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.uso = uso;
        this.tipo = tipo;
        this.patente = patente;
    }



    //GETTER(LO AGREGUE PQ SINO NO ME DEJA BUSCAR UN VEHICULO POR PATENTE )

    public getPatente(patente: string): string{
        return this.patente;
    }
}
