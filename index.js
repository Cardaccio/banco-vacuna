//Pasador de paginas

const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;
slide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateY(${translate}%)`),
    );
};

//calculador prestamo

let tipoCalc = 'prestamo';
let tipoTime = "dias"
let tiempo = 4;
let amount = 20000;
let interest = 10;
let tasaCalc=((interest / 12) / 30);
let iva = [1.21, 1.105, 1];
let bigMac = 1200;
let deudaTotal;
let intDiario;
let deudaDiaria;
let deudaIva;
let deudaMes;
let ivaSaldo;
let ivaInt;

deudaDiaria= (((amount*interest)/100)+amount*iva[0])/tiempo;
deudaMes = (((amount*interest)/100)+amount*iva[0])/tiempo;
ivaInt = ((amount*interest)/100)*iva[0];
deudaTotal=amount+ivaInt+ivaSaldo;
ivaSaldo = amount*iva;


let totalBigMac = deudaTotalInt/bigMac;

console.log(deudaTotal)

if (tipoCalc == 'prestamo') {
    if (tipoTime == 'dias') {
        deuda = tasaCalc * tiempo;

    } else if (tipoTime == 'meses') {
        deuda = (tasaCalc * 30) * tiempo;


    } else {
        alert('Te falta elegir el tipo de operacion a tomar')
    }

}

