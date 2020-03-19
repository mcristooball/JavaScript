
var alumnos = ["Miguel", "Jocelyn", "Angel"];

function saludarAlumno (alumno){
    console.log(`Hola, ${alumno}`);
};

for (var i = 0; i < alumnos.length; i++) { //Mientras la variable i sea menor a la longitud de 
    // nuestro arreglo esa tarea se va a seguir generando.
    saludarAlumno(alumnos[i]);
}

>> Hola, Miguel
>> Hola, Jocelyn
>> Hola, Angel

--------------------------------------------------------------------------

var alumnos = ["Miguel", "Jocelyn", "Angel"];

function saludarAlumno (alumno){
    console.log(`Hola, ${alumno}`);
};

// For of (Tenemos que inicializar una variable en singular de nuestro array que esta en plural)
for(var alumno of alumnos){ //En esta linea hacemos referencia al singular del arreglo
    // donde la variable alumno cumple la funcion que desempeñaria el index.
    saludarAlumno(alumno);
};

>> Hola, Miguel
>> Hola, Jocelyn
>> Hola, Angel
