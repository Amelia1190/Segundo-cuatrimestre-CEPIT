export class Persona {
    protected nombre: string;
    protected apellido: string;
    protected pasaporte: string;
    protected fechaNacimiento: Date;
    protected dni: number;
  
    constructor(nombre: string, apellido: string, pasaporte: string, fechaNacimiento: Date, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni; 
    }
  
    // Getter
    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getPasaporte(): string {
        return this.pasaporte;
    }

    public getFechaNacimiento(): Date {
        return this.fechaNacimiento;
    }
    public getdni(): number{
        return this.dni;
    }
  
    // Setter
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public setPasaporte(pasaporte: string): void {
        this.pasaporte = pasaporte;
    }

    public setFechaNacimiento(fechaNacimiento: Date): void {
        this.fechaNacimiento = fechaNacimiento;
    }


    public setdni(): number{
        return this.dni;
    }
}
