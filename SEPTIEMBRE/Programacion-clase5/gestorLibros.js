"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLibro = void 0;
var libros_1 = require("./libros");
var GestorLibro = /** @class */ (function () {
    function GestorLibro(nombre) {
        this.nombre = nombre;
        this.listaLibros = [];
    }
    // Getter para nombre
    GestorLibro.prototype.getNombre = function () {
        return this.nombre; // Controlamos lo que pasamos
    };
    GestorLibro.prototype.getListaLibros = function () {
        var copiaLibros = this.listaLibros.map(function (lib) { return new libros_1.Libro(lib.getNombre(), lib.getAutor(), lib.getAnioEdicion()); });
        return copiaLibros;
    };
    // Setter para listaLibros
    GestorLibro.prototype.setListaLibros = function (listaLibros) {
        this.listaLibros = listaLibros;
    };
    GestorLibro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    GestorLibro.prototype.eliminarLibro = function (libroAEliminar) {
        // Corregido el error en la condición
        if (libroAEliminar !== undefined && this.listaLibros.includes(libroAEliminar)) {
            var posLibro = this.listaLibros.indexOf(libroAEliminar);
            this.listaLibros.splice(posLibro, 1); // Cambiado a splice para eliminar
        }
    };
    GestorLibro.prototype.agregarLibro = function (nombre, autor, anio) {
        var nuevoLibro = new libros_1.Libro(nombre, autor, anio);
        if (!this.listaLibros.some(function (lib) {
            return lib.getNombre() === nombre &&
                lib.getAutor() === autor &&
                lib.getAnioEdicion() === anio;
        })) {
            this.listaLibros.push(nuevoLibro);
        }
    };
    return GestorLibro;
}());
exports.GestorLibro = GestorLibro;
