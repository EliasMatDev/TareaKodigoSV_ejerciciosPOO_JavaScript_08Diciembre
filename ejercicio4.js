
const nombre = "Pepito Perez";
const salario = 1000;
const categoria = "A";
let aumento;

if (categoria === "A") {
aumento = salario * 0.15;
} else if (categoria === "B") {
aumento = salario * 0.3;
} else if (categoria === "C") {
aumento = salario * 0.1;
} else if (categoria === "D") {
aumento = salario * 0.2;
}

console.log(`El empleado: ${nombre}.\ntiene un salario de: $${salario} dolares. \nSu categoría es: "${categoria}"\nPor lo que su aumento es de: $${aumento} y su nuevo salario es de: $${salario + aumento} dolares.`);