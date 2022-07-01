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


let users = [];

function Registrarse() {
    let userName = document.getElementById("userName");
    let userMail = document.getElementById("userMail");
    let userAge = document.getElementById("userAge");

    let mensaje = document.getElementById("mensaje");
    let divReg = document.getElementById("registro");

    if (users.includes(userMail.value)) {

        mensaje.innerText = "Ya estas registrad@!";
        divReg.className = "registro-ok";

    } else {
        users.push(new Usuario(userName.value, userMail.value, userAge.value))
        mensaje.innerText = "Muchas gracias por registrarte!";
        divReg.className = "registro-ok";


    }

};

//Registro de consultas

let datos_conslt = [];
let cant_conslt = 0;
let bigMac = 900;

//Captura de datos de consulta

let btnCalcular = document.getElementById("ejecCalc");

let tipoCalc;
let tipoTime;


//let timeRadio = document.getElementsByName("tipo-time");

if(document.getElementById("dias").checked==true){
    tipoTime = "dias";
    labelChange();
}else if (document.getElementById("meses").checked==true){
    tipoTime = "meses";
    labelChange();
};
/*
for (let opt of timeRadio) {
    opt.addEventListener("change", function (e) {
        tipoTime = e.target.value;
        return tipoTime;
        console.log(tipoTime);
    });
};
tipoTime = document.getElementsByName("tipo-time").value;
*/
console.log(tipoTime);

function labelChange(){
    let timeLabel = document.getElementById("timeLabel");
    if(document.getElementById("dias").checked==true){
        timeLabel.innerText = "Meses";
    } else if (document.getElementById("meses").checked==true){
        timeLabel.innerText = "Dias";
    }else{
        timeLabel.innerText = "Dias/ Meses";
    }
    ;
    console.log(tipoTime);
}



btnCalcular.addEventListener("click", calcularInt);

let intDiario;
let intMes;
let deudaDiaria;
let deudaMes;
let ivaSaldo;
let ivaInt;
let intTotal;
let totalBigMac;
let deudaTotal;

function calcularInt(e) {

    e.preventDefault();



    let tiempo = parseInt( document.getElementById("time").value);
    let amount = parseFloat( document.getElementById("deuda").value);
    let interest = parseFloat( document.getElementById("interes").value);
    let selectIva = document.getElementById("iva");
    let iva = parseFloat(selectIva.options[selectIva.selectedIdex].value);

    if (tipoTime == 'dias') {
        let tasaCalc = ((interest / 12) / 30);
        intDiario = ((amount * tasaCalc) / 100);
        ivaInt = intDiario * iva;
        deudaDiaria = intDiario + ivaInt;
        intTotal = intDiario * tiempo;


    } else if (tipoTime == 'meses') {
        let tasaCalc = (interest/ 12);
        intMes = ((amount * tasaCalc) / 100);
        deudaDiaria = deudaMes / 30;
        ivaInt = intMes * iva;
        deudaMes = intMes + ivaInt;
        intTotal = intMes * tiempo;

    } else {
        alert('Te falta elegir el tiempo que te vas a tomar')
    }

    ivaSaldo = (amount.value * iva) / 100;
    totalBigMac = (intTotal + ivaInt) / bigMac;
    deudaTotal = amount + ivaInt + ivaSaldo + intTotal;

};





class Consulta {
    constructor() {
        this.numero = cant_conslt + 1;
        cant_conslt++;
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