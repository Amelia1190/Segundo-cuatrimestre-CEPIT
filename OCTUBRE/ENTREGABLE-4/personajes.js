"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personajes = void 0;
var Personajes = /** @class */ (function () {
    function Personajes(nombre, nivel, habilidades) {
        if (nivel === void 0) { nivel = 1; }
        this.nombre = nombre;
        this.nivel = nivel;
        this.habilidades = habilidades;
    }
    // Getters
    Personajes.prototype.getNombre = function () {
        return this.nombre;
    };
    Personajes.prototype.getNivel = function () {
        return this.nivel;
    };
    Personajes.prototype.getHabilidades = function () {
        return this.habilidades;
    };
    // Setters
    Personajes.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personajes.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personajes.prototype.setHabilidades = function (habilidades) {
        this.habilidades = habilidades;
    };
    return Personajes;
}());
exports.Personajes = Personajes;
/*//Caballero: Atacar con mas fuerza.


public fuerzadeAtaque(caballero:caballero ):void{
    this.fuerzadeAtaque(caballero);
}


// Mago: Cantidad de Hechizos.

public CantHecizos(mago: mago): void {
    this.CantHecizos(mago);
}


// Ladydi: Voz destructora// ultrasonido.
public cantar(ladydi: ladydi): void{
    this.cantar(ladydi);
}

//Verdugo: Tortura.
public Niveldetortura(verdugo: verdugo): void{
    this.Niveldetortura(verdugo);
}



}*/ 
