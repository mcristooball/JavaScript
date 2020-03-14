
//Eg. de valores falsos:
boolean(0);
boolean(""); //String vacio sin ningun caracter asi sea un espacio
boolean(null);
boolean(undefined);
boolean(NaN);
boolean(); // Si no tenemos un valor es falso

//Eg. de valores verdaderos:
boolean(true);
boolean(1);
boolean(" "); // String con un caracter, en este caso un espacio
boolean(funcion(){});
boolean({}); // objeto
boolean([]); // array
