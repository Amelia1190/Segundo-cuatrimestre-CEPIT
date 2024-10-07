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
    RegistroAutomotor.prototype.getListaVehiculo = function () {
        return this.listaVehiculo;
    };
    // Eliminar vehículo
    RegistroAutomotor.prototype.eliminarVehiculo = function (vehiculoAEliminar) {
        var posVehiculo = this.listaVehiculo.indexOf(vehiculoAEliminar);
        if (posVehiculo !== -1) {
            this.listaVehiculo.splice(posVehiculo, 1);
            console.log("Vehículo eliminado con éxito.");
        }
        else {
            console.log("Vehículo no encontrado.");
        }
    };
    // Buscar vehículo por patente
    RegistroAutomotor.prototype.buscarVehiculoPorPatente = function (patente) {
        return this.listaVehiculo.find(function (vehiculo) { return vehiculo.getPatente() === patente; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
