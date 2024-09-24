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


class Alumno {
    nombre: string;
    nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    estaAprobado(): boolean {
        return this.nota > 7;
    }
}

class Profesor {
    nombre: string;
    alumnos: Alumno[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    eliminarAlumno(alumno: Alumno) {
        this.alumnos = this.alumnos.filter(a => a !== alumno);
    }
}

class Escuela {
    alumnos: Alumno[] = [];
    profesores: Profesor[] = [];

    matricular(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    despedir(profesor: Profesor) {
        this.profesores = this.profesores.filter(p => p !== profesor);
    }

    contratar(profesor: Profesor) {
        this.profesores.push(profesor);
    }
}
 console.log(Profesor)