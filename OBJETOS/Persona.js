"use strict";
//ensayos--metodos
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, dni) {
        this.Nombre = nombre;
        this.Dni = dni;
        // Inicializamos Altura, Peso, y Sexo a valores predeterminados si es necesario
        this.Altura = 0; // O el valor predeterminado que desees
        this.Peso = 0; // O el valor predeterminado que desees
        this.Sexo = ""; // O el valor predeterminado que desees
    }
    //private- public- pensar en que condiciones si y en cuales no se podra acceder- modificadores de acceso. Si es publico si se puede acceder.
    // Métodos getter
    Persona.prototype.getAltura = function () {
        return this.Altura;
    };
    Persona.prototype.getPeso = function () {
        return this.Peso;
    };
    Persona.prototype.getNombre = function () {
        return this.Nombre;
    };
    Persona.prototype.getSexo = function () {
        return this.Sexo;
    };
    Persona.prototype.getDni = function () {
        return this.Dni;
    };
    // Métodos setter    //con SET-SE LE PONE QUE ESTAS PASANDO: NOMBRE 
    Persona.prototype.setNombre = function (parNombre) {
        this.Nombre = parNombre;
    };
    Persona.prototype.setAltura = function (parAltura) {
        this.Altura = parAltura;
    };
    Persona.prototype.setPeso = function (parPeso) {
        this.Peso = parPeso;
    };
    Persona.prototype.setSexo = function (parSexo) {
        this.Sexo = parSexo;
    };
    // Métodos públicos
    Persona.prototype.caminar = function () {
        return "caminando";
    };
    Persona.prototype.hablar = function () {
        return "bla bla bla";
    };
    Persona.prototype.dormir = function () {
        return "zzz";
    };
    return Persona;
}());
// Crear una instancia de la clase Persona
var persona1 = new Persona("JUAN", 35334261);
console.log(" Su nombre es :" + persona1.getNombre() + " y su dni es: " + persona1.getDni()); // Salida: JUAN
var persona2 = new Persona("Maria", 43567890);
var nombre = persona2.getNombre();
console.log(persona2);
persona2.setNombre("Amelia");
persona2.setNombre("Amelia");
console.log(nombre);
