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
exports.SapoRepulsivo = void 0;
var personajes_1 = require("./personajes");
var SapoRepulsivo = /** @class */ (function (_super) {
    __extends(SapoRepulsivo, _super);
    function SapoRepulsivo(nombre, nivel, habilidades, veneno, colorCamuflaje, nivelDeNauseas) {
        if (nivelDeNauseas === void 0) { nivelDeNauseas = 22; }
        var _this = _super.call(this, nombre, nivel, habilidades) || this;
        _this.veneno = veneno;
        _this.colorCamuflaje = colorCamuflaje;
        _this.nivelDeNauseas = nivelDeNauseas;
        return _this;
    }
    SapoRepulsivo.prototype.atacar = function (Mago) {
        console.log("".concat(this.nombre, " escupe un chorro de baba t\u00F3xica (").concat(this.veneno, ") a Gandalf"));
        Mago.recibirDaño(this.veneno);
    };
    SapoRepulsivo.prototype.defender = function () {
        console.log("".concat(this.colorCamuflaje, " utiliza su color amarillo brillante como una se\u00F1al de advertencia para sus depredadores. Su nivel de nauseas se mantiene en ").concat(this.nivelDeNauseas));
    };
    return SapoRepulsivo;
}(personajes_1.Personajes));
exports.SapoRepulsivo = SapoRepulsivo;
