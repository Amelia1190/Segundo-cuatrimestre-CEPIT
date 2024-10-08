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


import { Vehiculo } from "./vehiculo";

export class RegistroAutomotor {
    private listaVehiculo: Vehiculo[]; 
    nuevaPatente: any;

    constructor() {
        this.listaVehiculo = [];
    }

    // Agregar vehículo. Agrego los vehiculos al registro del automotor
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
    public buscarVehiculoPorPatente(patente: string): Vehiculo {
        return this.listaVehiculo.find(vehiculo => vehiculo.getPatente(patente) === patente);

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
}
