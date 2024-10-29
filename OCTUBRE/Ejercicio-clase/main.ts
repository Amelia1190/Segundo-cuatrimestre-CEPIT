import  { AutoDeportivo} from "./autoDeportivo";
import { AutoCiudad } from "./autoCiudad";
import {camioneta} from "./camioneta"
import { vehiculo } from "./vehiculo";

let miAuto = new AutoCiudad("Toyota", "Corolla", 2023, 5,100*8);
let Hilux= new camioneta("Toyota", "Hilux", 2020, 10 )

console.log("La capacidad del auto es:",miAuto ); 
console.log("la capacidad de la camioneta es :", Hilux);


let  consumo = AutoCiudad.calcularConsumo();
    console.log(" el Consumo:", consumo, "litros por kilómetro");
