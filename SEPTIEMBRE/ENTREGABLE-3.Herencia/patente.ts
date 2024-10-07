export class Patente {
    private patente: string;

    constructor(patente: string) {
       
        this.patente= patente ;
    }

    // Getters

    getPatente(): string {
        return this.patente;
    }

   
}