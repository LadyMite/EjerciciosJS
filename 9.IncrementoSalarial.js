//9. Calcule el incremento salarial de una persona: 
//Si su salario es menor a 15mil el incremento será del 20% y 
//si es mayor a 15mil el incremento será del 15%
let salario= 15000
let incremento;
	
	if(salario < 15000) {
        incremento = salario * 0.2;
    } else {
        incremento = salario * 0.15; 
    }
	
	console.log("Su incremento de salario es de: ", incremento) 
	console.log("Su nuevo salario será de: ", salario + incremento)