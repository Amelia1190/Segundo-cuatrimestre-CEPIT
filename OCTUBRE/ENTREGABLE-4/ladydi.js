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
    function ladydi(nombre, nivel, habilidades, cantoDeSirena, danceFeghting) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel, habilidades) || this;
        _this.cantoDeSirena = 7;
        _this.danceFeghting = "baile de lucha";
        return _this;
    }
    ladydi.prototype.atacar = function () {
    };
    ladydi.prototype.defender = function () {
    };
    // Atacar
    ladydi.prototype.getatacar = function () {
        return this.cantoDeSirena;
    };
    ladydi.prototype.setatacar = function (cantidadDeCanciones) {
        this.cantoDeSirena = cantidadDeCanciones;
    };
    // //Defender 
    ladydi.prototype.getdefender = function () {
        return this.danceFeghting;
    };
    ladydi.prototype.setdefender = function (danceFeghting) {
        this.danceFeghting = danceFeghting;
    };
    return ladydi;
}(personajes_1.Personajes));
exports.ladydi = ladydi;
