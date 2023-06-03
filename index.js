function encriptar(){

    let texto = document.getElementById("texto").value
    let lowercase = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;

    

    if (lowercase.test(texto)){
    texto= texto.replace(/e/gi,"enter");
    texto= texto.replace(/i/gi,"imes");
    texto= texto.replace(/a/gi,"ai");
    texto= texto.replace(/o/gi, "ober");
    texto= texto.replace(/u/gi, "ufat");

    document.getElementById("esperando-mensaje").innerHTML = texto;
    document.getElementById("texto").value = "";

    let displayObjetos = document.getElementById("mensaje-encriptado")
    displayObjetos.style.display = "none"

    let copiarBoton = document.getElementById("btn-copiar")
    copiarBoton.style.display= "block"

    let imagen = document.getElementById("img-muñeco")
    imagen.style.display = "none"

    let cajaBlanca = document.getElementById("caja-encriptar");
    cajaBlanca.style.backgroundColor = "transparent"
} else {
    alert("Solo minúsculas y sin acentos")
}
}

var encriptarButon = document.getElementById("btn-encriptar")
encriptarButon.addEventListener("click",encriptar)

function desencriptar(){

    let texto = document.getElementById("texto").value
    let lowercase = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;

    

    if (lowercase.test(texto)){
    texto= texto.replace(/enter/gi,"e");
    texto= texto.replace(/imes/gi,"i");
    texto= texto.replace(/ai/gi,"a");
    texto= texto.replace(/ober/gi,"o");
    texto= texto.replace(/ufat/gi,"u");

    document.getElementById("esperando-mensaje").innerHTML = texto;
    document.getElementById("texto").value = "";

    let displayObjetos = document.getElementById("mensaje-encriptado")
    displayObjetos.style.display = "none"

    let copiarBoton = document.getElementById("btn-copiar")
    copiarBoton.style.display = "block"

    let imagen = document.getElementById("img-muñeco")
    imagen.style.display = "none"
    
    let cajaBlanca = document.getElementById("caja-encriptar");
    cajaBlanca.style.backgroundColor = "transparent"
} else {
    alert("Solo minúsculas y sin acentos")

}
}

var desencriptarButon = document.getElementById("btn-desencriptar")
desencriptarButon.addEventListener("click",desencriptar)

function copiar(){

    let copiarTexto = document.getElementById("esperando-mensaje").innerText
    navigator.clipboard.writeText(copiarTexto)
    document.getElementById("esperando-mensaje").textContent = " ";
}

var copiarButton = document.getElementById("btn-copiar");
copiarButton.addEventListener("click",copiar)
