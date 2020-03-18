if(true){ // Anque no definamos el valor que esta dentro de los parentesis 
    // lo que va a esperar evaluar la sentencia es que el valor sea verdadero.
    console.log("Hi");
}

if(false) {//Si lo que esta dentro no es verdadero
    console.log("Hi");
} else{//Entonces en consola imprime lo siguiente:
    console.log("El valor es falso");
}


// Realiza la siguiente validacion de edad
// Si una persona no tiene 18 años aun; "Aun no eres mayor de edad"
// Si tiene 18 años "Ahora puedes votar"
// Si es mayor de 18 años "Puedes seguir votando"

var edad = 18; //Ingresamos el valor que va a validar

if(edad === 18 ){ // Primera validacion
    console.log("Ahora puedes votar");
}else if(edad > 18){ // Segunda validacion
    console.log("Puedes seguir votando");
}else{ // Valor por default
    console.log("Aun  no eres mayor de edad")
};
