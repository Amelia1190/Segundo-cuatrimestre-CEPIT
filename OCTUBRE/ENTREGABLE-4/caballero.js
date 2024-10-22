"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.caballero = void 0;
var personajes_1 = require("./personajes");
var caballero = /** @class */ (function (_super) {
    __extends(caballero, _super);
    function caballero(nombre, nivel, habilidades, _experiencia, _NivelEvolucion, _fuerzaEspada, _escudoDeAcero) {
        if (_experiencia === void 0) { _experiencia = 500; }
        if (_fuerzaEspada === void 0) { _fuerzaEspada = 10; }
        var _this = _super.call(this, nombre, nivel, habilidades) || this;
        _this.experiencia = 5;
        _this.nivelEvolucion = "novato";
        _this.fuerzaEspada = 1000;
        _this.escudoDeAcero = "escudo potente";
        return _this;
    }
    // Atacar
    caballero.prototype.getatacar = function () {
        return this.fuerzaEspada;
    };
    caballero.prototype.setatacar = function (fuerzaEspada) {
        this.fuerzaEspada = fuerzaEspada;
    };
    //Defender 
    caballero.prototype.getdefender = function () {
        return this.escudoDeAcero;
    };
    caballero.prototype.setdefender = function (escudoDeAcero) {
        this.escudoDeAcero = escudoDeAcero;
    };
    caballero.prototype.atacar = function () {
    };
    caballero.prototype.defender = function () {
    };
    // METODO PARA EVOLUCIONAR
    caballero.prototype.evolucionar = function () {
        if (this.experiencia >= 1000) {
            this.nivelEvolucion = "experto";
            this.fuerzaEspada += 1000; // Aumenta la fuerza de la espada
            this.experiencia = 10; // experiencia
        }
    };
    return caballero;
}(personajes_1.Personajes));
exports.caballero = caballero;
