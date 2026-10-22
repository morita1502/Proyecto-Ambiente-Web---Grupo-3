document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("recuperarForm");
    const correo = document.getElementById("correo");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function (event){
        event.preventDefault();

        //Limpiar mensajes anteriores
        correo.classList.remove("is-invalid");
        mensajeConfirmacion.classList.add("d-none");
        mensajeError.classList.add("d-none");

        //Validar correo
        if (correo.value.trim() === "" || !correo.checkValidity()){
            correo.classList.add("is-invalid");
            mensajeError.textContent = "Por favor, ingrese un correo electrónico válido";
            mensajeError.classList.remove("d-none");

        }else{
            //Mostrar confirmacion
            mensajeConfirmacion.textContent = "Si el correo está registrado, recibira instrucciones para recuperar su contraseña";
            mensajeConfirmacion.classList.remove("d-none");
            correo.value = "";
        }
    });
});
