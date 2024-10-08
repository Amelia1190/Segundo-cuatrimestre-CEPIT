/*• Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja
• incorporando los conceptos nuevos:
• Encapsulamiento y composicion.

• Mandar el link al repositorio de GitHub
Aclaración: no hay una sola forma de tener bien
los ejercicios → lo que importa es saber
justificar bien las decisiones que se tomen.*/
import * as rls from 'readline-sync';
import { Vehiculo } from "./Vehiculo";
import { RegistroAutomotor } from "./RegistroAutomotor";

let registro = new RegistroAutomotor();

// Vehiculos
let ford: Vehiculo = new Vehiculo("Ford", "Ka", "Hatchback", "Vehículo urbano y compacto", "889FGH");
let motomel: Vehiculo = new Vehiculo("Motomel", "110cc", "Transporte urbano y recreativo", "Motocicleta de calle", "990XZY");
let siena: Vehiculo = new Vehiculo("Fiat", "Siena", "Vehículo familiar y urbano", "Sedán", "786YUI");
let scania: Vehiculo = new Vehiculo("Scania", "R 450", "Transporte de carga pesada", "Camión de larga distancia", "908GWJ");

registro.agregarVehiculo(ford);
registro.agregarVehiculo(motomel);
registro.agregarVehiculo(siena);
registro.agregarVehiculo(scania);

// Listar vehículos
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo());

// Elimina vehículo
registro.eliminarVehiculo(ford);
console.log(registro.getListaVehiculo());


// Ingreso de un nuevo vehículo por el usuario
let marca: string = rls.question("Ingrese la marca del vehículo: ");
let modelo: string = rls.question("Ingrese el modelo del vehículo: ");
let tipo: string = rls.question("Ingrese el tipo del vehículo: ");
let uso: string = rls.question("Ingrese el uso del vehículo: ");
let patente: string = rls.question("Ingrese la patente del vehículo: ");

let nuevoVehiculo: Vehiculo = new Vehiculo(marca, modelo, tipo, uso, patente);
registro.agregarVehiculo(nuevoVehiculo);

console.log("Vehículo agregado:");
console.log(registro.getListaVehiculo());

// Buscar vehículo por patente
let patenteABuscar = rls.question("Ingrese la patente del vehículo que desea buscar: ");
let vehiculoEncontrado = registro.buscarVehiculoPorPatente(patenteABuscar);

if (vehiculoEncontrado) {
    console.log("Vehículo encontrado:", vehiculoEncontrado);
} else {
    console.log("No se encontró ningún vehículo con la patente:", patenteABuscar);
}

// Modificar vehículo existente, solo la patente 
let patenteAModificar = rls.question("Ingrese la patente del vehículo que desea modificar: ");
let datosNuevos = {
    patente:rls.question("Ingrese la nueva patente del vehículo: ")
};
registro.modificarVehiculo(patenteAModificar, datosNuevos);

// Console log para depuración
console.log("Intentando modificar el vehículo con patente:", patenteAModificar);
console.log("Datos nuevos a aplicar:", datosNuevos);



// Mostrar todos los vehículos
// console. log (patenteAModificar,datosNuevos);
// console.log("Lista de vehículos en el registro después de la modificación:");
 console.log(registro.getListaVehiculo());


// console.log(registro.getListaVehiculo());
// console.log(registro.buscarVehiculoPorPatente(patenteAmodificar));*/


 





















