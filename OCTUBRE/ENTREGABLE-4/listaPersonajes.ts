import { Personajes } from "./personajes";

export class ListaDePersonajes {
  private listaPersonajes: Personajes[];

  constructor() {
    this.listaPersonajes = [];
  }

  public agregarPersonaje(personaje: Personajes): void {
    this.listaPersonajes.push(personaje);
  }



  // Obtener la lista de personajes
  public getListaPersonajes(): Personajes[] {
    return this.listaPersonajes;
  }

  public mostrarInfo(): void {
    this.listaPersonajes.forEach(personaje => {
      console.log(personaje); 
    });
  }
}

