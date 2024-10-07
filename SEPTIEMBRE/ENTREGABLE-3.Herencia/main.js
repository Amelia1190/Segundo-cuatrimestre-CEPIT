"use strict";
/*• Crear proyecto NPM
• Subir proyecto a GitHub
• Implementar Registro Automotor visto
anteriormente, pero agregando soporte de
motos y camiones usando herencia.        //AGREGUE AUTO.
Ejecutar eliminar, agregar modificar una moto perteneciente al registro
• Definir tarea NPM para compilar y correr los
archivos necesarios*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registro = new registroAutomotor_1.RegistroAutomotor();
// Crear vehículos
var auto = new auto_1.Auto("Ford", "Ka", "Vehículo urbano", "Hatchback", "889FGH");
var moto = new moto_1.Moto("Harley-Davidson", "Fat Boy", "Recreativo", "Moto de crucero", "123ABC");
var camion = new camion_1.Camion("Volvo", "FH16", "Transporte de carga", "Camión pesado", "678DEF");
// AGREGA VEHICULOS AL REGISTRO
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
// MUESTRA LA ALISTA DE VEHICULOS
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo());
// ELIMINA UN VEHICULO
registro.eliminarVehiculo(moto);
console.log("Lista de vehículos después de eliminar uno:");
console.log(registro.getListaVehiculo());
// VEHICULO INGRESADO POR EL USUARIO
var marca = rls.question("Ingrese la marca del vehículo: ");
var modelo = rls.question("Ingrese el modelo del vehículo: ");
var tipo = rls.question("Ingrese el tipo del vehículo: ");
var uso = rls.question("Ingrese el uso del vehículo: ");
var patente = rls.question("Ingrese la patente del vehículo: ");
//AGREGO UN VEHICULO ( moto)
var nuevoVehiculo = new moto_1.Moto(marca, modelo, uso, tipo, patente);
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
//BUSCAR VEHICULO QUE NO SEA INGREASADO POR EL USUARIO.
var vehiculoBuscado = registro.buscarVehiculoPorPatente("889FGH");
if (vehiculoBuscado) {
    // Si se encuentra el vehículo, imprime la información
    console.log("La patente encontrada pertenece a: " + vehiculoBuscado.getPatente());
}
else {
    console.log("No se encontró ningún vehículo con esa patente.");
}
// Modificar vehículo existente
/*let patenteAModificar = rls.question("Ingrese la patente del vehículo que desea modificar: ");
let nuevaPatente: string = rls.question("Ingrese la nueva patente del vehículo: ");
registro.modificarVehiculo(patenteAModificar, { patente: nuevaPatente });ts-node ma

// Console log para depuración
console.log("Intentando modificar el vehículo con patente:", patenteAModificar);
console.log("Nueva patente aplicada:", nuevaPatente);



// Mostrar todos los vehículos
// console. log (patenteAModificar,datosNuevos);
// console.log("Lista de vehículos en el registro después de la modificación:");
 console.log(registro.getListaVehiculo());


// console.log(registro.getListaVehiculo());
// console.log(registro.buscarVehiculoPorPatente(patenteAmodificar));*/ 
