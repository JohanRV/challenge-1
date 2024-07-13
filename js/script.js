//Valor del textArea de salida
const resultado = document.getElementById('ouput-text');
//texto del textArea de entrada
const texto = document.getElementById('input-text');

//Botones
const btnEncriptar = document.getElementById('btn-encriptar');
btnEncriptar.addEventListener('click',llamadaEncriptar);

const btnDesencriptar = document.getElementById('btn-desencriptar');
btnDesencriptar.addEventListener('click',llamadaDesencriptar);

//Funcion captura de texto del textArea de entrada
function capturarTexto() {
    return document.getElementById('input-text').value;
}

//Funcion de comprobacion del texto
function verificarTexto() {
    const texto = capturarTexto();
    // Expresiones regulares
    const letrasMinusculas = /^[a-zñ]+$/;

    // Variables para verificar condiciones
    let cumpleMinuscula = letrasMinusculas.test(texto);

    // Verifica si cumple con todas las condiciones simultáneamente
    if (cumpleMinuscula) {
        console.log('El texto cumple');
        encriptarTexto(texto);
        desencriptarTexto(texto);
    } 
    else {
        if(texto == '') {
            alert('El campo no puede estar vacio por favor ingrese su texto');
            borrarTexto();
        }
        else {
            alert('El texto no cumple con todas las condiciones requeridas.');
            borrarTexto();
        }

    }
}

//limpiar los textAreas
function borrarTexto() {
    resultado.value = '';
    texto.value = '';
}

//Funcion de enviar el texto
function enviarTexto(texto) {
  return resultado.value = texto;
}
//funcion encriptar
function encriptarTexto() {
    let texto = capturarTexto();

    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');

    return texto;
}

//funcion desencriptar
function desencriptarTexto() {
    let texto = capturarTexto();
    
    texto = texto.replace(/ufat/g, 'u');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/ai/g, 'a');

    return texto;
}
//funcion del btn encriptar
function llamadaEncriptar() {
    
    verificarTexto(capturarTexto());
    enviarTexto(encriptarTexto());
    texto.value = '';
    mensaje();
}
//funcion del btn desencriptar
function llamadaDesencriptar() {
    verificarTexto(capturarTexto());
    enviarTexto(desencriptarTexto());
    texto.value = '';
    mensaje();
}
//funcion copiar texto
function copiarTexto() {
    if(resultado.value != '') {
        navigator.clipboard.writeText(resultado.value);
        alert('Contenido copiado al portapapeles, limpiando campos');
        borrarTexto();
    }else {
        console.log('Ocurrio un error inesperado');
    }
    
}

function mensaje () {
    const mensaje = document.getElementById('mensaje-encontrado');

    mensaje.innerHTML = 'Mensaje procesado correctamente';
}