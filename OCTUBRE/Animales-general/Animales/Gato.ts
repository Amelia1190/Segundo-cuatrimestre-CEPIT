import { Animal } from "./Animal";

export class Gato extends Animal{
     constructor(){
        super("Gato");
     }
    public hacerRuido():void{
        return console.log("miau  miau");
    }
    public saltar(){
        return console.log("salta");
        
    }

}