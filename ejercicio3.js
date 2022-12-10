//* Ejercicio #3 *//

/* Determinar la nota final de un alumno, la cual depende de lo siguiente: Examen =20% , tareas 40%,
asistencia =10% e investigación =30% , al final deberá mostrar los datos del alumno , nombre , carnet
y nota final. Para este ejercicio deberá de utilizar una fuction y asignar parámetros para llenar los
valores. */

function notaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let nota = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    return `Nombre: ${nombre} Carnet: ${carnet} Nota final: ${nota}`;
}

console.log(notaFinal("Aniceto", "010101010", 10, 10, 10, 10));
console.log(notaFinal("Oscar", "11111111", 5, 5, 5, 5));
console.log(notaFinal("Lemus", "22222222", 8, 8, 8, 8));
