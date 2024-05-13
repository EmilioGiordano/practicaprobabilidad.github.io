document.addEventListener("DOMContentLoaded", function() {
    mostrarEnunciado();
});

function mostrarEnunciado() {
    var n = Math.floor(Math.random() * 47) + 1; 
    var imgEnunciado = document.getElementById("capturaEnunciado");
    var imgRespuesta = document.getElementById("capturaRespuesta");
    imgEnunciado.src = "img/Captura_" + n + "_00.PNG";
    imgRespuesta.src = "img/Captura_" + n + "_01.PNG";
    imgRespuesta.style.visibility = "hidden"; 
}


function mostrarRespuesta(atributo) {
    var imgRespuesta = document.getElementById("capturaRespuesta");
    imgRespuesta.style.visibility = atributo;
  }