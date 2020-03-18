
// El switch es una forma tambien de generar una condicion de poder validar ciertas cosas 
// solo que este va a funcionar por casos 

/* Sintaxis:*/ 

var numero = 1;

switch (numero) { // Lo que vamos a validar es lo que esta dentro de la variable
    
    case 10: // 
        console.log("Soy un numero diez!");
        break; //Termina la validacion hasta este punto siempre y cuando la validacion sea correcta
    
    case 1:
        console.log("Soy un numero uno!");
        break;
};



-----------------------------------------------------------------------------------------
// Si lo integramos en una funcion:


newFunction();

function newFunction() {
    var numero = 1;
    switch (numero) { // Lo que vamos a validar es lo que esta dentro de la variable
        case 10: // 
            console.log("Soy un numero diez!");
            break; //Termina la validacion hasta este punto siempre y cuando la validacion sea correcta
        case 1:
            console.log("Soy un numero uno!");
            break;
    }
    ;
}
