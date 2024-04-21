//Reciba un año y te responda si es o no es bisiesto.

function esBisiesto(anio) {
    // Un año es bisiesto si es divisible por 4 pero no por 100, o si es divisible por 400
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

let anio = 2000;

if (esBisiesto(anio)) {
    console.log(`${anio} es un año bisiesto.`);
} else {
    console.log(`${anio} no es un año bisiesto.`);
}
