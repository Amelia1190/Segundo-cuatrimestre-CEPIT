import { Perro } from "./Perro";

export class PerroEvolucionado extends Perro{
    
     constructor(){
        super();
        this.vida=200;
        this.nombre="SuperPerro";
     }
    public hacerRuido():void{
        return console.log("Super guau guau");
    }
    public hablar(){
        return console.log("Super bla bla");
        
    }

}