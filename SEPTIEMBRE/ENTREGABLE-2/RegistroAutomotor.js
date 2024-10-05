"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listaVehiculo = [];
    }
    // Agregar vehículo
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.listaVehiculo.push(vehiculo);
    };
    // Obtener la lista de vehículos
    RegistroAutomotor.prototype.getRegistroAutomotor = function () {
        return this.listaVehiculo; // Devuelve la lista de vehículos
    };
    // Eliminar vehículo
    RegistroAutomotor.prototype.eliminarVehiculo = function (vehiculoAEliminar) {
        var posVehiculo = this.listaVehiculo.indexOf(vehiculoAEliminar);
        if (posVehiculo !== -1) {
            this.listaVehiculo.splice(posVehiculo, 1); // Eliminar vehículo
        }
    };
    // Getters
    RegistroAutomotor.prototype.getListaVehiculo = function () {
        return this.listaVehiculo; // Retorna la lista de vehículos
    };
    // Buscar vehículo por patente en la lista
    RegistroAutomotor.prototype.buscarVehiculoPorPatente = function (patente) {
        var vehiculo = this.listaVehiculo.find(function (vehiculo) { return vehiculo.getPatente() === patente; });
        return vehiculo; // Devuelve el vehículo encontrado
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
