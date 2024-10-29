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
exports.camioneta = void 0;
var vehiculo_1 = require("./vehiculo");
var camioneta = /** @class */ (function (_super) {
    __extends(camioneta, _super);
    function camioneta(marca, modelo, año, capacidadDePasajeros) {
        var _this = _super.call(this, marca, modelo, año) || this;
        _this.capacidadDePasajeros = capacidadDePasajeros;
        return _this;
    }
    camioneta.prototype.capacidad = function () {
        return 10;
    };
    return camioneta;
}(vehiculo_1.vehiculo));
exports.camioneta = camioneta;
