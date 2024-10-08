"use strict";
/*• Crear proyecto NPM
• Subir proyecto a GitHub
• Implementar Registro Automotor visto
anteriormente, pero agregando soporte de
motos y camiones usando herencia.        //AGREGUE AUTO.
Ejecutar eliminar, agregar,modificar un VEHICULO perteneciente al registro
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
// Agrega vehículos al registro
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
// Muestra la lista de vehículos
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo());
// Elimina un vehículo
registro.eliminarVehiculo(moto);
console.log("Lista de vehículos después de eliminar uno:");
console.log(registro.getListaVehiculo());
// Vehículo ingresado por el usuario
var marca = rls.question("Ingrese la marca del vehículo: ");
var modelo = rls.question("Ingrese el modelo del vehículo: ");
var tipo = rls.question("Ingrese el tipo del vehículo: ");
var uso = rls.question("Ingrese el uso del vehículo: ");
var patente = rls.question("Ingrese la patente del vehículo: ");
// Agrego un nuevo vehículo (moto)
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
// Buscar vehículo que no sea ingresado por el usuario.
var patenteABuscar1 = "889FGH"; // BUSCO ESTA PATENTE
var vehiculoBuscado = registro.buscarVehiculoPorPatente(patenteABuscar1);
if (vehiculoBuscado) {
    console.log("Vehículo encontrado con la patente:", vehiculoBuscado.getPatente(patente));
    console.log("Información del vehículo:", vehiculoBuscado.getMarca());
}
else {
    console.log("No se encontró ningún vehículo con esa patente.");
}
// Modificar vehículo existente POR PATENTE
var patenteAModificar = rls.question("Ingrese la patente del vehículo que desea modificar: ");
var nuevaPatente = rls.question("Ingrese la nueva patente del vehículo: ");
// QUIERO MODIFICAR EL método modificarVehiculo 
registro.modificarVehiculo(patenteAModificar, { patente: nuevaPatente });
// Console log para depuración
console.log("Intentando modificar el vehículo con patente:", patenteAModificar);
console.log("Nueva patente aplicada:", nuevaPatente);
// Mostrar todos los vehículos
console.log("Lista de vehículos en el registro después de la modificación:");
console.log(registro.getListaVehiculo());
// console.log("Vehículo buscado por patente modificada:", registro.buscarVehiculoPorPatente(nuevaPatente));
