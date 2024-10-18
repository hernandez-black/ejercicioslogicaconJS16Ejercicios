let palindromo=(prompt("ingresa tu palabra:"));

function esPalindromo(palabra) {
    const palabraLimpia = palabra.toLowerCase().replace(/\s/g, '');

    const palabraInvertida = palabraLimpia.split('').reverse().join('');

    return palabraLimpia === palabraInvertida;
  }

if (esPalindromo(palindromo)) {
    console.log ("la palabra" + palindromo + "es un palindromo");
}else {
    console.log("la palabra" + palindromo + "no es un palindromo");
}