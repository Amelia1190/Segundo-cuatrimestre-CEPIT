"use strict";

const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


async function mostrarData() {
    try {
        let res = await fetch(url); // Solicita a la API
        let data = await res.json(); // Transforma en formato JSON

        
        console.log(data);

        // Crear una fila para los datos
        document.querySelector("#table").innerHTML = `
            <tr>
                <td>${data.title}</td>
                <td>${data.explanation}</td>
                <td>${data.date}</td>
                <td><img src="${data.url}" alt="${data.title}" style="max-width: 300px; max-height: 200px;" /></td>
            </tr>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

mostrarData();
