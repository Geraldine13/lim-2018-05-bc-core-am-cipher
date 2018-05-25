//alert("Bienvenido a la app de Cifrado");

// Ingreso de usuario
//var name = prompt("Ingresa tu nombre");
//var userName = document.getElementById("user");
//userName.textContent = "Bienvenid@ " + name.toUpperCase();


// Declarando variable para el ingreso del texto
var phrase = prompt('Ingrese texto');
//document.getElementById('inputC').value;
//
//
//
phrase = phrase.toUpperCase();
console.log(phrase);

// Declarando variable para el offset nro de espacios
var spaces = parseInt(prompt('Indique el offset'));
    //document.getElementById('offset').value);
//
//




// Función para el cifrado
function cypher (phrase, spaces) {

 var answer = "";
 var initialASCII = 0;  // Código ASCII del texto ingresado
 var lastASCII = 0;     // Nuevo código ASCII 

// Ciclo para todo el texto ingresado
 for (var n = 0; n < phrase.length; n++) {

    if (phrase[n].charCodeAt() != 32) {

       initialASCII = phrase[n].charCodeAt();
       console.log(initialASCII);

       lastASCII = (initialASCII - 65 + spaces) % 26 + 65;
       console.log(lastASCII);

       var a = String.fromCharCode(lastASCII);
       console.log(a);

       answer = answer.concat(a);

    } else {

       answer = answer + " ";
    }
  }
  return answer;
}
document.getElementById('resultado').value = (cypher(phrase, spaces));

//var boton = document.getElementById('botonC');
//boton.addEventListener("click", result);

//function result() {
    
//}


