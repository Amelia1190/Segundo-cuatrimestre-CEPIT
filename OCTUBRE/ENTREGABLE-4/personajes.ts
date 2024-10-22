

export abstract class Personajes {
    protected nombre: string;
    protected nivel: number;
    protected habilidades: string;
   

    constructor(nombre: string, nivel: number = 1, habilidades: string) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.habilidades = habilidades;
        
    }

   
    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getHabilidades(): string {
        return this.habilidades;
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public setHabilidades(habilidades: string): void {
        this.habilidades = habilidades;
    }

abstract atacar(personaje): void;      // DECLARO EL METODO ATACAR Y DEFENDER.
abstract defender(): void;
}





/*//Caballero: Atacar con mas fuerza.


public fuerzadeAtaque(caballero:caballero ):void{
    this.fuerzadeAtaque(caballero);
}


// Mago: Cantidad de Hechizos.

public CantHecizos(mago: mago): void {
    this.CantHecizos(mago);
}


// Ladydi: Voz destructora// ultrasonido.
public cantar(ladydi: ladydi): void{
    this.cantar(ladydi);
}

//Verdugo: Tortura.
public Niveldetortura(verdugo: verdugo): void{
    this.Niveldetortura(verdugo);
}



}*/