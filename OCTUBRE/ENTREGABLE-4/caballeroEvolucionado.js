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
exports.CaballeroEvolucionado = void 0;
var personajes_1 = require("./personajes");
var CaballeroEvolucionado = /** @class */ (function (_super) {
    __extends(CaballeroEvolucionado, _super);
    function CaballeroEvolucionado(nombre, nivel, habilidades, _experiencia, _NivelEvolucion, _fuerzaEspada, _escudoDeAcero) {
        if (_experiencia === void 0) { _experiencia = 500; }
        if (_fuerzaEspada === void 0) { _fuerzaEspada = 10; }
        var _this = _super.call(this, nombre, nivel, habilidades) || this;
        _this.habilidadEspecial1 = "Corte Celestial";
        _this.fuerzaEspada = 100;
        _this.nivelEvolucion = "experto";
        return _this;
    }
    // Método para usar la habilidad especial
    CaballeroEvolucionado.prototype.habilidadEspecial = function () {
        console.log("El Caballero Evolucionado ejecuta Corte Celestial, demostrando el poder que ha recibido de los dioses.");
        this.fuerzaEspada *= 1.5; // Aumenta la fuerza del ataque.
    };
    CaballeroEvolucionado.prototype.atacar = function (objetivo) {
        var daño = this.fuerzaEspada * 2;
        console.log("".concat(this.nombre, " ataca con  ").concat(this.fuerzaEspada, " que es  un poderoso ataque, infligiendo ").concat(daño, " de da\u00F1o contra el Verdugo."));
    };
    CaballeroEvolucionado.prototype.defender = function () {
        console.log("".concat(this.nombre, " levanta su escudo y reduce el da\u00F1o recibido de parte del say\u00F3n."));
    };
    return CaballeroEvolucionado;
}(personajes_1.Personajes));
exports.CaballeroEvolucionado = CaballeroEvolucionado;
