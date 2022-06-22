//Pasador de paginas

const pages = document.querySelectorAll(".page");
const translateAmount = 110;
let translate = 0;
slide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateY(${translate}%)`),
    );
};


//Registro usuario
class Usuario {

    constructor(nombre, mail, edad) {
        this.nombre = nombre;
        this.mail = mail;
        this.edad = edad;
    }

    guardaConsulta(consulta) {
        consulta.saveDatos();

    }


}


let userName;
let userMail;
let userAge;
let users = [];

function askData() {
    userName = prompt('Ingrese su nombre');
    userMail = prompt('Ingrese su email');
    userAge = prompt('Ingrese su edad');
}

askData();

const user_one = new Usuario(userName, userMail, userAge);

askData();

const user_two = new Usuario(userName, userMail, userAge);


users.push(user_one);
users.push(user_two);

for (let user in users) {
    console.log(users[user]);
};

//Registro de consultas

let datos_conslt = [];
let cant_conslt = 0;

class Consulta {
    constructor(numero=0) {
        this.numero = numero+1;
        cant_conslt = cant_conslt+numero;
    }
    
    saveDatos(){
        datos_conslt = [ {tipoCaluculo:tipoCalc},
            {tiempo: tipoTime},
            {cantTiempo: tiempo}, 
            {monto: amount},
            {interes: interest},
            {tasaCaluda: tasaCalc},
            {tasaIva: iva},
            {interesDia: intDiario},
            {interesMes: intMes},
            {deudaDia: deudaDiaria},
            {deudaMensual: deudaMes},
            {ivaDelSaldo: ivaSaldo},
            {ivaDeInteres: ivaInt},
            {totalInteres: intTotal}
        ]; 
    }

    verDatos() {
        console.log("Consulta: ", this.numero)
        for(let dato in datos_conslt){
            console.log(datos_conslt[dato]);
        };

    };
}



//calculador prestamo

let tipoCalc = 'prestamo';
let tipoTime = "dias"
let tiempo = 30;
let amount = 50000;
let interest = 72.5;
let tasaCalc;
let iva = [1.21, 1.105, 1];
let bigMac = 1200;

let intDiario;
let intMes;
let deudaDiaria;
let deudaMes;
let ivaSaldo;
let ivaInt;
let intTotal;


// iva.push(parseFloat(prompt('Ingrese el IVA de su preferencia')))

// console.log(iva)


//Deuda diaria
if (tipoTime == 'dias') {
    tasaCalc = ((interest / 12) / 30);
    intDiario = ((amount * tasaCalc) / 100);
    ivaInt = intDiario * iva[0];
    deudaDiaria = intDiario + ivaInt;
    intTotal = intDiario * tiempo;


} else if (tipoTime == 'meses') {
    tasaCalc = (interest / 12);
    intMes = ((amount * tasaCalc) / 100);
    deudaDiaria = deudaMes / 30;
    ivaInt = intMes * iva[0];
    deudaMes = intMes + ivaInt;
    intTotal = intMes * tiempo;

} else {
    alert('Te falta elegir el tiempo que te vas a tomar')
}

ivaSaldo = (amount * iva[0]) / 100;
let totalBigMac = (intTotal + ivaInt) / bigMac;
let deudaTotal = amount + ivaInt + ivaSaldo + intTotal;


console.log('Interes diario: ', intDiario);
console.log('Deuda diaria: ', deudaDiaria);
console.log('Interes total: ', intTotal);
console.log('Deuda total: ', deudaTotal);
console.log('Iva del saldo: ', ivaSaldo);
console.log('Total de Big Mac: ', totalBigMac);


let consult_1 = new Consulta();
consult_1.saveDatos();

consult_1.verDatos();