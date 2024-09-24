
 let prod= [ 
{ nombre: "Manzana",
    precio: 500
},
{
    nombre: "Naranja",
    precio: 300
}
]



let promesa = () => {
return new Promise((resolve, reject) => {
    let exito = true;

    if (exito) {
        resolve(prod)
    }
    else {
        reject("Promesa fallo")
    }
})
}

// console.log(promesa());

// promesa()
//     .then(resp => console.log(resp)) // si es exitosa
//     .catch(err => console.log(err)) // si hay error lo capturamos





//Ejemplo de funcion que retorna una promesa

const obtenerResultado = () => {
return new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve(prod)
    }, 2000);
});
}

//Ejemplo de funcion con async/await

const procesarDatos = async () => {

let respuesta = await obtenerResultado();

console.log(respuesta);

}


// procesarDatos();

//Fetch

// let informacion = fetch("https://fakestoreapi.com/products")

// console.log(informacion);
let contenedor = document.getElementById("contenedor");

fetch("https://fakestoreapi.com/products/7")
.then(resp => resp.json())
.then(data => {
console.log(data)
// data.forEach(prod => {
//     contenedor.innerHTML += `<h2>Nombre: ${prod.title}</h2>
//                              <h4>Precio. ${prod.price} </h4>`
// } )
})
.catch(err => console.log(err))

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
.then(resp => resp.json())
.then(data =>{
data.results.forEach(pokemon => {
    contenedor.innerHTML += `<h3>Nombre: ${pokemon.name} </h3>`
})
})
.catch(err => console.log(err))




// METODO GET

//  fetch("https://fakestoreapi.com/products")
//  .then(res => res.json())
//  .then(data => console.log(data));


//METODO POST

// fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     body: JSON.stringify({
//         "id": 21,
//         "title": "PC",
//         "price": 200,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "tech",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
//         }
//     }),
//     headers: { 'Content-Type': 'application/json' }
// })
//     .then(datos => (datos.json()))
//     .then(datos => console.log(datos))
//     .catch(err =>  console.log(err) );


// console.log("1")
// console.log("2")
// setTimeout(() => {
//     console.log("3")
// }, 1000);
// console.log("4")
// console.log("5")