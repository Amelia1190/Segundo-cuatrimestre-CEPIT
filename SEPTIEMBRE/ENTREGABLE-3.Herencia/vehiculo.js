"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, uso, tipo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.uso = uso;
        this.tipo = tipo;
        this.patente = patente;
    }
    //GETTER(LO AGREGUE PQ SINO NO ME DEJA BUSCAR UN VEHICULO POR PATENTE )
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
