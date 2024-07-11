//Valor del textArea de salida
const resultado = document.getElementById('ouput-text');
const array = [];
//Funcion captura de texto del textArea de entrada
function capturarTexto() {
    return document.getElementById('input-text').value;
}
//Funcion de comprobacion del texto
function verificarTexto() {
    // Captura el texto una vez
    const texto = capturarTexto();

    // Expresiones regulares
    const letrasMayusculas = /[A-Z]/;
    const letrasAcentuadas = /[áéíóúÁÉÍÓÚüÜ]/;
    const letrasCaracteresEspeciales = /[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

    // Variables para verificar condiciones
    let cumpleMayuscula = letrasMayusculas.test(texto);
    let cumpleAcentuada = letrasAcentuadas.test(texto);
    let cumpleEspecial = letrasCaracteresEspeciales.test(texto);

    // Verifica si cumple con todas las condiciones simultáneamente
    if (cumpleMayuscula && cumpleAcentuada && cumpleEspecial) {
        console.log('El texto cumple con al menos una letra mayúscula, una letra acentuada y un caracter especial.');
    } else {
        console.log('El texto no cumple con todas las condiciones requeridas.');
    }
}



//Funcion de enviar el texto
function enviarTexto(texto) {
  return resultado.value = capturarTexto();
}

function encriptar() {
    verificarTexto();
    enviarTexto();
    
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/