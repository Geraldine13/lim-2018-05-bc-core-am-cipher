// Variables para ejecutar el botón Cifrar y Decifrar
const botonCipher = document.getElementById('botonC');
const botonDecipher = document.getElementById('botonD');

// Declarando la variable para mostrar los resultados
let showResults = document.getElementById('resultado');

// Función para el botón del resultado del encode
function resultCipher() {
    
    let string = document.getElementById('input').value;
    let offset = parseInt(document.getElementById('offset').value);
    showResults.innerHTML = ((cipher.createCipherWithOffset(offset)).encode(string));
};

botonCipher.addEventListener("click", resultCipher);

// Función para el botón del resultado del decode
function resultDecipher() {
    
    let string = document.getElementById('input').value;
    let offset = parseInt(document.getElementById('offset').value);
    showResults.innerHTML = ((cipher.createCipherWithOffset(offset)).decode(string));
};

botonDecipher.addEventListener("click", resultDecipher);