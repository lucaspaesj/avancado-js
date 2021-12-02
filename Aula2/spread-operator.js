// Spread operator - Se escreve da mesma forma que o rest operator
// Ele quebra os itens e passa para outros lugar
// Porém, ele não se limita a listas, mas pode também ser utilizado em
// strings, arrays, objetos literais e objetos iteráveis    

// Se eu quisesse passar todos os argumentos da minha função soma para
// a função multiplicação

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply(...rest)
}
// console.log(sum(5, 5, 5, 2, 3));

// Strings

const str = "Lucas";
function logArgs(){
    console.log(arguments);
}
// logArgs(...str);

// Arrays

const arr = [1, 2, 3, 4];
// logArgs(...arr)

// Forma de combinar dois arrays

const arr2 = arr.concat([5, 6, 7, 8]);
// console.log(arr2)

// Podemos aproveitar do spread operator neste caso

const arr3 = [...arr, 5, 6, 7, 8];
// console.log(arr3);

// Objetos literais - Só podem ser utilizados para construir novos objetos

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
}

// console.log(obj2)
// Neste caso, não posso utilizar o spread operator para evaluar um array usando como 
// opção o objeto que eu já crieri, isso por que objetos literais não são iteráveis
// Exemplo:

const obj3 = {
    test: 123
}

// const ar = [...obj3];

// console.log(ar)
// Sendo assim, só posso utilizar spread operator em objetos literais não iteráveis
// no momento de criação de novos objetos

// O spread operator é muito utilizado para gerar clones de outro objeto,
// isto porque o primeiro objeto, ao ser declarado como igual ao segundo,
// pode acabar sendo alterado por conta de alguma modificação realizada no segundo
// Exemplo:

// const person = {
//     test: 123
// };

// const person2 = person;

// person2.test = "Lucas";

// console.log(person); // retorna "Lucas"

// Para evitar tal problema, utilizamos o spread operator

const person = {
    test: 123
};

const person2 = {...person};

person2.test = "Lucas";

// console.log(person);
// console.log(person2);
// - Shallow clone - Se o objeto utilizado como propriedade para definir um novo
// objeto possuir propriedades que sejam outros objetos, estes novos objetos podem ser alterados
// no primeiro objeto, assim como no exemplo de problema anterior
// Exemplo:

// const pessoa = {
//     test: 123,
//     subObj: {
//         test: 123
//     }
// };

// const pessoa2 = {...pessoa};

// pessoa2.subObj.test = "Lucas";

// console.log(pessoa);
// console.log(pessoa2)

// A solução para este caso é gerar um sub-objeto também realizando um spread

const pessoa = {
    test: 123,
    subObj: {
        test: 123
    }
};

const pessoa2 = {...pessoa, subObj: {...pessoa.subObj}};

pessoa2.subObj.test = "Lucas";

console.log(pessoa);
console.log(pessoa2)