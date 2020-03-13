
var miNombre = undefined; /*Suponiendo que esta linea no existe, es lo que hace en automatico JS al notar que se esta llamando a un variable que aun no ha sido declarada tomando en cuenta que el codigo comienza en la siguiente linea*/

console.log(miNombre);/*Linea 1 llamando a una variable que no ha sido declarada o que se espera que reconozca en automatico la asignacion que tiene la variable en la siguiente linea*/
// Lo que va a imprimir la consola como reultado de esta peticion es "undefined"
// A esto se le conoce como hoisting
miNombre = "Mike";


