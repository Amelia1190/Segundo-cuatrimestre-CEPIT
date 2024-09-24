//ensayos--metodos

import { Console } from "console";

class Persona {                // Nombre de la clase siempre con mayúscula.
    private Altura: number;
    private Peso: number;
    private Nombre: string;  // ¿cómo accedemos a estas clases si son privadas?
    private Sexo: string;
    private Dni: number;

    // Constructor
    constructor(nombre: string, dni: number) {
        this.Nombre = nombre; 
        this.Dni = dni;
        // Inicializamos Altura, Peso, y Sexo a valores predeterminados si es necesario
        this.Altura = 0; // O el valor predeterminado que desees
        this.Peso = 0;   // O el valor predeterminado que desees
        this.Sexo = "";  // O el valor predeterminado que desees
    }


    //private- public- pensar en que condiciones si y en cuales no se podra acceder- modificadores de acceso. Si es publico si se puede acceder.
    // Métodos getter
    public getAltura(): number {           
        return this.Altura;
    }

    public getPeso(): number {           
        return this.Peso;
    }

    public getNombre(): string {           
        return this.Nombre;
    }

    public getSexo(): string {           
        return this.Sexo;
    }

    public getDni(): number {           
        return this.Dni;
    }

    // Métodos setter    //con SET-SE LE PONE QUE ESTAS PASANDO: NOMBRE 
    public setNombre(parNombre: string): void {           
        this.Nombre = parNombre;
    }

    public setAltura(parAltura: number): void {           
        this.Altura = parAltura;
    }

    public setPeso(parPeso: number): void {           
        this.Peso = parPeso;
    }

    public setSexo(parSexo: string): void {           
        this.Sexo = parSexo;
    }

    // Métodos públicos
    public caminar(): string {
        return "caminando";
    }

    public hablar(): string {
        return "bla bla bla";
    }

    public dormir(): string {
        return "zzz";
    }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("JUAN", 35334261);
console.log(" Su nombre es :"+ persona1.getNombre()+ " y su dni es: " + persona1.getDni()); // Salida: JUAN



const persona2 = new Persona( "Maria", 43567890);

let nombre: string = persona2.getNombre(); 
console.log(persona2);
persona2.setNombre("Amelia");

persona2.setNombre("Amelia");
console.log(nombre);
