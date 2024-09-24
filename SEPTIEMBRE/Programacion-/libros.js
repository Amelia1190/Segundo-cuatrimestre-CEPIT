"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombre, autor, anioEdicion) {
        this.nombre = nombre;
        this.autor = autor;
        this.anioEdicion = anioEdicion; // Con THIS se le asigna el argumento a cada uno
    }
    // Getters
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.getAutor = function () {
        return this.autor; // Corregido: debe devolver this.autor
    };
    Libro.prototype.getAnioEdicion = function () {
        return this.anioEdicion; // Corregido: debe devolver this.anioEdicion
    };
    // Setters
    Libro.prototype.setNombre = function (nombre) {
        this.nombre = this.nombre;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.setAnioEdicion = function (anioEdicion) {
        this.anioEdicion = anioEdicion;
    };
    return Libro;
}());
exports.Libro = Libro;
