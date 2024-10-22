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
exports.mago = void 0;
var personajes_1 = require("./personajes");
//  const defVarita= "hsjsjs";
var mago = /** @class */ (function (_super) {
    __extends(mago, _super);
    function mago(nombre, nivel, habilidades, cantidadHechizos, defVarita) {
        var _this = _super.call(this, nombre, nivel, habilidades) || this;
        _this.vida = -10;
        _this.cantidadHechizos = 5;
        _this.defVarita = "Convierte en conejo";
        return _this;
    }
    mago.prototype.atacar = function () {
    };
    mago.prototype.defender = function () {
    };
    // Atacar
    mago.prototype.getatacar = function () {
        console.log("El mago ".concat(this.nombre, " lanza un hechizo poderoso!"));
    };
    //Defender 
    mago.prototype.getdefender = function () {
        console.log("El mago ".concat(this.nombre, " se protege con su varita ").concat(this.defVarita, "."));
    };
    mago.prototype.setdefender = function (defVarita) {
        this.defVarita = defVarita;
    };
    // Metodo para ganar Experiencia
    mago.prototype.recibirDaño = function (daño) {
        this.vida = 0;
        console.log("".concat(this.nombre, " ha recibido ").concat(daño, " de da\u00F1o. Vida restante: ").concat(this.vida));
    };
    return mago;
}(personajes_1.Personajes));
exports.mago = mago;
