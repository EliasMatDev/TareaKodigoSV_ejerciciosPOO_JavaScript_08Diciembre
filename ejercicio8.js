/*Crear una Function para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si él
usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será
de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo él
descuento será del 15%. en JavaScript. */

function calcularDescuento(origen, destino) { // Función para calcular el descuento
    let descuento = 0;

    if (origen === "Palma" && destino === "La costa del Sol") { // Si el origen es Palma y el destino es La costa del Sol
        descuento = 0.05;
    } else if (destino === "Panchimalco") {
        descuento = 0.1;
    } else if (destino === "Puerto el Triunfo") {
        descuento = 0.15;
    }

    return descuento; // Retornar el descuento
}
//
function calcularPrecio(origen, destino, precio) { // Función para calcular el precio
    let descuento = calcularDescuento(origen, destino); // Llamada a la función calcularDescuento
    return precio - (precio * descuento); // Retornar el precio con el descuento
}
// Cálculo del descuento para un viaje de Palma a La Costa del Sol
console.log(calcularPrecio("Palma", "La costa del Sol", 1000));
console.log(calcularPrecio("Palma", "Panchimalco", 1000));
console.log(calcularPrecio("Palma", "Puerto el Triunfo", 1000));