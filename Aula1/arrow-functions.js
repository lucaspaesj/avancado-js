// formas de declarar função

function log(value){
    console.log(value);
}

log("test");

var sumOld = function(a, b){
    return a + b;
}

console.log(sumOld(5,5));

// Arrow functions => Funções anônimas, ou seja, só pode utilizá-las ou atribuindo à uma variável ou passando
// como parâmetro para outra função

var sum = (a, b) => a + b;
console.log(sum(5,5))

// Pode ser escrita em apenas uma linha
// Mas sempre que for fazer statements tem que ser seguida de chaves

var test = (value) => {
    if(value <= 0){
        return "Valor menor ou igual a zero";
    }
    return "Valor maior ou igual a zero";
}

console.log(test(18))

// Posso omitir os parênteses caso haja apenas um argumento
// Contudo, deve haver parênteses caso haja mais de um argumento, destructuring, rest operator ou default values.

var teste = value => value * 5;

console.log(teste(18));

// O return é explicito caso não tenha arguments, mas caso haja objetos, tem que colocar a sintaxe ({})

var createObj = () => ({test: 123});

console.log(createObj());

// Posso utilizar a função construtora como uma função comum, mas não com arrow function

function Car () {
    this.foo = "bar";
}

console.log(new Car());

// Função comum no contexto de Hoisting

log2("teste");

function log2(value){
    console.log(value)
}

// Arrow function no contexto de Hoisting
// log3("teste");

// var log3 = value => console.log(value);

// Funcionalidade da arrow function

// Anos 2000:
// var obj = {
//     showContext: function showContext () {
//         var _that = this;

//         setTimeout( function () {
//             _that.log("after 1000ms")
//         }, 1000);
//     },
//     log: function log (value) {
//         console.log(value);
//     }
// }

// obj.showContext();
// Com arrow function
var obj = {
    showContext: function showContext () {
        setTimeout(() => {
            this.log("after 1000ms")
        }, 1000) 
    },
    log: function log (value) {
        console.log(value);
    }
}

obj.showContext();