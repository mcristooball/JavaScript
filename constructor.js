function auto(marca, modelo, annio) { // ( ... ) Son los parametros que vamos a utilizar
    this.marca = marca; // Ocupamos la palabra reservada this para hacer referencia a la funcion,
    // la palabra clave "marca" = marca(Que se esta utilizando como parametro y a su vez hace
    // referencia a la propiedad del objeto)
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo_1 = new auto("Jeep", "Cherokee", 2020); /* operador new, genera una nueva instancia de
la funcion constructora. Este operador a su ves esta referido a la funcion constructora y para este 
nuevo objeto ingresaremos las propiedades que construimos en la funcion "auto" */ 
var autoNuevo_2 = new auto("Nissan", "Tsuru", 1996);

console.log(autoNuevo_1);
console.log(autoNuevo_2);
{marca: "Jeep", modelo: "Cherokee", annio: 2020}
{marca: "Nissan", modelo: "Tsuru", annio: 1996}
