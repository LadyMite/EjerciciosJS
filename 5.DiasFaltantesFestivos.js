//5. Calcule los días que faltan para día de muertos y navidad
function calcularDiasParaEvento(evento) {
    let hoy = new Date();
    let eventoFecha;

    if (evento === 'DiaDeMuertos') {
        eventoFecha = new Date(hoy.getFullYear(), 10, 1); // 1 de noviembre
    } else if (evento === 'Navidad') {
        eventoFecha = new Date(hoy.getFullYear(), 11, 25); // 25 de diciembre
    } else {
        return 'Evento desconocido';
    }

    let diferenciaTiempo = eventoFecha.getTime() - hoy.getTime();
    let diasFaltantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return diasFaltantes;
}

// Ejemplos de uso:
console.log(`Días para el Día de Muertos: ${calcularDiasParaEvento('DiaDeMuertos')} días`);
console.log(`Días para Navidad: ${calcularDiasParaEvento('Navidad')} días`);

