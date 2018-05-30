window.cipher = {

// Función para el cifrado
encode : (offset, string) => {

          let answer = "";       // Variable para la respuesta
          let initialASCII = 0;  // Código ASCII del texto ingresado
          let lastASCII = 0;     // Nuevo código ASCII 
          string = string.toUpperCase();
          // Ciclo para todo el texto ingresado
          for (let n = 0; n < string.length; n++) {
 
            if (string[n].charCodeAt() != 32) {
 
              initialASCII = string[n].charCodeAt();
              lastASCII = (initialASCII - 65 + offset) % 26 + 65;
              let a = String.fromCharCode(lastASCII);
              answer = answer.concat(a);
 
            } else {
 
              answer = answer + " ";
            }
          }
            return answer;
        },


// Función para descifrar
decode : (offset, string) => {

          let answer = "";
          let antASCII = 0;       // Código ASCII del texto ingresado a convertir
          let initialASCII = 0;   // Nuevo código ASCII 
          string = string.toUpperCase();
          // Ciclo para todo el texto ingresado
          for (let n = 0; n < string.length; n++) {
 
            if (string[n].charCodeAt() != 32) {
 
              antASCII = string[n].charCodeAt();
              initialASCII = (antASCII - 90 - offset) % 26 + 90;
              let a = String.fromCharCode(initialASCII);
              answer = answer.concat(a);
 
            } else {
 
              answer = answer + " ";
            }
          }
            return answer;
        },


// Función para el botón del resultado del encode
resultCipher : () => {
          // Declarando la variable para mostrar los resultados
          let showResults = document.getElementById('resultado');
          let string = document.getElementById('input').value;
          let offset = parseInt(document.getElementById('offset').value);
          showResults.innerHTML = (cipher.encode(offset, string));
  },

// Función para el botón del resultado del decode
resultDecipher : () => {
          // Declarando la variable para mostrar los resultados
          let showResults = document.getElementById('resultado');
          let string = document.getElementById('input').value;
          let offset = parseInt(document.getElementById('offset').value);
          showResults.innerHTML = (cipher.decode(offset, string));
  },
        






}

