// Creamos un array para almacenar los valores ingresados por el usuario.
let numeros = [];

// Creamos un bucle para capturar entradas dinámicamente.
while (true) {
    let entrada = prompt("Ingrese un número o escriba 'fin' para detenerse:");

    // Verificamos si el usuario quiere detenerse.
    if (entrada === 'fin' || entrada === null) {
        break;
    }

    // Convertimos la entrada a un número de punto flotante y la agregamos al array.
    let numero = parseFloat(entrada);

    // Verificamos si la conversión fue exitosa antes de agregarlo al array.
    if (!isNaN(numero)) {
        numeros.push(numero);
    } else {
        alert("Entrada inválida. Por favor, ingrese un número válido.");
    }
}

// Realizamos las operaciones con los valores almacenados en el array.
if (numeros.length === 0) {
    alert("No se ingresaron números.");
} else {
    let suma = numeros.reduce((a, b) => a + b);
    let resta = numeros.reduce((a, b) => a - b);
    let multiplicacion = numeros.reduce((a, b) => a * b);
    let division = numeros.reduce((a, b) => a / b);

    console.log("Valores ingresados: " + numeros.join(', '));
    console.log("Suma: " + suma);
    console.log("Resta: " + resta);
    console.log("Multiplicación: " + multiplicacion);
    console.log("División: " + division);
}