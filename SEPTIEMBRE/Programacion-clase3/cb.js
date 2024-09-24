//FUNCIONES CALLBACK

/*console.log("primero");
console.log("segundo");
console.log("tercero");
mostrarCuarto();

function mostrarSegundo(cb){
    setTimeout(()=>{
        cb(); // Ejecuta la función de callback pasada como argumento

    }, 1000 );// Espera 1000 milisegundos (1 segundo) antes de ejecutar el callback
}


function mostrarCuarto(){
    console.log("cuarto");
}


//VOLAR, VIAJAR, PLANEAR Y VOLVER

function volar() {
    console.log("volar");
}

function planear(cbk) {
    console.log("planear"); // Imprime "planear" cada vez que se llama
    setTimeout(() => {
        cbk(); // Ejecuta el callback después de 1 segundo
    }, 1000);
}

function volver() {
    console.log("volver");
}

function viajar() {
    console.log("viajar"); // Imprime "viajar"
    volar();
    planear(function() { // Primer planear
        planear(function() { // Segundo planear
            planear(function() { // Tercer planear
                volver(); // Imprime "volver"
            });
        });
    });
}

// Llama a la función viajar para ejecutar el flujo de acciones
viajar();





function volar() {
    console.log("Volando...");
}

function planear(callback) {
    console.log("Planeando...");
    setTimeout(callback, 1000); // Ajusta el tiempo de espera si es necesario
}

function volver() {
    console.log("Volviendo...");
}*/



function volar() {
    console.log("volar");
}

function planear() {
    console.log("planear"); 
    setTimeout(() => {
    }, 1000);
}

function volver() {
    console.log("volver");
}

async function viajar() {
    volar();
    await planear();
    await planear();
    await planear();
    volver();
        
}

viajar();




