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
        this.id = cantUsers+1;
        cantUsers ++;
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


let busqueda = users.filter(function (users){return users.id>0});
console.log(busqueda);



//Registro de consultas

let datos_conslt = [];
let cant_conslt = 0;
let bigMac = 1200;

class Consulta {
    constructor(numero = 0) {
        this.numero = numero + 1;
        cant_conslt = cant_conslt + numero;
        let date = new Date;

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




/*
let tipoCalc = 'prestamo';
let tipoTime = "dias"
let tiempo = 30;
let amount = 50000;
let interest = 72.5;
let tasaCalc;
let iva = [1.21, 1.105, 1];

*/

//Calculadora

function tipoCalc() {
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

tipoCalc = tipoCalc();

function tipoTime() {
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

tipoTime = tipoTime()
let tiempo = parseInt(prompt(`Ingrese la cantidad de ${tipoTime}`));
let amount = parseInt(prompt("Ingrese monto a tomar"));
let interest = parseFloat(prompt('Ingrese la TNA'));
function iva() {
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

iva = iva();

let intDiario;
let intMes;
let deudaDiaria;
let deudaMes;
let ivaSaldo;
let ivaInt;
let intTotal;


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
let totalBigMac = (intTotal + ivaInt) / bigMac;
let deudaTotal = amount + ivaInt + ivaSaldo + intTotal;


console.log('Interes diario: ', intDiario);
console.log('Deuda diaria: ', deudaDiaria);
console.log('Interes total: ', intTotal);
console.log('Deuda total: ', deudaTotal);
console.log('Iva del saldo: ', ivaSaldo);
console.log('Total de Big Mac: ', totalBigMac);



let consult_1 = new Consulta();

let calcular = prompt('Ingrese OK para volver a calcular').toLocaleUpperCase();

let consult_2 = new Consulta();




consult_1.saveDatos();

consult_1.verDatos();

