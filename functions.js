// Capturamos los elementos del HTML.
const numeroInput = document.getElementById("numeroInput");
const agregarNumeroButton = document.getElementById("agregarNumero");
const valoresIngresadosElement = document.getElementById("valoresIngresados");
const sumaElement = document.getElementById("suma");
const restaElement = document.getElementById("resta");
const multiplicacionElement = document.getElementById("multiplicacion");
const divisionElement = document.getElementById("division");

// Array para almacenar los números ingresados.
let numeros = [];

// Evento al hacer clic en el botón "Agregar".
agregarNumeroButton.addEventListener("click", function () {
    // Obtenemos el valor del input.
    const valor = parseFloat(numeroInput.value);

    // Verificamos si la entrada es un número válido.
    if (isNaN(valor)) {
        alert("Ingrese un número válido.");
        return;
    }

    // Agregamos el número al array.
    numeros.push(valor);

    // Mostramos los valores ingresados en el HTML.
    valoresIngresadosElement.textContent = `Valores ingresados: ${numeros.join(', ')}`;
    numeroInput.value = ""; // Limpiamos el input.

    // Calculamos y mostramos los resultados.
    calcularResultados();
});

// Función para calcular y mostrar los resultados.
function calcularResultados() {
    if (numeros.length === 0) {
        return;
    }

    const suma = numeros.reduce((a, b) => a + b);
    const resta = numeros.reduce((a, b) => a - b);
    const multiplicacion = numeros.reduce((a, b) => a * b);
    const division = numeros.reduce((a, b) => a / b);

    sumaElement.textContent = `Suma: ${suma}`;
    restaElement.textContent = `Resta: ${resta}`;
    multiplicacionElement.textContent = `Multiplicación: ${multiplicacion}`;
    divisionElement.textContent = `División: ${division}`;
}