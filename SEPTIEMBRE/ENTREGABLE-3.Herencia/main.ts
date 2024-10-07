/*• Crear proyecto NPM
• Subir proyecto a GitHub
• Implementar Registro Automotor visto
anteriormente, pero agregando soporte de
motos y camiones usando herencia.        //AGREGUE AUTO.
Ejecutar eliminar, agregar modificar una moto perteneciente al registro
• Definir tarea NPM para compilar y correr los
archivos necesarios*/

import * as rls from 'readline-sync';
import { RegistroAutomotor } from './registroAutomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import { Vehiculo } from './vehiculo';

let registro = new RegistroAutomotor(); 

// Crear vehículos
let auto:Vehiculo = new Auto("Ford", "Ka", "Vehículo urbano", "Hatchback", "889FGH");
let moto: Vehiculo= new Moto("Harley-Davidson", "Fat Boy", "Recreativo", "Moto de crucero", "123ABC");
let camion: Vehiculo= new Camion("Volvo", "FH16", "Transporte de carga", "Camión pesado", "678DEF");

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
let marca: string = rls.question("Ingrese la marca del vehículo: ");
let modelo: string = rls.question("Ingrese el modelo del vehículo: ");
let tipo: string = rls.question("Ingrese el tipo del vehículo: ");
let uso: string = rls.question("Ingrese el uso del vehículo: ");
let patente: string = rls.question("Ingrese la patente del vehículo: ");


//AGREGO UN VEHICULO ( moto)
let nuevoVehiculo: Moto = new Moto(marca, modelo, uso, tipo, patente); 

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

//BUSCAR VEHICULO QUE NO SEA INGREASADO POR EL USUARIO.

let vehiculoBuscado = registro.buscarVehiculoPorPatente("889FGH");

if (vehiculoBuscado) {
    // Si se encuentra el vehículo, imprime la información
    console.log("La patente encontrada pertenece a: " );
} else {
    console.log("No se encontró ningún vehículo con esa patente.");
}

/*//  Modificar vehículo existente
let patenteAModificar = rls.question("Ingrese la patente del vehículo que desea modificar: ");
let nuevaPatente: string = rls.question("Ingrese la nueva patente del vehículo: ");
registro.modificarVehiculo(patenteAModificar, { patente: nuevaPatente });

// Console log para depuración
console.log("Intentando modificar el vehículo con patente:", patenteAModificar);
console.log("Nueva patente aplicada:", nuevaPatente);



// Mostrar todos los vehículos
// console. log (patenteAModificar,datosNuevos);
// console.log("Lista de vehículos en el registro después de la modificación:");
 console.log(registro.getListaVehiculo());


// console.log(registro.getListaVehiculo());
// console.log(registro.buscarVehiculoPorPatente(patenteAmodificar));*/