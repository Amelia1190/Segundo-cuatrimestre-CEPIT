/*• Crear proyecto NPM
• Subir proyecto a GitHub
• Implementar Registro Automotor visto
anteriormente, pero agregando soporte de
motos y camiones usando herencia.        //AGREGUE AUTO.
Ejecutar eliminar, agregar,modificar un VEHICULO perteneciente al registro
• Definir tarea NPM para compilar y correr los
archivos necesarios*/

import * as rls from 'readline-sync';
import { RegistroAutomotor } from './registroAutomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import { Vehiculo } from './vehiculo';
import { Patente } from './patente';

let registro = new RegistroAutomotor(); 

// Crear vehículos
let auto: Vehiculo = new Auto("Ford", "Ka", "Vehículo urbano", "Hatchback", "889FGH");
let moto: Vehiculo = new Moto("Harley-Davidson", "Fat Boy", "Recreativo", "Moto de crucero", "123ABC");
let camion: Vehiculo = new Camion("Volvo", "FH16", "Transporte de carga", "Camión pesado", "678DEF");

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
let marca: string = rls.question("Ingrese la marca del vehículo: ");
let modelo: string = rls.question("Ingrese el modelo del vehículo: ");
let tipo: string = rls.question("Ingrese el tipo del vehículo: ");
let uso: string = rls.question("Ingrese el uso del vehículo: ");
let patente: string = rls.question("Ingrese la patente del vehículo: ");

// Agrego un nuevo vehículo (moto)
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

// Buscar vehículo que no sea ingresado por el usuario.
let patenteABuscar1 = "889FGH"; // BUSCO ESTA PATENTE
let vehiculoBuscado = registro.buscarVehiculoPorPatente(patenteABuscar1);

if (vehiculoBuscado) {
    console.log("Vehículo encontrado con la patente:", vehiculoBuscado.getPatente( patente));
    console.log("Información del vehículo:", vehiculoBuscado.getMarca());      
} else {
    console.log("No se encontró ningún vehículo con esa patente.");
}

// Modificar vehículo existente POR PATENTE
let patenteAModificar = rls.question("Ingrese la patente del vehículo que desea modificar: ");
let nuevaPatente: string = rls.question("Ingrese la nueva patente del vehículo: ");

// QUIERO MODIFICAR EL método modificarVehiculo 
registro.modificarVehiculo(patenteAModificar, { patente: nuevaPatente });   // NO ME MODIFICA LA PATENTE.
registro.nuevaPatente;

// Console log para depuración
console.log("Intentando modificar el vehículo con patente:", patenteAModificar);
console.log("Nueva patente aplicada:", nuevaPatente);

// Mostrar todos los vehículos
console.log("Lista de vehículos en el registro después de la modificación:");
console.log(registro.getListaVehiculo());


