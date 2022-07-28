let cantUsers = 0;

//Registro usuario
class Usuario {

    constructor(nombre, mail, edad) {
        this.nombre = nombre;
        this.mail = mail;
        this.edad = edad;
        this.id = cantUsers + 1;
        cantUsers++;
    }

};


let users = [];
let newUser;
let arrayUsers = [];

function Registrarse() {

    let userName = document.getElementById("userName");
    let userMail = document.getElementById("userMail");
    let userAge = document.getElementById("userAge");

    let mensaje = document.getElementById("mensaje");

    let usersRecuperado;

    if (users.length <= 0) {
        newUser = new Usuario(userName.value, userMail.value, userAge.value);
        
        users.push(newUser);

        localStorage.setItem("Usuarios", JSON.stringify(users));

        mensaje.innerText = "Muchas gracias por registrarte!";
    } else {

        usersRecuperado = JSON.parse(localStorage.getItem("Usuarios"));
        if (usersRecuperado.some(e => e.mail == userMail.value)) {

            mensaje.innerText = `Ups! Ya estas registrad@ ${userName.value}!`;
            

        } else {
            newUser = new Usuario(userName.value, userMail.value, userAge.value);
            
            users.push(newUser);

            localStorage.setItem("Usuarios", JSON.stringify(users));

            mensaje.innerText = "Muchas gracias por registrarte!";
            
        };
    };

};