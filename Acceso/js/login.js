const formulario = document.getElementById("loginForm");
const contrasena = document.getElementById("contrasena");
const botonMostrar = document.getElementById("mostrarContrasena");

//Mostrar u ocultar la contraseña

document.addEventListener("DOMContentLoaded", function (){
    const contrasena = document.getElementById("contrasena");
    const boton = document.getElementById("mostrarContrasena");

    boton.addEventListener("click", function (){
        if (contrasena.type === "password"){
            contrasena.type = "text";
            boton.textContent = "Ocultar";
        }else{
            contrasena.type = "password";
            boton.textContent = "Mostrar";
        }

    });
});
