//FizzBuzz

let resultado = fizzBuzz(56);
console.log(resultado);
function fizzBuzz(entrada){
    if(typeof(entrada) !== "number"){
        return "Não é um numero";
    }
    if((entrada%3 === 0) && (entrada%5 === 0)){        
        return "FizzBuzz";   
    }
    if(entrada%3 === 0){
        return "Fizz";
    }
    if(entrada%5 === 0){
        return "Buzz";
    }

    return entrada;
}

// Reversa a string

let newStr = "";

function reverseAString(str){
    for(let i=str.length-1;  i>=0 ; i--){
        newStr += str[i];
        console.log(newStr);
    }
}

let strReverse = reverseAString("HELLO GAMA");


//Convert Celsius to Fahrenheit

function converToF(value){
    return value * 1.8 + 32
}

let result = converToF (40);
console.log(`o valor em F é ${result}`);


