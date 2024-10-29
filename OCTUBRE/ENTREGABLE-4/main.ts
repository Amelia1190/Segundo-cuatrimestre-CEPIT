/*un sistema de personajes de un 
videojuego RPG utilizando herencia y 
polimorfismo. Los personajes tendrán 
características y habilidades únicas, y 
algunos podrán evolucionar a versiones 
mejoradas con nuevas habilidades.
CFS
Ejercicio videojuego
Ejemplo de clase base personaje
El personaje debe tener atributos ej:
nombre (string): El nombre del personaje.
nivel (number): El nivel del personaje (empieza en 1).
puntosDeVida (number): Los puntos de vida del personaje.
Métodos ej:
atacar(): Imprime un mensaje indicando que el personaje 
está atacando.
defender(): Imprime un mensaje indicando que el personaje 
está defendiendo.*/

import  { mago } from "./mago";
import { caballero } from "./caballero";
import { verdugo } from "./verdugo";
import { ladydi } from "./ladydi";
import { SapoRepulsivo } from "./SapoRepulsivo";
import { ListaDePersonajes } from "./listaPersonajes";
import { CaballeroEvolucionado } from "./caballeroEvolucionado";

let lista= new ListaDePersonajes();

let Mago: mago = new mago("Gandalf", 1, "Hechizos",500, "convertir en conejo");
let Caballero: caballero = new caballero("Conan", 1, "Fuerza Física", 500,"novato",50,"escudo potente");
let Verdugo: verdugo = new verdugo("Legolas", 1, "Tortura",5, "Hacha de verdugo");
let Ladydi: ladydi = new ladydi("Diana", 1 , "Canto de la Sirena",7, "baile de lucha");
let sapoRepulsivo:SapoRepulsivo = new SapoRepulsivo("Phyllobates terribilis", 1 ,"escupe un chorro de baba tóxica", 100, "utiliza su color amarillo brillante como una señal de advertencia para sus depredadores", 70)
let caballeroEvolucionado: CaballeroEvolucionado= new CaballeroEvolucionado("Rodrigo Díaz de Vivar, El Cid Campeador", 2, "Habilidades especiales", 1000, "experto", 100, "escudo de oro") 


// Información de cada personaje
lista.agregarPersonaje(Mago);
lista.agregarPersonaje(Caballero);
lista.agregarPersonaje(Verdugo);
lista.agregarPersonaje(Ladydi);
lista.agregarPersonaje(sapoRepulsivo);
lista.agregarPersonaje(caballeroEvolucionado);

// MUESTRO LOS PERSONAJES
console.log("Los personajes son:");
console.log(lista.getListaPersonajes());

// el sapo ataca y se defiende 
sapoRepulsivo.atacar(Mago)
sapoRepulsivo.defender();

Mago.atacar(sapoRepulsivo);
Mago.defender();

Caballero.atacar(Ladydi);
Caballero.defender();



Ladydi.atacar(Caballero);
Ladydi.defender();


Verdugo.atacar(Caballero);
Verdugo.defender();

caballeroEvolucionado.atacar(Verdugo);
caballeroEvolucionado.defender();


 // AGREGUE SOLO LA EVOLUCION PARA UNO

//  Caballero.evolucionar()

//caballero evolucionado 

caballeroEvolucionado.habilidadEspecial();




