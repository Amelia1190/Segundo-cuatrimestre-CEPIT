"use strict";
/*import { Vehiculo } from "./vehiculo";

export class RegistroAutomotor {
    private listaVehiculo: Vehiculo[];

    constructor() {
        this.listaVehiculo = [];
    }

    // Agregar vehículo
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.listaVehiculo.push(vehiculo);
    }

    // Obtener la lista de vehículos
    public getListaVehiculo(): Vehiculo[] {
        return this.listaVehiculo;
    }

    // Eliminar vehículo
    public eliminarVehiculo(vehiculoAEliminar: Vehiculo): void {
        const posVehiculo: number = this.listaVehiculo.indexOf(vehiculoAEliminar);
        if (posVehiculo !== -1) {
            this.listaVehiculo.splice(posVehiculo, 1);
            console.log("Vehículo eliminado con éxito.");
        } else {
            console.log("Vehículo no encontrado.");
        }
    }
    // Buscar vehículo por patente
    public buscarVehiculoPorPatente(patente: string): Vehiculo | undefined {
        return this.listaVehiculo.find(vehiculo => vehiculo.getPatente() === patente);
}

    // Buscar vehículo por patente
    public buscarVehiculoPorPatente(patente: string): Vehiculo | undefined {
        return this.listaVehiculo.find(vehiculo => vehiculo.getPatente() === patente);
    }

    // Modificar un vehículo por su patente
   public modificarVehiculo(patenteActual: string, datosNuevos: { patente?: string }): void {
        const vehiculo = this.buscarVehiculoPorPatente(patenteActual);
        if (vehiculo) {
            if (datosNuevos.patente) vehiculo.setPatente(datosNuevos.patente);
            console.log(`El vehículo con patente ${patenteActual} ha sido modificado.`);
        } else {
            console.log(`No se encontró un vehículo con la patente: ${patenteActual}`);
        }
    }
    
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listaVehiculo = [];
    }
    // Agregar vehículo. Agrego los vehiculos al registro del automotor
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
        return this.listaVehiculo.find(function (vehiculo) { return vehiculo.getPatente(patente) === patente; });
    };
    // Modificar un vehículo por su patente
    RegistroAutomotor.prototype.modificarVehiculo = function (patenteActual, datosNuevos) {
        var vehiculo = this.buscarVehiculoPorPatente(patenteActual);
        if (vehiculo) {
            if (datosNuevos.patente)
                vehiculo.setPatente(datosNuevos.patente);
            console.log("El veh\u00EDculo con patente ".concat(patenteActual, " ha sido modificado."));
        }
        else {
            console.log("No se encontr\u00F3 un veh\u00EDculo con la patente: ".concat(patenteActual));
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
