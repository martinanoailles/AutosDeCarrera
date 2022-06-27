//•En una prueba, un piloto tiene que completar 4 vueltas
//Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
let primerVuelta: number = Number(
  prompt("Ingrese el tiempo de la 1er vuelta:")
);
let segundaVuelta: number = Number(
  prompt("Ingrese el tiempo de la 2da vuelta:")
);
let tercerVuelta: number = Number(
  prompt("Ingrese el tiempo de la 3er vuelta:")
);
let cuartaVuelta: number = Number(
  prompt("Ingrese el tiempo de la 4ta vuelta:")
);

//•El programa debe retornar el tiempo total y el promedio de vuelta
let tiempoTotal: number =
  primerVuelta + segundaVuelta + tercerVuelta + cuartaVuelta;
let promedioDeVuelta: number = tiempoTotal / 4;

console.log("El tiempo total es:", tiempoTotal);
console.log("El promedio de vuelta es:", promedioDeVuelta);
