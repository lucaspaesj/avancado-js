// Generators são funções com pausa e elas retornam demonstrando valores através da interface
// de iteração (value, done)

function* hello(){ // Neste caso, o valor retorna como undefined, se eu quiser retornar um valor
    // tenho que passa como argumento no yield;
    console.log("Hello");
    yield 1;
    console.log("From");
    yield;
    console.log("Function!");
}

const it = hello();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// Posso receber valores de fora

function* hi(){
    console.log("Hello");
    yield;
    console.log("From");
    const value = yield;
    console.log(value);
}

const that = hi();

console.log(that.next());
console.log(that.next());
console.log(that.next("Outside"))

// No mesmo exemplo da aula de symbols

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i ++){
            yield this.values[i];
        }
    }
};

for (let value of obj){
    console.log(value);
}