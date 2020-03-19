

var estudiantes = ["Miguel", "Angel", "Cristobal"];

 function saludarEstudiantes(estudiante){
     console.log(`Hola, ${estudiante}`);
 }

 while(estudiantes.length > 0){ //Mientras la longitud del arreglo estudiantes sea mayor a cero
     console.log(estudiantes);
     var estudiante = estudiantes.shift(); // Se tiene que cumplir este loop ciclo
     // que genera una variable con el metodo de mutacion shift que va a estar sacando elementos
     saludarEstudiantes(estudiante);    
 }

>> (3) ["Miguel", "Angel", "Cristobal"]
>> Hola, Miguel
>> (2) ["Angel", "Cristobal"]
>> Hola, Angel
>> ["Cristobal"]
>> Hola, Cristobal
