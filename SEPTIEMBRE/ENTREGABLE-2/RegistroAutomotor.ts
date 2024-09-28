import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
    private listaVehiculo: Vehiculo[]; // Inicializa array 
    estaAgregado: any;
    vehiculo: any;

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

    // Getters
    public getListaVehiculo(): Vehiculo[] {
        return this.listaVehiculo; // Retorna la lista de vehículos
    }

    // Setters
    public setListaVehiculo(listaVehiculo: Vehiculo[]): void {
        this.listaVehiculo = listaVehiculo;
    }

    // Eliminar vehículo
    public eliminarVehiculo(vehiculoAEliminar: Vehiculo): void {
        // Verificar si el vehículo existe en la lista
        if (vehiculoAEliminar !== undefined && this.listaVehiculo.includes(vehiculoAEliminar)) {
            const posVehiculo: number = this.listaVehiculo.indexOf(vehiculoAEliminar);
            if (posVehiculo !== -1) {
                this.listaVehiculo.splice(posVehiculo, 1); // Eliminar el vehículo
            }
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
}