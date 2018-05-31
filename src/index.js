//import { encode } from "punycode";

//Declarando variable para el ingreso del texto
//let string = document.getElementById('input');

// Declarando variable para el offset nro de espacios
//let offset = parseInt(document.getElementById('offset'));


// Variables para ejecutar el botón Cifrar y Decifrar
const botonCipher = document.getElementById('botonC');
const botonDecipher = document.getElementById('botonD');

// Declarando la variable para mostrar los resultados
let showResults = document.getElementById('resultado');


// Función para el botón del resultado del encode
function resultCipher() {
    // Declarando la variable para mostrar los resultados
   // let showResults = document.getElementById('resultado');
    let string = document.getElementById('input').value;
    let offset = parseInt(document.getElementById('offset').value);
    showResults.innerHTML = ((cipher.createCipherWithOffset(offset)).encode(string));
}
botonCipher.addEventListener("click", resultCipher);

// Función para el botón del resultado del decode
function resultDecipher() {
    // Declarando la variable para mostrar los resultados
    //let showResults = document.getElementById('resultado');
    let string = document.getElementById('input').value;
    let offset = parseInt(document.getElementById('offset').value);
    showResults.innerHTML = ((cipher.createCipherWithOffset(offset)).decode(string));
}

// Escuchando el evento del Click para el cifrado y decifrado

botonDecipher.addEventListener("click", resultDecipher);