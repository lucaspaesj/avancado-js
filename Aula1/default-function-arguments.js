// Quero fazer uma função de multiplicação
// Porém por algum motivo não coloquei o segundo argumento no console.log

function multiply(a, b){
    return a * b;
}

console.log(multiply(5));

// Opção para este problema
function multiply2(a, b){
    b = b || 1;
    
    return a * b;
}

console.log(multiply2(5));
// Contudo, se aplicar o 0, ele retorna NaN
// Como resolver

function multiply3(a, b){
    b = typeof b === "undefined" ? 1 : b;
    
    return a * b;
}

console.log(multiply3(5, 0));

// Sem utilizar a validação e definindo valor padrão
function multiply4(a, b = 1){ 
    return a * b;
}

console.log(multiply4(5));

// Número randômico
function randomNumber(){
    console.log("Generating a random number...")
    return Math.random() * 10;
}

function multiply5(a, b = randomNumber()){
    return a * b;
}

console.log(multiply5(5));
console.log(multiply5(5));
