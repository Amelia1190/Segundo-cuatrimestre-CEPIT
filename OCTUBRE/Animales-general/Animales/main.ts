import { Animal } from "./Animal";
import { Gato } from "./Gato";
import { Perro } from "./Perro";
import { PerroEvolucionado } from "./perroE";

let animal:Animal=new Animal("animal");
let boby:Perro=new Perro();
let michi:Gato=new Gato();
console.log("sonido de un animal tipo animal: ");
animal.hacerRuido();//ruidoo
console.log("sonido de un Perro tipo Perro: ");
boby.hacerRuido();//guau guau
console.log("Ejecutamos el metodo de saltar en la clase Gato: ");
michi.saltar();

console.log("\n");

// boby=new Gato();//no se puede, boby es de tipo perro
// boby=new Animal("loro");//no se puede, Animal no de tipo Perro, en cambio Perro si es de tipo animal. No funciona en ambos sentidos
//animal=new Gato();//si se puede, Gato si es de tipo Animal

console.log("Ahora asignamos un perro evolucionado a Animal: ");
animal=new PerroEvolucionado();
console.log(animal);
console.log("Esta es la vida del objeto animal instanciado con un perro evolucionado: "+animal.getVida());
console.log("\n");
// aca podemos notar que aunque el objeto animal es de tipo Animal la respuesta que obtenemos  al enviar el msj (getVida()) 
//corresponde al del PerroEvolucionado ya que este lo heredo de su padre(Perro), y este de su padre(Animal)
//si yo hago animal.   al escribir el punto solo veo los metodo de animal y es que aunque la variable animal ahora tiene un PerroEvolucionado
//nunca deja de ser tipo ANIMAL

//ahora construimos un perro y le asignamos un perro evolucionado
//es posible porque un perroEvolucionado sigue siendo un Perro
console.log("Ahora asignamos un perro evolucionado a boby (que es de tipo Perro): ");
boby=new PerroEvolucionado();
console.log(boby);
console.log("\n");

//ahora hacemos que boby involucione a Perro 
console.log("hacemos que boby involucione a Perro ");

boby=new Perro();
console.log("Ahora vemos que los atributos de boby volvieron a ser los de un perro normal");
console.log(boby);
console.log("\n");


//si quiero acceder a los metodos del perro evolucionado necesito hacer un casteo
((animal) as PerroEvolucionado).hacerRuido();//NO es necesario para la entrega pero se puede usar


//por ultimo y para recordar que debemos controlar lon que le enviamos a los setter y lo que devolvemos con los getters.
boby.setVida(-3);
console.log(boby.getVida());

