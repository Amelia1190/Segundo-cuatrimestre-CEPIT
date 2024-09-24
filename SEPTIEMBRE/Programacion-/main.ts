import { Libro } from "./libros";
import { GestorLibro } from "./gestorLibros";

let martinFierro: Libro = new Libro("Martin Fierro", "José Hernández", 1970);
let martinFierro1: Libro = new Libro("Martin Fierro", "José Hernández", 1970);
let gestorLibros: GestorLibro = new GestorLibro("Gestor de Libros");

// Agregar el libro al gestor
gestorLibros.agregarLibro("Martin Fierro", "José Hernández", 1970); 
console.log(gestorLibros.getListaLibros());
console.log(martinFierro)

