

import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
    private listaVehiculo: Vehiculo[]; // Inicializa array 

    constructor() {
        this.listaVehiculo = [];
    }

    // Agregar vehículo
    agregarVehiculo(vehiculo: Vehiculo) {
        this.listaVehiculo.push(vehiculo);
    }

    // Obtener la lista de vehículos
    public getRegistroAutomotor(): Vehiculo[] {
        return this.listaVehiculo; // Devuelve la lista de vehículos
    }

    
    // Eliminar vehículo
    public eliminarVehiculo(vehiculoAEliminar: Vehiculo): void {
        const posVehiculo: number = this.listaVehiculo.indexOf(vehiculoAEliminar);
        if (posVehiculo !== -1) {
            this.listaVehiculo.splice(posVehiculo, 1); // Eliminar vehículo
        }
    }

    // Getters
    public getListaVehiculo(): Vehiculo[] {
        return this.listaVehiculo; // Retorna la lista de vehículos
    }

    // Buscar vehículo por patente en la lista
    public buscarVehiculoPorPatente(patente: string): Vehiculo { 
        const vehiculo = this.listaVehiculo.find(vehiculo => vehiculo.getPatente() === patente);
        if (!vehiculo) {
            throw new Error(`No se encontró ningún vehículo con la patente: ${patente}`); 
        }
        return vehiculo; // Devuelve el vehículo encontrado
    }
    
}


  /*  // Modificar un vehiculo.

public modificarVehiculo(Vehiculo: string): void {
    if (this.estaAgregado)
    this.vehiculo.modificarVehiculo(Vehiculo);
    }
    public vehiculoModificado(): string {
    return this.vehiculo.vehiculoModificado();
    }*/

    