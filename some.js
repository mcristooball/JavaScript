

var articulos = [
     {nombre: "Impresora", costo:3200},
     {nombre: "Lapicera", costo:100},
     {nombre: "Celular", costo:10000},
     {nombre: "Teclado", costo:500},
     {nombre: "Mouse", costo:700}
 ];

// some Nos va a regresar articulos de verdadero o falso para los que cumplan la valoracion
// simplemente nos va a regresar si la condicion es verdadera o falsa

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700 // Le estoy preguntando si en mi lista de articulos 
    // existe algun articulo con un costo menor o igual a 700
});

console.log(articulosBaratos);

>> true



