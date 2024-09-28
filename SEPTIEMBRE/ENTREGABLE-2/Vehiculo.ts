

export class Vehiculo {
    private marca: string;
    private modelo: string;
    private tipo: string;
    private uso: string;


    constructor (marca: string, modelo: string, tipo: string, uso: string){
        this.marca=marca;
        this.modelo=modelo;
        this.tipo= tipo;
        this.uso= uso;
        
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
}



