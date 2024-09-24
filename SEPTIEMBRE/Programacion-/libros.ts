


export class Libro {
    private nombre: string; // Propiedades/Atributos
    private autor: string;
    private anioEdicion: number;

    constructor(nombre: string, autor: string, anioEdicion: number) { // Inicializa las propiedades
        this.nombre = nombre;
        this.autor = autor;
        this.anioEdicion = anioEdicion; // Con THIS se le asigna el argumento a cada uno
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getAutor(): string {
        return this.autor; // Corregido: debe devolver this.autor
    }

    public getAnioEdicion(): number { // Corregido el nombre del método
        return this.anioEdicion; // Corregido: debe devolver this.anioEdicion
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = this.nombre;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public setAnioEdicion(anioEdicion: number): void {
        this.anioEdicion = anioEdicion;
    }
}



