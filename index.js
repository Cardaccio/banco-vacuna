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


let busqueda = users.filter(function (users) { return users.id > 0 });
console.log(busqueda);

//Funciones
function tipoCalculo() {
    let entrada = prompt('Ingrese P para "prestamo" o T para "Tarjeta"').toLocaleUpperCase();
    while (entrada != 'P' || entrada != 'T')
        if (entrada == 'P') {
            value = 'prestamo'
            return value
        } else if (entrada == 'T') {
            value = 'tarjeta'
            return value
        } else {
            entrada = prompt('No ingreso un valor valido.\nIngrese P para "prestamo" o T para "Tarjeta"').toLocaleUpperCase();
        }
};

function tipoTiempo() {
    let entrada = prompt('Ingrese D para "dias" o M para "meses"').toLocaleUpperCase();
    while (entrada != 'D' || entrada != 'M')
        if (entrada == 'D') {
            value = 'dias'
            return value
        } else if (entrada == 'M') {
            value = 'meses'
            return value
        } else {
            entrada = prompt('No ingreso un valor valido.\nIngrese D para "dias" o M para "meses"').toLocaleUpperCase();
        }
};

function tipoIva() {
    let valoresIva = [1.21, 1.105, 1];
    let entrada = parseFloat(prompt('Ingrese valor de IVA: 21, 10.5 o 0'));
    while (entrada != 21 || entrada != 10.5 || entrada != 0)
        if (entrada == 21) {
            value = valoresIva[0]
            return value
        } else if (entrada == 10.5) {
            value = valoresIva[1]
            return value
        } else if (entrada == 0) {
            value = valoresIva[2]
            return value
        }
        else {
            entrada = Math.round(parseFloat(prompt(' Valor no valido\nIngrese valor de IVA: 21, 10.5 o 0')));
        }
}

//Registro de consultas

let datos_conslt = [];
let cant_conslt = 0;
let bigMac = 1200;

let tipoCalc;
let tipoTime;
let tiempo;
let amount;
let interest;
let tasaCalc;
let iva;

let intDiario;
let intMes;
let deudaDiaria;
let deudaMes;
let ivaSaldo;
let ivaInt;
let intTotal;
let totalBigMac;
let deudaTotal;

class Consulta {
    constructor() {
        this.numero = cant_conslt + 1;
        cant_conslt ++;
        this.date = new Date();

    }

    consultar() {
        tipoCalc = tipoCalculo();
        tipoTime = tipoTiempo()
        tiempo = parseInt(prompt(`Ingrese la cantidad de ${tipoTime}`));
        amount = parseInt(prompt("Ingrese monto a tomar"));
        interest = parseFloat(prompt('Ingrese la TNA'));
        iva = tipoIva();

        if (tipoTime == 'dias') {
            tasaCalc = ((interest / 12) / 30);
            intDiario = ((amount * tasaCalc) / 100);
            ivaInt = intDiario * iva;
            deudaDiaria = intDiario + ivaInt;
            intTotal = intDiario * tiempo;


        } else if (tipoTime == 'meses') {
            tasaCalc = (interest / 12);
            intMes = ((amount * tasaCalc) / 100);
            deudaDiaria = deudaMes / 30;
            ivaInt = intMes * iva;
            deudaMes = intMes + ivaInt;
            intTotal = intMes * tiempo;

        } else {
            alert('Te falta elegir el tiempo que te vas a tomar')
        }

        ivaSaldo = (amount * iva) / 100;
        totalBigMac = (intTotal + ivaInt) / bigMac;
        deudaTotal = amount + ivaInt + ivaSaldo + intTotal;


        console.log('Interes diario: ', intDiario);
        console.log('Deuda diaria: ', deudaDiaria);
        console.log('Interes total: ', intTotal);
        console.log('Deuda total: ', deudaTotal);
        console.log('Iva del saldo: ', ivaSaldo);
        console.log('Total de Big Mac: ', totalBigMac);


    }

    saveDatos() {
        datos_conslt = [{ tipoCaluculo: tipoCalc },
        { tiempo: tipoTime },
        { cantTiempo: tiempo },
        { monto: amount },
        { interes: interest },
        { tasaCaluda: tasaCalc },
        { tasaIva: iva },
        { interesDia: intDiario },
        { interesMes: intMes },
        { deudaDia: deudaDiaria },
        { deudaMensual: deudaMes },
        { ivaDelSaldo: ivaSaldo },
        { ivaDeInteres: ivaInt },
        { totalInteres: intTotal }
        ];
    }

    verDatos() {
        console.log("Consulta: ", this.numero)
        console.log("Fecha: ", this.date)
        for (let dato in datos_conslt) {
            console.log(datos_conslt[dato]);
        };

    };
}



let consult_1 = new Consulta();
consult_1.consultar();

let calcular = prompt('Ingrese OK para volver a calcular').toLocaleUpperCase();

let consult_2;
if (calcular=='OK'){
    consult_2 = new Consulta();

    consult_2.consultar();
}

user_one.guardaConsulta(consult_1);


consult_1.saveDatos();

consult_1.verDatos();
consult_2.verDatos();

