
var frutas = ["Melon", "Platano", "Pera"];
console.log(frutas.length);
3 // La consola nos trae la cantidad total de elementos del arreglo

console.log(frutas[1]); // Con esta instruccion le estamos diciendo a la consola; 
// queremos que nos traigas el dato o valor del array que esta en la segunda posicion
// tomando en cuenta que se cuentan las posiciones desde el cero
Platano

// Mutacion de arrays
var nuevo = frutas.push("Fresa"); // el metodo push agregara mas elementos al array 
console.log(frutas);
(4) ["Melon", "Platano", "Pera", "Fresa"]

var borrar = frutas.pop(); //el metodo.pop borrara el ultimo valor del arreglo.
console.log(frutas);

(3) ["Melon", "Platano", "Pera"]

var nuevo_1 = frutas.unshift("Uva"); // Lo que va a hacer este metodo; agrega un elemento pero a 
// diferencia de push este metodo lo agregara al principio del array.
console.log(frutas);
(4) ["Uva", "Melon", "Platano", "Pera"]

var borrarUva = frutas.shift(); // el metodo shift va a borrar el primer elemento del arreglo
console.log(frutas);
(3) ["Melon", "Platano", "Pera"]

var posicion = frutas.indexOf("Platano"); // el metodo indexOf nos trae la posicion del elemento del 
//arreglo que consultemos.
console.log(posicion);
1
