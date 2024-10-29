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
        _this.vida = 100;
        _this.cantidadHechizos = 500;
        _this.defVarita = "convierte en conejo";
        return _this;
    }
    // // Atacar
    // public  getatacar(SapoRepulsivo:SapoRepulsivo){
    //       console.log(`El mago ${this.nombre} lanza un hechizo poderoso!`)
    //       SapoRepulsivo.recibirDaño(this.cantidadHechizos)
    //     }
    mago.prototype.atacar = function (sapoRepulsivo) {
        console.log("El mago ".concat(this.nombre, " lanza un hechizo poderoso  de ").concat(this.cantidadHechizos, " de alcance  a sapoRepulsivo destruyendolo casi completamente. "));
    };
    mago.prototype.defender = function () {
        console.log("El mago ".concat(this.defVarita, " al enemigo y se protege con su varita m\u00E1gica creando una barrera energ\u00E9tica alrededor de \u00E9l."));
    };
    mago.prototype.recibirDano = function (daño) {
        this.vida = 0;
        console.log("".concat(this.nombre, " ha recibido ").concat(daño, " de da\u00F1o. Vida restante: ").concat(this.vida));
    };
    return mago;
}(personajes_1.Personajes));
exports.mago = mago;
