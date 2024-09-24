"use strict";

let url = "https://pokeapi.co/api/v2/pokemon"; 
async function mostrarData() { // FETCH - PROCESAR - MOSTRAR RESULTADOS
    try {
        let res = await fetch(url); // Obtiene datos de la API

        if (!res.ok) {
            throw new Error(`Error en la red: ${res.status}`);
        }

        let data = await res.json(); // Convierte a JSON
        console.log(data.results); // Me imprime los resultados por consola

        // HTML para mostrar los datos
        let cardsHTML = '';

        data.results.forEach(pokemon => {      //OBTENGO DATOS.
            cardsHTML += `                          
                <div class="pokemon-card">
                    <h3>${pokemon.name}</h3>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png" alt="${pokemon.name}" />
                   
                </div>
            `;
        });

        // HTML  en el contenedor
        document.querySelector("#pokemon-container").innerHTML = cardsHTML;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

mostrarData();


// con el try encierro los posibles errores y el catch maneja ese error.



