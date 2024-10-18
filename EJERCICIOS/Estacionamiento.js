let horasEstacionamiento=parseFloat(prompt("ingresa las minutos que vas a ocupoar el estacionamiento :"));
let costo=0;

const horas= Math.floor(horasEstacionamiento / 60);
const minutosrest = horasEstacionamiento % 60;

console.log("estuviste" + horas + "horas" + minutosrest + "minutos");

function CalcularCosto(minutos) {
    if(minutos <=30) {
        costo=0;
    }else if (minutos < 120) {
        costo= Math.ceil(minutos/60) * 10
    }else if (minutos <=180) {
        costo=25
    }else {
        costo=30
    }

    return "el costo del estacionanieno es" + costo + "pesos";
}

const resultado= CalcularCosto (horasEstacionamiento);
console.log(resultado);