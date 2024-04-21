//Te diga si un número es par o impar
function verificarParImpar(numero) {
    if (numero % 2 === 0) { //si dividir numero entre 2 es igual a 0 entonces es par
        return `El número ${numero} es par`;
    } else {
        return `El número ${numero} es impar`;
    }
}

let numero = 7; 
let resultado = verificarParImpar(numero);
console.log(resultado); 

