export abstract class habitacion{
    protected numero: number;
    protected estado: string;
    protected precioBase: number;

 public constructor (numero: number, estado: string, precioBase: number){
    this.numero = numero; 
    this.estado= estado;
    this.precioBase= precioBase;
 }

public abstract reserva (): void;
public abstract liberar(): void;
public abstract getCostoTotal(): void; 

public getNumero() {
    return this.numero;
}
public setNumero(numero: number) {
    this.numero = numero;
}
public getEstado() {
    return this.estado;
}
public setEstado(estado: boolean) {
    //this.estado = estado;
}
public getPrecioBase() {
    return this.precioBase;
}
public setPrecioBase(precioBase: number) {
    this.precioBase = precioBase;
}





}