// Promises e async await podem ser utilizados no node
// Contudo, uma maneira diferente de lidar com programação assíncrona
// dentro do node e deixar o código mais estruturado
// utilizando um pattern é usando o event emitter

// *Exclusivo do node*

// Primeiro nós importamos o módulo

const EventEmitter = require("events");

class Users extends EventEmitter {
    userLogged(data){
    setTimeout(() => {
            this.emit("User logged", data); 
    }, 2000);
    }
}
const users = new Users();

users.on("User logged", data => {
    console.log(data);
});

users.userLogged({user: "Lucas Paes"});
users.userLogged({user: "André Felipe"});

// EventTarget - Trabalha com uma api conhecida do browser de event listeners mas esta api não possui
// tantos recursos como a ferramenta do node acima exemplificada