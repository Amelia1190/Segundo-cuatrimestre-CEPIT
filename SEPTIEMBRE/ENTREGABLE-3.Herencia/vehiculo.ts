
export class Vehiculo {
    protected marca: string;
    protected modelo: string;     // USE PROTECTED= clase padre
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


// Getters(LO AGREGUE PQ SINO NO ME DEJA BUSCAR UN VEHICULO POR PATENTE )
public getMarca(): string {
    return this.marca;
}

public getModelo(): string {
    return this.modelo; 
}

public getTipo(): string { 
    return this.tipo; 
}

public getUso(): string {
    return this.uso;
} 
public getPatente(patente:string): string{
    return this.patente;
}

// Setters
public setMarca(marca: string): void {
    this.marca = marca; 
}

public setModelo(modelo: string): void {
    this.modelo = modelo; 
}

public setTipo(tipo: string): void {
    this.tipo = tipo; 
}

public setUso(uso: string): void {
    this.uso = uso; 
}

public setPatente(patente: string): string{
    return this.patente;}

}
