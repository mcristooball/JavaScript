

var articulos = [
     {nombre: "Impresora", costo:3200},
     {nombre: "Lapicera", costo:100},
     {nombre: "Celular", costo:10000},
     {nombre: "Teclado", costo:500},
     {nombre: "Mouse", costo:700}
 ];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Teclado"
});

console.log(encuentraArticulo);

>> {nombre: "Teclado", costo: 500}
>> nombre: "Teclado"
>> costo: 500
