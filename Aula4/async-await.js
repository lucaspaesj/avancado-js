// Async - Await => Forma de criar promises de maneira mais simples
// e lidar com promises dentro de promises, também de uma maneira
// mais simples e enchuta se comparada com o fetch

// const simpleFunc = async function () { // ou arrow function
//     throw new Error("Oh no!")
//     return 12345;
// };


// Só de colocar o async, já se converte em Promise, então posso utilizar o .then

// simpleFunc()
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// });

// Async não é muito utilizado sozinho

// Utilizando o await, ele espera que outras Promises sejam resolvidas
// Então sempre que eu tiver uma promise e eu quiser aguardar que ela
// seja resolvida, eu posso utilizar o await

// Exemplo:

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
};

simpleFunc()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});

// Então, com o async-await, podemos realizar o processamento de dados assincronos
// de maneira sequencial