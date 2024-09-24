

// Definición de la clase Alumnos
class Alumnos {
    private matricula: number;
    private nota: number; 
    

    constructor(matricula: number, edad: number, nombre: string, sexo: string, dni: number) {
        this.matricula = matricula;
        this.nota
    }

    // Métodos públicos para acceder a los atributos privados
    public getMatricula(): number {
        return this.matricula;
    }

    public getNombre(): string {
        return newFunction();

        function newFunction(): string {
            return this.nota;
        }
    }

    
    // Agregar más getters y setters según sea necesario
}

// Instanciación correcta de un objeto de la clase Alumnos
let alumno1 = new Alumnos(12345, 20, "Juan Pérez", "Masculino", 98765432);
let alumno2= new Alumnos(123346, 21, "Diego Lopez", "Masculino", 39000839);


// Definición de la clase Profesor
class Profesor {
    private matricula: number;

    constructor(matricula: number) {
        this.matricula = matricula;
    }

    public getMatricula(): number {
        return this.matricula;
    }
}

// Definición de la clase Escuela
class Escuela {
    listadoAlumnos: Alumnos[];
    listadoProfesores: Profesor[];

    constructor() {
        this.listadoAlumnos = [];
        this.listadoProfesores = [];
    }

    // Métodos para añadir alumnos y profesores
    public addAlumno(alumno: Alumnos, alumno2:Alumnos): void {
        this.listadoAlumnos.push(alumno);
    }

    public addProfesor(profesor: Profesor): void {
        this.listadoProfesores.push(profesor);
    }
}

// Instanciación de la clase Escuela y agregar alumnos y profesores
;


console.log(alumno1)
console.log(alumno2)