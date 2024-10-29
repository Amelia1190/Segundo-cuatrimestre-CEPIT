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
exports.ladydi = void 0;
var personajes_1 = require("./personajes");
var ladydi = /** @class */ (function (_super) {
    __extends(ladydi, _super);
    function ladydi(nombre, nivel, habilidades, cantoDeSirena, stiloDeDanzaDeCombate) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel, habilidades) || this;
        _this.nombre2 = "Diana";
        _this.defensa = 50;
        _this.vida = 100;
        _this.cantoDeSirena = cantoDeSirena = 7;
        _this.estiloDeDanzaDeCombate = "baile de lucha";
        _this.nombre2 = "Lady di";
        return _this;
    }
    // Atacar
    ladydi.prototype.getatacar = function () {
        return this.cantoDeSirena;
    };
    ladydi.prototype.setatacar = function (cantidadDeCanciones) {
        this.cantoDeSirena = cantidadDeCanciones;
    };
    // //Defender 
    ladydi.prototype.getdefender = function () {
        return this.estiloDeDanzaDeCombate;
    };
    ladydi.prototype.setdefender = function (estiloDeDanzaDeCombate) {
        this.estiloDeDanzaDeCombate = estiloDeDanzaDeCombate;
    };
    //  metodos
    ladydi.prototype.atacar = function (objetivo) {
        var danio = this.cantoDeSirena * 3;
        objetivo.vida -= danio;
        console.log("".concat(this.nombre, " utiliza su canto de sirena para atacar a Conan y su  ").concat(objetivo.escudoDeAcero, ". El caballero  recibe ").concat(danio, " puntos de da\u00F1o."));
    };
    ladydi.prototype.defender = function () {
        this.defensa === 50;
        console.log("".concat(this.nombre2, " utiliza su ").concat(this.estiloDeDanzaDeCombate, " para defenderse. Reduce ").concat(this.defensa, " puntos de da\u00F1o ante cualquier ataque del contrincante."));
    };
    return ladydi;
}(personajes_1.Personajes));
exports.ladydi = ladydi;
