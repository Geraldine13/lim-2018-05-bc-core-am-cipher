alert("Bienvenido a la app de Cifrado");

// Ingreso de usuario
var name = prompt("Ingresa tu nombre");
var userName = document.getElementById("user");
userName.textContent = "Bienvenid@ " + name.toUpperCase();


// Declarando variable para el ingreso del texto
var phrase = document.getElementById('input').value;

//Convirtiendo a mayúsculas el texto ingresado
phrase = phrase.toUpperCase();
console.log(phrase);

// Declarando variable para el offset nro de espacios
var spaces = parseInt(document.getElementById('offset').value);

// Función para el cifrado
function cipher (phrase, spaces) {

    var answer = "";       // Variable para la respuesta
    var initialASCII = 0;  // Código ASCII del texto ingresado
    var lastASCII = 0;     // Nuevo código ASCII 
   
   // Ciclo para todo el texto ingresado
    for (var n = 0; n < phrase.length; n++) {
   
       if (phrase[n].charCodeAt() != 32) {
   
          initialASCII = phrase[n].charCodeAt();
          lastASCII = (initialASCII - 65 + spaces) % 26 + 65;
          var a = String.fromCharCode(lastASCII);
          answer = answer.concat(a);
   
       } else {
   
          answer = answer + " ";
       }
    }
     return answer;
}

// Variable y función para ejecutar el botón Cifrar
var botonCipher = document.getElementById('botonC');

// Declarando la variable para mostrar los resultados
var showResults = document.getElementById('resultado');

function resultCipher() {
    var phrase = document.getElementById('input').value;
    var spaces = parseInt(document.getElementById('offset').value);
    //boton = alert('Boton funciona');
    showResults.innerHTML = (cipher(phrase, spaces));
}
botonCipher.addEventListener("click", resultCipher);


// Función para descifrar
function decipher (phrase, spaces) {

    var answer = "";
    var antASCII = 0;  // Código ASCII del texto ingresado
    var initialASCII = 0;     // Nuevo código ASCII 
   
   // Ciclo para todo el texto ingresado
    for (var n = 0; n < phrase.length; n++) {
   
       if (phrase[n].charCodeAt() != 32) {
   
          antASCII = phrase[n].charCodeAt();
          initialASCII = (antASCII - 90 - spaces) % 26 + 90;
          var a = String.fromCharCode(initialASCII);
          answer = answer.concat(a);
   
       } else {
   
          answer = answer + " ";
       }
    }
     return answer;
}

// Variable y función para ejecutar el botón Cifrar
var botonDecipher = document.getElementById('botonD');

function resultDecipher() {
    var phrase = document.getElementById('input').value;
    var spaces = parseInt(document.getElementById('offset').value);
    //boton = alert('Boton funciona');
    showResults.innerHTML = (decipher(phrase, spaces));
}
botonDecipher.addEventListener("click", resultDecipher);