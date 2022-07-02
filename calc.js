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

let consultas = [];
let datos_conslt = [];
let cant_conslt = 0;
let bigMac = 900;

//Captura de datos de consulta

let btnCalcular = document.getElementById("ejecCalc");

let tipoCalc;
let tipoTime;


let timeRadio = document.getElementsByName("tipo-time");
for (let opt of timeRadio) {
    opt.addEventListener("change", labelChange);
};

function labelChange(){
    let timeLabel = document.getElementById("timeLabel");
    if(document.getElementById("dias").checked){
        timeLabel.innerText = "Dias";
        tipoTime = "dias";
    } else if (document.getElementById("meses").checked){
        timeLabel.innerText = "Meses";
        tipoTime = "meses";
    }else{
        timeLabel.innerText = "Dias/ Meses";
    };
}


function cambioCalc() {
    let calculo = document.getElementById("calculo");
    if(document.getElementById("prestamo").checked){
        calculo.innerText = "Prestamo";
    }else if(document.getElementById("tarjeta").checked){
        calculo.innerText = "Tarjeta"
    }else{
        calculo.innerText = "Tarjeta/ Prestamo"
    }
    
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
    cambioCalc();

    let tiempo = parseInt( document.getElementById("time").value);
    let amount = parseFloat( document.getElementById("deuda").value);
    let interest = parseFloat( document.getElementById("interes").value);
    let selectIva = document.getElementById("iva");
    let iva = parseFloat(selectIva.value);
    let p_x= document.getElementById("x_p");
    let totInt = document.getElementById("totInt")
    let montoDeuda = document.getElementById("montoDeuda");
    let totBig = document.getElementById("totBig");
    let ivaDeudaInt = document.getElementById("ivaDeudaInt");
    let ivaDeuda = document.getElementById("ivaDeuda");
    let ivaChosen = document.getElementById("ivaChosen");
    let totDev = document.getElementById("totDev");

    if (tipoTime == 'dias') {
        let tasaCalc = ((interest / 12) / 30);
        intDiario = ((amount * tasaCalc) / 100);
        ivaInt = (intDiario * iva) /100;
        deudaDiaria = intDiario + ivaInt;
        intTotal = intDiario * tiempo;
        p_x.innerHTML = `Un total de <span>$ ${deudaDiaria.toFixed(2)}</span> pesos por dia.`


    } else if (tipoTime == 'meses') {
        let tasaCalc = (interest/ 12);
        intMes = ((amount * tasaCalc) / 100);
        ivaInt = (intMes * iva)/100;
        deudaMes = intMes + ivaInt;
        intTotal = intMes * tiempo;
        p_x.innerHTML = `Un total de <span>$ ${deudaMes.toFixed(2)}</span> pesos por mes.`

    } else {
        alert('Te falta elegir el tiempo que te vas a tomar')
    }

    ivaSaldo = (amount * iva) / 100;
    totalBigMac = (intTotal + ivaInt) / bigMac;
    deudaTotal = amount + ivaInt + ivaSaldo + intTotal;

    totDev.innerText = `$ ${deudaTotal.toFixed(2)}`
    totInt.innerText = `$ ${intTotal.toFixed(2)}`;
    montoDeuda.innerText = `$ ${amount}`;
    totBig.innerText = `${Math.floor(totalBigMac)}`;
    ivaDeudaInt.innerText = `$ ${ivaInt.toFixed(2)}`;
    ivaDeuda.innerText = `$ ${ivaSaldo.toFixed(2)}`;
    ivaChosen.innerText = `$ ${iva}%`;

    consultas.push(new Consulta);

};





class Consulta {
    constructor() {
        this.numero = cant_conslt + 1;
        cant_conslt++;
        this.date = new Date();

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