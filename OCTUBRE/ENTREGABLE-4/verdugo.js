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
exports.verdugo = void 0;
var personajes_1 = require("./personajes");
var verdugo = /** @class */ (function (_super) {
    __extends(verdugo, _super);
    function verdugo(nombre, nivel, habilidades, _elementosTortura, _hachaDeVerdugo) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel, habilidades) || this;
        _this.elementosTortura = 5;
        _this.hachaDeVerdugo = "hacha de verdugo";
        return _this;
    }
    verdugo.prototype.atacar = function () {
    };
    verdugo.prototype.defender = function () {
    };
    // Atacar
    verdugo.prototype.getatacar = function () {
        return this.elementosTortura;
    };
    verdugo.prototype.setatacar = function (elementosTortura) {
        this.elementosTortura = elementosTortura;
    };
    // //Defender 
    verdugo.prototype.getdefender = function () {
        return this.hachaDeVerdugo;
    };
    verdugo.prototype.setdefender = function (hachaDeVerdugo) {
        this.hachaDeVerdugo = hachaDeVerdugo;
    };
    return verdugo;
}(personajes_1.Personajes));
exports.verdugo = verdugo;
