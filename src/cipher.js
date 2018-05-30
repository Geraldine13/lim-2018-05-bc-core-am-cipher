window.cipher = {

// Función para el cifrado
encode : (offset, string) => {

          var answer = "";       // Variable para la respuesta
          var initialASCII = 0;  // Código ASCII del texto ingresado
          var lastASCII = 0;     // Nuevo código ASCII 
 
          // Ciclo para todo el texto ingresado
          for (var n = 0; n < string.length; n++) {
 
            if (string[n].charCodeAt() != 32) {
 
              initialASCII = string[n].charCodeAt();
              lastASCII = (initialASCII - 65 + offset) % 26 + 65;
              var a = String.fromCharCode(lastASCII);
              answer = answer.concat(a);
 
            } else {
 
              answer = answer + " ";
            }
          }
            return answer;
        },


// Función para descifrar
decode : (offset, string) => {

          var answer = "";
          var antASCII = 0;       // Código ASCII del texto ingresado a convertir
          var initialASCII = 0;   // Nuevo código ASCII 
 
          // Ciclo para todo el texto ingresado
          for (var n = 0; n < string.length; n++) {
 
            if (string[n].charCodeAt() != 32) {
 
              antASCII = string[n].charCodeAt();
              initialASCII = (antASCII - 90 - offset) % 26 + 90;
              var a = String.fromCharCode(initialASCII);
              answer = answer.concat(a);
 
            } else {
 
              answer = answer + " ";
            }
          }
            return answer;
        },

// Función para el botón del resultado del encode
resultCipher : () => {
          var string = document.getElementById('input').value;
          var offset = parseInt(document.getElementById('offset').value);
          showResults.innerHTML = (cipher.encode(offset, string));
  },

// Función para el botón del resultado del decode
resultDecipher : () => {
    var string = document.getElementById('input').value;
    var offset = parseInt(document.getElementById('offset').value);
    showResults.innerHTML = (cipher.decode(offset, string));
  },
        






}

