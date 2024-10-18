let numeroPN=parseFloat(prompt("ingresa tu numero: "));

if (!isNaN(numeroPN)) {
    if (numeroPN % 2 ===0) {
    console.log("este numero" + numeroPN + "es par");
  }else {
    console.log("este numero " + numeroPN + "es impar");
  }
}