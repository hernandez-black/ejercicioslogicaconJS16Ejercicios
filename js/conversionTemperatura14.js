function celsiusAFahrenheit(celsius) {
    // Fórmula de conversión: Fahrenheit = (Celsius * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const gradosCelsius = parseFloat(prompt("Ingrese los grados Celsius:"));
  
  if (!isNaN(gradosCelsius)) {
    const gradosFahrenheit = celsiusAFahrenheit(gradosCelsius);
    console.log(gradosCelsius + " grados Celsius equivalen a " + gradosFahrenheit + " grados Fahrenheit.");
  } else {
    console.log("Por favor, ingrese un número válido.");
  }