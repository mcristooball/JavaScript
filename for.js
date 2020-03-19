
var alumnos = ["Miguel", "Jocelyn", "Angel"];

function saludarAlumno (alumno){
    console.log(`Hola, ${alumno}`);
};

for (var i = 0; i < alumnos.length; i++) {
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

for(var alumno of alumnos){ //En esta linea hacemos referencia al singular del arreglo
    // donde la variable alumno cumple la funcion que desempeñaria el index.
    saludarAlumno(alumno);
};
