// Rest operator ... - Obrigatoriamente dentro da lista de argumentos -
// ...aqui define-se o valor de uma variável


// Antigamente, se eu quisesse realizar uma operação de soma em uma função que somasse todos os argumentos
// a sintaxe ficaria da seguinte forma
// function sum(a, b){
//     console.log(arguments) // se trata de uma variável reservada com uma lista de todos os argumentos
    
//     var value = 0;

// for(var i = 0; i < arguments.length; i++){
//     value += arguments[i];
// }

//     return value;
// }

// console.log(sum(5, 5, 6, 10, 4))

// Com o rest operator - Neste caso o prototype dos args retorna em Array, tornando possível manipular
// o código com as propriedades de Array: pop/shift/reduce/filter/etc
// function sum2(...args){
//     return args.reduce((acc, value) => acc + value, 0)
// }

// console.log(sum2(5, 5, 6, 10, 4));
// Arguments no caso de arrow function
// const sum3 = () => {
//     console.log(arguments) // Retorna undefined pois os arguments não foram definidos
// }

// console.log(sum3(5, 3, 2, 5, 4));
// Rest operator pode ser utilizado para coletar argumentos restantes de nossa função
const sum4 = ( a, b, ...rest) => {
    console.log(a, b, rest);
}

sum4(5, 5, 6, 10, 4);