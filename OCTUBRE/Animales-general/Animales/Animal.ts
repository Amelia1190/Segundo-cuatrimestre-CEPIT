export class Animal{
    protected nombre:string;
    protected vida:number=100;
    protected mana:number=0;
    constructor (nombre:string){
        this.nombre=nombre;
    }

    public hacerRuido():void{
        return console.log(" ruidooooo");
    }
    public getVida():number{
        return this.vida;
    }

}

