"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libros_1 = require("./libros");
var gestorLibros_1 = require("./gestorLibros");
var martinFierro = new libros_1.Libro("Martin Fierro", "José Hernández", 1970);
var martinFierro1 = new libros_1.Libro("Martin Fierro", "José Hernández", 1970);
var gestorLibros = new gestorLibros_1.GestorLibro("Gestor de Libros");
// Agregar el libro al gestor
gestorLibros.agregarLibro("Martin Fierro", "José Hernández", 1970);
console.log(gestorLibros.getListaLibros());
console.log(martinFierro);
