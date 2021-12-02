// Maneiras clássicas de escrever objetos literais
var obj = {
    prop1: "Lucas"
};

// Referenciar uma variável
var prop1 = "Lucas"

var obj1 = {
    prop1: prop1
};

console.log(obj1);

// Short range ECMA6 - Variáveis

var prop2 = "Lucas"

var obj2 = {
    prop2
};

console.log(obj2)

// Short range ECMA6 - Funções
function method1(){
    console.log("method called");
}

var obj3 = {
    method1
}

obj3.method1();

// Outra forma de fazer métodos
var obj4 = {
    sum: (a,b) => a + b
};

console.log(obj4.sum(1, 5));

// Outra forma
var obj5 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj5.sum(1, 5))

// Propriedade concatenada antes do ECMA6
var propName = "test"

var obj6 = {}

obj6[propName + "concat"] = "prop value";

console.log(obj6)
// Propriedade concatenada depois do ECMA6
var propName1 = 'teste';

var obj7 = {
    [propName1 + "concat"]: 'prop value'
};

console.log(obj7);