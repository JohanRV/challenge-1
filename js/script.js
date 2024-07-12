//Valor del textArea de salida
const resultado = document.getElementById('ouput-text');

//Funcion captura de texto del textArea de entrada
function capturarTexto() {
    return document.getElementById('input-text').value;
}
//Funcion de comprobacion del texto
function verificarTexto() {
    // Captura el texto una vez
    const texto = capturarTexto();

    // Expresiones regulares
    const letrasMinusculas = /^[a-zñ]+$/;

    // Variables para verificar condiciones
    let cumpleMinuscula = letrasMinusculas.test(texto);

    // Verifica si cumple con todas las condiciones simultáneamente
    if (cumpleMinuscula) {
        console.log('El texto cumple');
        encriptarTexto();
        desencriptarTexto();
    } else {
        alert('El texto no cumple con todas las condiciones requeridas.');
    }
}



//Funcion de enviar el texto
function enviarTexto(texto) {
  return resultado.value = texto;
}
//funcion encriptar
function encriptarTexto() {
    let texto = capturarTexto();

    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('o', 'ober');
    texto = texto.replaceAll('u', 'ufat');

    return texto;
}

//funcion desencriptar
function desencriptarTexto() {
    let texto = capturarTexto();


    texto = texto.replaceAll('ufat', 'u');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('enter', 'e');
    texto = texto.replaceAll('ai', 'a');

    return texto;
}
//funcion del btn encriptar
function llamadaEncriptar() {
    verificarTexto();
    enviarTexto(encriptarTexto());
    
}
//funcion del btn desencriptar
function llamadaDsencriptar() {
    verificarTexto();
    enviarTexto(desencriptarTexto());
    
}
//funcion copiar texto
function copiarTexto() {
    if(resultado.value != '') {
        navigator.clipboard.writeText(resultado.value);
        alert('Contenido copiado al portapapeles');
    }else {
        console.log('Ocurrio un error inesperado');
    }
    
}