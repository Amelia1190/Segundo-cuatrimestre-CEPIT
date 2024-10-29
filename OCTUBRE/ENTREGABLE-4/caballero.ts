
import { ladydi } from "./ladydi";
import { Personajes } from "./personajes";



export class caballero extends Personajes {
   
    
    public fuerzaEspada: number;
    public experiencia : number = 500;
    public nivelEvolucion: string = "novato";
    public  escudoDeAcero: string;
    public vida: number;
    public defensa: number= 150;
    public  estado: string;



    constructor(nombre: string, nivel: number, habilidades: string, _experiencia= 500,_NivelEvolucion: string, _fuerzaEspada=10, _escudoDeAcero:string) {
        super(nombre, nivel, habilidades);
        this.fuerzaEspada=50;
        this.escudoDeAcero= "escudo potente"; 
        this.vida= 100;
    }
    // Atacar
    public  getatacar(){
        return  this.fuerzaEspada;
    
      }
      public setatacar(fuerzaEspada: number){
         this.fuerzaEspada= fuerzaEspada;
    
     }
  
    //Defender 
    public getdefender(){
       return this.escudoDeAcero;
        }
      public setdefender(escudoDeAcero: string){
        this.escudoDeAcero= escudoDeAcero;

    }
 public atacar(objetivo: ladydi):void{
    let danio= this.fuerzaEspada * 2;
    objetivo.vida-= danio;
    console.log(`${this.nombre} utiliza todo su poder para atacar a Ladydi, dejando con vida ${objetivo.vida}. La princesa recibe ${danio} puntos de daño`);
}
    
    public defender():void{

        this.defensa === 50;
        console.log(`Caballero utiliza su ${this.escudoDeAcero} para defenderse. Reduce ${this.defensa} puntos de daño ante cualquier ataque del contrincante.`);
  
    }
    
    // METODO PARA EVOLUCIONAR

    // evolucionar() {
    //     if (this.experiencia >= 1000) {
    //         this.nivelEvolucion = "experto";
    //         this.fuerzaEspada += 1000;
    //         this.experiencia -= 1000; // Resta 1000 puntos de experiencia para la próxima evolución
    //         console.log("¡Has evolucionado a experto!");
    //     }
    // }
}


