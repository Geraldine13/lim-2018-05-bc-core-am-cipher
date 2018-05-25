alert("Bienvenido a la app de Cifrado");

// Ingreso de usuario
var name = prompt("Ingresa tu nombre");
var userName = document.getElementById("user");
userName.textContent = "Bienvenid@ " + name.toUpperCase();


// Declarando variable para el ingreso del texto
var phrase = document.getElementById('inputC').value;

phrase = phrase.toUpperCase();
console.log(phrase);

// Declarando variable para el offset nro de espacios
var spaces = parseInt(document.getElementById('offsetC').value);

// Función para el cifrado
function cypher (phrase, spaces) {

    var answer = "";
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
var boton = document.getElementById('botonC');

function result() {
    var phrase = document.getElementById('inputC').value;
    var spaces = parseInt(document.getElementById('offsetC').value);
    //boton = alert('Boton funciona');
    document.getElementById('resultadoC').value = (cypher(phrase, spaces));
}

boton.addEventListener("click", result);

