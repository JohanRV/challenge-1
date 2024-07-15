//Valor del textArea de salida
const resultado = document.getElementById('ouput-text');
//texto del textArea de entrada
const texto = document.getElementById('input-text');

//Botones
const btnEncriptar = document.getElementById('btn-encriptar');
btnEncriptar.addEventListener('click',llamadaEncriptar);

const btnDesencriptar = document.getElementById('btn-desencriptar');
btnDesencriptar.addEventListener('click',llamadaDesencriptar);

const btnCopiar = document.getElementById('btn-copiar');
btnCopiar.addEventListener('click',copiarTexto);


//Funcion captura de texto del textArea de entrada
function capturarTexto() {
    return document.getElementById('input-text').value;
}

//Funcion de comprobacion del texto
function verificarTexto() {
    const texto = capturarTexto();
    // Expresiones regulares
    const tieneCaracteresPermitidos = /^[a-zñ0-9\s]+$/;

    // Verifica si cumple con todas las condiciones simultáneamente
    if (tieneCaracteresPermitidos.test(texto)) {
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
    let resultado = '';
    let texto = capturarTexto();
    //objeto de las llaves de encriptacion
    const llavesEncriptadas = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    };
    //iteramos en el texto
    for (let letras of texto) {
        //Si existe un valor en la cadena que coincida con las llaves retornara la key del valor del objeto llavesEncriptadas
        if(llavesEncriptadas[letras]) {
            // asignamos el resultado si coincide
            resultado += llavesEncriptadas[letras];
        }else {
            // lo dejamos igual
            resultado += letras;
        }
    }

    return resultado;
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
    verificarTexto(capturarTexto());
    enviarTexto(encriptarTexto());
    mensaje(`${(texto.value == '')? 'Ningún mensaje fue encontrado' : 'Texto encriptado correctamente' }`);
    texto.value = '';
}
//funcion del btn desencriptar
function llamadaDesencriptar() {
    verificarTexto(capturarTexto());
    enviarTexto(desencriptarTexto());
    mensaje(`${(texto.value == '')? 'Ningún mensaje fue encontrado' : 'Texto desencriptado correctamente' }`);
    texto.value = '';
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
//funcion mensaje 
function mensaje (texto) {
    const mensaje = document.getElementById('mensaje-encontrado');
    mensaje.innerHTML = texto;
}