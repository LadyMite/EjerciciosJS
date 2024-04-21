//3. Encuentre el factorial de cualquier número dado
function factorial(numero) {
    if (numero === 0 || numero === 1) return 1; //Si el número es 0 o 1, el factorial es 1 y la función devuelve directamente 1.
    return numero * factorial(numero - 1);
}

let numero = 5;
let resultadoFactorial = factorial(numero);
console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);
