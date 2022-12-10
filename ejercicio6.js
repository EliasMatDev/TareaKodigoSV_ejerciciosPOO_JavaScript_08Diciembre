/* Realizar una fuction para una tienda de coches en donde se deberá calcular: Si el coche a la venta es
un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD
FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Deberá de
usar un parámetro que permita identificar el tipo de coche y la fuction deberá demostrar el coche
seleccionado. */

function descuento(coche) {
    switch (coche) {
        case "FordFiesta":
            return "El descuento es del 5% para el modelo: " + coche + "";
        case "FordFocus":
            return "El descuento es del 10% para el modelo: " + coche + "";
        case "FordEscape":
            return "El descuento es del 20% para el modelo: " + coche + "";
        default:
            return "No hay descuento para el modelo: " + coche + "";
    }
}

console.log(descuento("FordFiesta"));
console.log(descuento("FordFocus"));
console.log(descuento("FordEscape"));
console.log(descuento("FordEverest"));
