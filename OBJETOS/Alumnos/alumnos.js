/*
alumno1=new alumno()



class Profesor{
    private Matricula: number;
}


class escuela {
    listadoAlumnos: alumnos[]
    listadoProfesores:profesores[]
    }
*/
/*Ejercicio 1
Aplicar lo visto hasta esta clase para modelar un
sistema educativo donde:
• Los profesores deben tener un listado de sus
alumnos.
• Cada alumno debe saber su nota e informar
si está aprobado o no (es decir si la nota es
mayor que 7).
• La escuela debe tener un registro de los
alumnos y maestros, y debe poder
matricular/contratar y expulsar/despedir a los
mismos*/
// Definición de la clase Alumnos
var Alumnos = /** @class */ (function () {
    function Alumnos(matricula, edad, nombre, sexo, dni) {
        this.matricula = matricula;
        this.edad = edad;
        this.nombre = nombre;
        this.sexo = sexo;
        this.dni = dni;
    }
    // Métodos públicos para acceder a los atributos privados
    Alumnos.prototype.getMatricula = function () {
        return this.matricula;
    };
    Alumnos.prototype.getNombre = function () {
        return this.nombre;
    };
    return Alumnos;
}());
// Instanciación correcta de un objeto de la clase Alumnos
var alumno1 = new Alumnos(12345, 20, "Juan Pérez", "Masculino", 98765432);
var alumno2 = new Alumnos(123346, 21, "Diego Lopez", "Masculino", 39000839);
// Definición de la clase Profesor
var Profesor = /** @class */ (function () {
    function Profesor(matricula) {
        this.matricula = matricula;
    }
    Profesor.prototype.getMatricula = function () {
        return this.matricula;
    };
    return Profesor;
}());
// Definición de la clase Escuela
var Escuela = /** @class */ (function () {
    function Escuela() {
        this.listadoAlumnos = [];
        this.listadoProfesores = [];
    }
    // Métodos para añadir alumnos y profesores
    Escuela.prototype.addAlumno = function (alumno, alumno2) {
        this.listadoAlumnos.push(alumno);
    };
    Escuela.prototype.addProfesor = function (profesor) {
        this.listadoProfesores.push(profesor);
    };
    return Escuela;
}());
// Instanciación de la clase Escuela y agregar alumnos y profesores
;
console.log(alumno1);
console.log(alumno2);
