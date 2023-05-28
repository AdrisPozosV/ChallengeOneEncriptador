const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/)

    if(validador || validador === 0){
        alert("Solo son permitidas letras minisculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = block;
    }
}