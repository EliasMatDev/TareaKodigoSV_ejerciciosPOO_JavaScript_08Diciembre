//* Ejercicio #1 *//

/* Crear una función con un parámetro llamado edad que permita calcular si una persona es mayor de
edad o no. Utilizar para la condición el operador ternario. */

function mayorEdad(edad) { // creamos la función con un parámetro
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad"; // utilizamos el operador ternario
}

console.log(mayorEdad(18)); // probamos la función
console.log(mayorEdad(15));
console.log(mayorEdad(25));