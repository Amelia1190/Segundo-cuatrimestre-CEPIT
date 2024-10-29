import { Animal } from "./Animal";

export class Perro extends Animal{
     constructor(){
        super("Perro");
     }
    public hacerRuido():void{
        return console.log("guau guau");
    }
    public hablar(){
        return console.log("bla bla");
        
    }
    public setVida(vida :number):void{
        if(vida<100 && vida>0)
             this.vida=vida;
    }

}