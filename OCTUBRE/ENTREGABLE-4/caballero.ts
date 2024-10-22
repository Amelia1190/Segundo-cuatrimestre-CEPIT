
import { Personajes } from "./personajes";



export class caballero extends Personajes {
   
    
    private fuerzaEspada: number;
    private  experiencia : number = 5;
    private nivelEvolucion: string = "novato";
    private escudoDeAcero: string;


    constructor(nombre: string, nivel: number, habilidades: string, _experiencia= 500,_NivelEvolucion: string, _fuerzaEspada=10, _escudoDeAcero:string) {
        super(nombre, nivel, habilidades);
        this.fuerzaEspada=1000;
        this.escudoDeAcero= "escudo potente"
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
 public atacar():void{

    }
    public defender():void{

    }

    
    // METODO PARA EVOLUCIONAR

 
    evolucionar() {
        if (this.experiencia >= 1000) {
            this.nivelEvolucion = "experto";
            this.fuerzaEspada += 1000; // Aumenta la fuerza de la espada
            this.experiencia = 10; // experiencia
        }
    }
}



