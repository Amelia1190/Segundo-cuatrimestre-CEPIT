"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var rls = require("readline-sync");
var Vehiculo_1 = require("./Vehiculo");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var registro = new RegistroAutomotor_1.RegistroAutomotor();
// Vehiculos
var ford = new Vehiculo_1.Vehiculo("Ford", "Ka", "Hatchback", "Vehículo urbano y compacto", "889FGH");
var motomel = new Vehiculo_1.Vehiculo("Motomel", "110cc", "Transporte urbano y recreativo", "Motocicleta de calle", "990XZY");
var siena = new Vehiculo_1.Vehiculo("Fiat", "Siena", "Vehículo familiar y urbano", "Sedán", "786YUI");
var scania = new Vehiculo_1.Vehiculo("Scania", "R 450", "Transporte de carga pesada", "Camión de larga distancia", "908GWJ");
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
var marca = rls.question("Ingrese la marca del vehículo: ");
var modelo = rls.question("Ingrese el modelo del vehículo: ");
var tipo = rls.question("Ingrese el tipo del vehículo: ");
var uso = rls.question("Ingrese el uso del vehículo: ");
var patente = rls.question("Ingrese la patente del vehículo: ");
var nuevoVehiculo = new Vehiculo_1.Vehiculo(marca, modelo, tipo, uso, patente);
registro.agregarVehiculo(nuevoVehiculo);
console.log("Vehículo agregado:");
console.log(registro.getListaVehiculo());
// Buscar vehículo por patente
var patenteABuscar = rls.question("Ingrese la patente del vehículo que desea buscar: ");
var vehiculoEncontrado = registro.buscarVehiculoPorPatente(patenteABuscar);
if (vehiculoEncontrado) {
    console.log("Vehículo encontrado:", vehiculoEncontrado);
}
else {
    console.log("No se encontró ningún vehículo con la patente:", patenteABuscar);
}
// Modificar vehículo existente, solo la patente 
var patenteAModificar = rls.question("Ingrese la patente del vehículo que desea modificar: ");
var datosNuevos = {
    patente: rls.question("Ingrese la nueva patente del vehículo: ")
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
