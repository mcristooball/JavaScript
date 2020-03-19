

// Objetos: Se manejan con propiedades(convinacion entre palabras clave y valores)
// Sintaxis: var objeto = {};

var miAuto = {
    marca: "Jeep", // marca<palabra clave>, "Jeep"<Valor>
    annio: 2020,
    detalleAuto: function(){
        console.log(`Mi camioneta es ${this.marca} ${this.annio}`);
    }
};

miAuto.detalleAuto(); //Como la palabra clave hace referencia a una funcion, la mandamos llamar como eso.
Mi camioneta es Jeep 2020
