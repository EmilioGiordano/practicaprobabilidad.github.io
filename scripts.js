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
    
    // Verifica si la respuesta existe
    imgRespuesta.onload = function() {
        imgRespuesta.dataset.hasResponse = "true";
    };
    imgRespuesta.onerror = function() {
        imgRespuesta.dataset.hasResponse = "false";
    };
}
function mostrarRespuesta() {
    var imgRespuesta = document.getElementById("capturaRespuesta");
    if (imgRespuesta.dataset.hasResponse === "true") {
        imgRespuesta.style.visibility = "visible";
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Sin respuesta disponible',
            text: 'No hay respuesta disponible para este ejercicio.',
            confirmButtonText: 'Entendido'
        });
    }

}
document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload();
});