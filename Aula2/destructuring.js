// Destructuring Assignment

// Em diversas situações no js, utilizamos propriedades de alguma variável e passamos para outras
// Exemplo:

var arr = ["Apple", "Banana", "Orange", ["Tomato"]];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
// O problema é que esta é uma forma muito verbosa e pode ir muito além dependendo da quantidade de itens do array inicial
// Com o desructuring assignment ficaria da seguinte forma:

var [apple2, banana2, orange2, [tomato2]] = ["Apple", "Banana", "Orange", ["Tomato"]];

// console.log(tomato2);

// Pode ser utilizado com objetos
// Sintaxe sem o desructuring assignment

var obj = {
    name: "Lucas"
};

// var name = obj.name;

// Utilizando o desructuring

var {name: name2} = obj;

// console.log(name2);

// Interessante frisar que quando utilizo o desructuring eu não altero o objeto/array inicial

name2 = "Paes";

// console.log(name2);

// console.log(obj)

// Objetos dentro de outros objetos:

const person = {
    name: "Lucas",
    props: {
        age: 22
    }
};

var age = person.props.age;

// console.log(age)

// Utilizando o desructuring

var {props: {age: age2}} = person;

// console.log(age2)

// Desructuring dentro de objetos dentro de arrays e de arrays dentro de objetos

var person2 = {
    name: "Lucas",
    props: {
        age: 22,
        favoriteColors: ["Black", "Blue"]
    }
};

var {props: { age: age3, favoriteColors: [color1, color2]}} = person2; // é igual à - var color1 = person2.props.favoriteColors[0]

// console.log(color1);

// Objetos dentro de arrays sem desruction

var arr = [{name: "Apple", type: "fruit"}];

var fruit1 = arr[0].name;

// console.log(fruit1);

// Utilizando o desruction

var [{name: fruit2}] = arr;

// console.log(fruit2);

// Podemos utilizar o desructuring no momento de declarar variáveis como também no momento de passar a lista de argumentos
// de uma função:

function sum(arr){
    return arr[0] + arr[1];
}

// console.log(sum([5,5,3]));

// Utilizando o desructuring

function sum2([a, b]){
    return a + b;
}

// console.log(sum2([5, 5]));

// Desruction com default values

function sum3([a, b] = [0, 0]){
    return a + b;
};

// console.log(sum3());
// console.log(sum3([5, 5]));

// Objetos em argumentos de funções
function sum4({a, b}){
    return a + b;
};

console.log(sum4({a: 5, b: 5}));
