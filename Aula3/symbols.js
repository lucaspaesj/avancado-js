// Symbol

const uniqueID = Symbol("Hello");
const uniqueID2 = Symbol("Hello");

// console.log(uniqueID === uniqueID2); // False - pois é apenas um identificador único

// O symbol é muito utilizado para criar propriedades "privadas" - É mais uma forma de deixar
// claro para os outros desenvolvedores que é uma propriedade que não pode ser mudada:

// const obj = {
//     [uniqueID]: "Hello"
// };

// console.log(obj);

// Como acessar esta propriedade

// console.log(Object.keys(obj)); // Dessa forma, ele não acessa o Symbol.

// console.log(Object.getOwnPropertySymbols(obj)); // Esta é a forma de acessar os symbols.

// Well known symbols - Adicionar propriedades ao seu objeto

// Symbol.iterator;
// Symbol.split;
// Symbol.toStringTag;

const arr = [1, 2, 3, 4];

// const it = arr[Symbol.iterator]();

// while(true){
//     let {value, done} = it.next();
//     if(done){
//         break;
//     }
//     console.log(value);
// };

// Iterando no ECMA6

for(let value of arr){
    // console.log(value);
};

// Utilizando strings

const str = "Lucas"

for(let value of str){
    // console.log(value);
};

// Função iteradora

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return{
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
}; // Aqui, o objeto se tornou iterável
// Sendo assim, posso utilizar o spread operator, ou mesmo o for of

const it = obj[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (let value of obj){
    console.log(value);
}

const arr2 = [...obj];

console.log(arr2)