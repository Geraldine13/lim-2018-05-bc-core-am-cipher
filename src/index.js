/* Declarando variable para el ingreso del texto
let string = document.getElementById('input');

// Declarando variable para el offset nro de espacios
let offset = parseInt(document.getElementById('offset'));
*/

// Variables para ejecutar el botón Cifrar y Decifrar
const botonCipher = document.getElementById('botonC');
const botonDecipher = document.getElementById('botonD');

// Declarando la variable para mostrar los resultados
//const showResults = document.getElementById('resultado');

// Escuchando el evento del Click para el cifrado y decifrado
botonCipher.addEventListener("click", cipher.resultCipher);
botonDecipher.addEventListener("click", cipher.resultDecipher);