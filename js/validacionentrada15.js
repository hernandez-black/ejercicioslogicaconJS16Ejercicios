let numeroIngresado = prompt("Ingrese un número:");

let numero = parseFloat(numeroIngresado);

if (isNaN(numero)) {
  console.log("Error: El valor ingresado no es un número válido.");
} else {
  console.log("El número ingresado es:", numero);
}