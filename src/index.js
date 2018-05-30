//alert("Bienvenido a la app de Cifrado");

/* Ingreso de usuario
var name = prompt("Ingresa tu nombre");
var userName = document.getElementById("user");
userName.textContent = "Bienvenid@ " + name.toUpperCase();
*/

// Declarando variable para el ingreso del texto
var string = document.getElementById('input').value;

//Convirtiendo a mayúsculas el texto ingresado
string = string.toUpperCase();
console.log(string);

// Declarando variable para el offset nro de espacios
var offset = parseInt(document.getElementById('offset').value);

// Variables para ejecutar el botón Cifrar y Decifrar
var botonCipher = document.getElementById('botonC');
var botonDecipher = document.getElementById('botonD');

// Declarando la variable para mostrar los resultados
var showResults = document.getElementById('resultado');

// Escuchando el evento del Click para el cifrado y decifrado
botonCipher.addEventListener("click", cipher.resultCipher);
botonDecipher.addEventListener("click", cipher.resultDecipher);