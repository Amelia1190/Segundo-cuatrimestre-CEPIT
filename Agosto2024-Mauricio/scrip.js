
const { log } = require("console");

const err= [1,2,3,4,5];

arrayBuffer.forEach(item =>{
console.log(item);
})

//console.log(arr);
//every ():verifica que TODOS los elementos del arreglo cumplan con una condicion (deben cumplirla todos)

const everyCumple = arr.every(item => item>0)
console.log(everyCumple);

const menosque=arr.every(item =>item<4)
console.log(menosque);

//some():verifica si ALGUN elemento del arreglo cumple con la condicion
const algun= arr.some(item => item>4)
console.log(algun);

//reduce()este metodo ejecuta para cada elemento y devuelve un unico valor y se usa cuando hay q hacer sumatoria de algo o multiplicar cosas xq vamos a obtener un solo resultado

//const suma= arr.reduce(par1, par2)
const suma= arr.reduce((total, valor)=>total+valor,0)
console.log(suma);

//map()se ejecuta sobre cada elemento del arreglo y crea un nuevo arreglo sin modificar el original 

const sumar1 =arr.map(item =>item +1);
console.log(sumar1);
console.log(arr);

//filter()se ejecuta sobre cada elemento y crea un nuevo arreglo con los que cumplen la condicion
//se filtra elementos del arreglo q cumplen con la condicion 

let elemFiltrados = arr.filter(item =>item>2&&item<4)
console.log(elemFiltrados);
//             0       1       2       3
let nombres=["jose","juana","maria","marta"]
let filtrados =nombres.slice(1,3)
console.log(filtrados);

let arrDesordenado=[5,9,7,3,2,1,4];
let arrOrdenados=arrDesordenado.sort((a,b)=>{
    if(a>b)
        return-1
    else
        return 1
});
console.log(arrOrdenados);


/*remplaza un solo if con un ternario que es el signo de pregunta ? reemplaza un if si se cumle tal cosa y si no se cumple seria el :
let arrDesordenado=[5,9,7,3,2,1,4];
let arrOrdenados=arrDesordenado.sort((a,b)=>a<b ? -1: 1);
console.log(arrOrdenados);

ACA EL METODO SORT YA SABE COMO ORDENAR EL ARREGLO
*/

/*ordenalo de menor a mayor 
let arrDesordenado=[5,9,7,3,2,1,4];
let arrOrdenados=arrDesordenado.sort((a,b)=> a-b);
console.log(arrOrdenados);
*/

/*ordenalo de mayor a menor 
let arrDesordenado=[5,9,7,3,2,1,4];
let arrOrdenados=arrDesordenado.sort((a,b)=> b-a);
console.log(arrOrdenados);
*/





// operadores ternarios 

let usuario = { nombre: 'Ana' };
let saludo = usuario.nombre ? `Hola, ${usuario.nombre}!` : 'Hola, invitado!';
console.log(saludo); // Imprime: Hola, Ana!
