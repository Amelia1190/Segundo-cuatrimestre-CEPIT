"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var caballero_1 = require("./caballero");
var verdugo_1 = require("./verdugo");
var ladydi_1 = require("./ladydi");
var SapoRepulsivo_1 = require("./SapoRepulsivo");
var listaPersonajes_1 = require("./listaPersonajes");
var lista = new listaPersonajes_1.ListaDePersonajes();
var Mago = new mago_1.mago("Gandalf", 1, "Hechizos", 5, "convertir en conejo");
var Caballero = new caballero_1.caballero("Conan", 1, "Fuerza Física", 1050, "novato", 1000, "escudo potente");
var Verdugo = new verdugo_1.verdugo("Legolas", 1, "Tortura", 5, "Hacha de verdugo");
var Ladydi = new ladydi_1.ladydi("Diana", 1, "Canto de la Siren", 12, "baile de lucha");
var sapoRepulsivo = new SapoRepulsivo_1.SapoRepulsivo("Phyllobates terribilis", 1, "escupe un chorro de baba tóxica", 100, "utiliza su color amarillo brillante como una señal de advertencia para sus depredadores", 70);
// Información de cada personaje
lista.agregarPersonaje(Mago);
lista.agregarPersonaje(Caballero);
lista.agregarPersonaje(Verdugo);
lista.agregarPersonaje(Ladydi);
lista.agregarPersonaje(sapoRepulsivo);
// MUESTRO LOS PERSONAJES
console.log("Los personajes son:");
console.log(lista.getListaPersonajes());
// el sapo ataca y se defiende 
sapoRepulsivo.atacar(Mago);
sapoRepulsivo.defender();
// AGREGUE SOLO LA EVOLUCION PARA UNO
Caballero.evolucionar();
console.log("El", Caballero, "evoluviono cambiando sus atributos :");
