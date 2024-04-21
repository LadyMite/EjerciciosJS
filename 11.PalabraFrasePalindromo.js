//11. Valide si una palabra o frase es palíndromo.
function esPalindromo(texto) {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    let textoInvertido = texto.split('').reverse().join('');
    return texto === textoInvertido;
}

let palabra = "reconocer";
if (esPalindromo(palabra)) {
    console.log(`${palabra} es un palíndromo.`);
} else {
    console.log(`${palabra} no es un palíndromo.`);
}

//toLowerCase(): Convierte cadena de texto a minúsculas.
//.replace():Elimina todos los caracteres que no son letras del alfabeto (a-z) ni números (0-9) de la cadena de texto.
//.split: Divide la cadena en un caracter
//.reverse():Invierte el orden de los elementos en el array
//join:Une todos los elementos del array (invertidos)