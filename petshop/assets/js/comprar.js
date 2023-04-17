/*function receta__boton(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")

}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    document.execCommand('copy');
    mensaje.value = "";
    copia.style.display = "none"
    mensaje.style.display = "none";
    document.getElementById("contenido__mensaje--informacion").style.display = "flex"; 
}*/
function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}