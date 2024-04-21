//Calcule el número de días que alguien ha vivido tomando en cuenta su fecha de nacimiento
function calcularDiasVividos(fechaNacimiento) {
    let fechaNac = new Date(fechaNacimiento);
    let fechaActual = new Date();

    // Calcular la diferencia en milisegundos entre la fecha de nacimiento y la fecha actual
    let diferenciaTiempo = fechaActual.getTime() - fechaNac.getTime();
    
    // Convertir la diferencia de milisegundos a días
    let diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    
    return diasVividos;
}

let fechaNacimiento = '1990-01-01'; // Cambia esta fecha por la fecha de nacimiento que desees
let diasVividos = calcularDiasVividos(fechaNacimiento);
console.log(`Has vivido aproximadamente ${diasVividos} días.`);

