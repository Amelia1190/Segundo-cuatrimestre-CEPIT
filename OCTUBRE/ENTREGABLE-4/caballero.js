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
        _this.experiencia = 500;
        _this.nivelEvolucion = "novato";
        _this.defensa = 150;
        _this.fuerzaEspada = 50;
        _this.escudoDeAcero = "escudo potente";
        _this.vida = 100;
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
    caballero.prototype.atacar = function (objetivo) {
        var danio = this.fuerzaEspada * 2;
        objetivo.vida -= danio;
        console.log("".concat(this.nombre, " utiliza todo su poder para atacar a Ladydi, dejando con vida ").concat(objetivo.vida, ". La princesa recibe ").concat(danio, " puntos de da\u00F1o"));
    };
    caballero.prototype.defender = function () {
        this.defensa === 50;
        console.log("Caballero utiliza su ".concat(this.escudoDeAcero, " para defenderse. Reduce ").concat(this.defensa, " puntos de da\u00F1o ante cualquier ataque del contrincante."));
    };
    return caballero;
}(personajes_1.Personajes));
exports.caballero = caballero;
