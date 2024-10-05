"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, tipo, uso, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.uso = uso;
        this.patente = patente;
    }
    // Getters
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getTipo = function () {
        return this.tipo;
    };
    Vehiculo.prototype.getUso = function () {
        return this.uso;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    // Setters
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Vehiculo.prototype.setUso = function (uso) {
        this.uso = uso;
    };
    Vehiculo.prototype.setPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
