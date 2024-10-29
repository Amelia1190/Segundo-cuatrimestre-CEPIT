"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculo = void 0;
var vehiculo = /** @class */ (function () {
    // Constructor
    function vehiculo(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    vehiculo.prototype.calcularConsumo = function (distanciaRecorrida, litrosConsumidos) {
        return litrosConsumidos / distanciaRecorrida;
    };
    return vehiculo;
}());
exports.vehiculo = vehiculo;
