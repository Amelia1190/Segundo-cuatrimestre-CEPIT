"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDePersonajes = void 0;
var ListaDePersonajes = /** @class */ (function () {
    function ListaDePersonajes() {
        this.listaPersonajes = [];
    }
    ListaDePersonajes.prototype.agregarPersonaje = function (personaje) {
        this.listaPersonajes.push(personaje);
    };
    // Obtener la lista de personajes
    ListaDePersonajes.prototype.getListaPersonajes = function () {
        return this.listaPersonajes;
    };
    ListaDePersonajes.prototype.mostrarInfo = function () {
        this.listaPersonajes.forEach(function (personaje) {
            console.log(personaje);
        });
    };
    return ListaDePersonajes;
}());
exports.ListaDePersonajes = ListaDePersonajes;
