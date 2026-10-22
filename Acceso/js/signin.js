document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("registroForm");
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    const confirmar = document.getElementById("confirmarContrasena");
    const mensaje = document.getElementById("mensajeRegistro");

    //Mostrar u ocultar la contraseña
    const botonMostrar = document.getElementById("mostrarContrasena");
    botonMostrar.addEventListener("click", function(){
        if (contrasena.type === "password"){
            contrasena.type = "text";
            botonMostrar.textContent = "Ocultar";
        }else{
            contrasena.type = "password";
            botonMostrar.textContent = "Mostrar";
        }

    });

    //Mostrar u ocultar la confirmacion
    const botonConfirmar = document.getElementById("mostrarConfirmacion");
    botonConfirmar.addEventListener("click", function(){
        if (confirmar.type === "password"){
            confirmar.type = "text";
            botonConfirmar.textContent = "Ocultar";
        }else{
            confirmar.type = "password";
            botonConfirmar.textContent = "Mostrar";
        }
    });

    //Validar el formulario
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        // Limpiar errores anteriores
        const campos = formulario.querySelectorAll("input, select");

        campos.forEach(function(campo){
            campo.classList.remove("is-invalid");
        });

        mensaje.classList.add("d-none");
        mensaje.classList.remove("alert-success", "alert-danger");

        let formularioValido = true;

        //Validar campos obligatorios
        campos.forEach(function(campo){

            if (campo.value.trim() === ""){
                campo.classList.add("is-invalid");
                formularioValido = false;
            }

        });

        //Validar formato del correo
        if (correo.value.trim() !== "" && !correo.checkValidity()){
            correo.classList.add("is-invalid");
            formularioValido = false;
        }

        //Validar confirmacion de contraseña
        if (confirmar.value !== contrasena.value){
            confirmar.classList.add("is-invalid");
            formularioValido = false;
        }

        //Mostrar errores o mensaje final
        if (!formularioValido){
            mensaje.textContent = "Revisa los campos señalados y corrige los errores";
            mensaje.classList.add("alert-danger");
            mensaje.classList.remove("d-none");

        }else{
            mensaje.textContent = "¡Validación exitosa! Los datos están completos y son válidos";
            mensaje.classList.add("alert-success");
            mensaje.classList.remove("d-none");
        }
    });
});
