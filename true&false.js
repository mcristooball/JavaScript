
//Eg. de valores falsos:
boolean(0);
boolean(""); //String vacio sin ningun caracter asi sea un espacio
boolean(null);
boolean(undefined);
boolean(NaN);
boolean(); // Si no tenemos un valor es falso

//Eg. de valores verdaderos:
boolean(true);
boolean(1); //cualquier numero que no sea cero
boolean(" "); // String con un caracter, en este caso un espacio
boolean(funcion(){});
boolean({}); // objeto aunque este vacio
boolean([]); // array aunque este vacio
