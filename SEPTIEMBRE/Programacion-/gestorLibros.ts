import { Libro } from "./libros";

export class GestorLibro {

    private nombre: string;
    private listaLibros: Libro[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.listaLibros = [];
    }

    // Getter para nombre
    public getNombre(): string {
        return this.nombre; // Controlamos lo que pasamos
    }

    public getListaLibros(): Libro[] {
        const copiaLibros: Libro[] = this.listaLibros.map(lib => new Libro(lib.getNombre(), lib.getAutor(), lib.getAnioEdicion()));
        return copiaLibros;
    }    

    // Setter para listaLibros
    public setListaLibros(listaLibros: Libro[]): void {
        this.listaLibros = listaLibros;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre; 
    }

    public eliminarLibro(libroAEliminar: Libro): void {
        // Corregido el error en la condición
        if (libroAEliminar !== undefined && this.listaLibros.includes(libroAEliminar)) {
            const posLibro: number = this.listaLibros.indexOf(libroAEliminar);
            this.listaLibros.splice(posLibro, 1); // Cambiado a splice para eliminar
        }
    }

    public agregarLibro(nombre: string, autor: string, anio: number): void {
        let nuevoLibro: Libro = new Libro(nombre, autor, anio);
        if (!this.listaLibros.some(lib =>
            lib.getNombre() === nombre &&
            lib.getAutor() === autor &&
            lib.getAnioEdicion() === anio)) {
            this.listaLibros.push(nuevoLibro);
        }
    }
}


