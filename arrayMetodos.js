// Metodos para recorrer un array

var articulos = [
     {nombre: "Impresora", costo:3200},
     {nombre: "Lapicera", costo:100},
     {nombre: "Celular", costo:10000},
     {nombre: "Teclado", costo:500},
     {nombre: "Mouse", costo:700}
 ];

 var articulosFiltrados = articulos.filter(function(articulo){
     return articulo.costo <= 700
 });

 console.log(articulosFiltrados);

...............................................................

>> (3) [{…}, {…}, {…}]
>> 0: {nombre: "Lapicera", costo: 100}
>> 1: {nombre: "Teclado", costo: 500}
>> 2: {nombre: "Mouse", costo: 700}

---------------------------------------------------------------

var articulos = [
     {nombre: "Impresora", costo:3200},
     {nombre: "Lapicera", costo:100},
     {nombre: "Celular", costo:10000},
     {nombre: "Teclado", costo:500},
     {nombre: "Mouse", costo:700}
 ];

 // Metodo de Map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos
>> (5) ["Impresora", "Lapicera", "Celular", "Teclado", "Mouse"]// creo un array nuevo unicamente
// de la lista  de nombres
>> 0: "Impresora"
>> 1: "Lapicera"
>> 2: "Celular"
>> 3: "Teclado"
>> 4: "Mouse"
>> length: 5

