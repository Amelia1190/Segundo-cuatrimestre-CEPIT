

export class Vehiculo {
    private marca: string;
    private modelo: string;
    private tipo: string;
    private uso: string;
    private patente: string;// agregue patente.

    constructor(marca: string, modelo: string, tipo: string, uso: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.uso = uso;
        this.patente = patente;
    }

   

// Getters
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
public getPatente(): string{
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