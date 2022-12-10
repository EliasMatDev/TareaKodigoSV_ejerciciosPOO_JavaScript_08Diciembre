/* Crear una fuction que calcule la edad de una persona en base a su año de nacimiento y fecha actual
podrá hacer uso de métodos JavaScript (DATE,getDate,getFullYear)para realizar el cálculo. */
function edad(fechaNacimiento) {
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let anioNacimiento = fechaNacimiento.getFullYear();
    return anioActual - anioNacimiento;
}
console.log(edad(new Date(1990, 11, 17)));
console.log(edad(new Date(1995, 11, 17)));