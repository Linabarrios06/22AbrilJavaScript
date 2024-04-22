// Obtener referencia al contenedor de contraseñas y al botón de generación
const contrasenaContainer = document.getElementById("contrasenaContainer");
const generarBtn = document.getElementById("generarBtn");

// Función para generar una contraseña aleatoria
function generarContrasena(longitud) {
  // Caracteres permitidos para la contraseña
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
    // Seleccionar un carácter aleatorio de la lista de caracteres permitidos
    const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    // Concatenar el carácter aleatorio a la contraseña
    contrasena += caracterAleatorio;
    }
    return contrasena;
}

// Función para manejar el evento de clic en el botón de generación
function generarNuevaContrasena() {
  // Longitud predeterminada de la contraseña
    const longitud = 12;
  // Generar la contraseña
    const nuevaContrasena = generarContrasena(longitud);
  // Mostrar la contraseña generada en el contenedor
    contrasenaContainer.textContent = nuevaContrasena;
}

// Agregar evento de clic al botón de generación
generarBtn.addEventListener("click", generarNuevaContrasena);

// Generar y mostrar una contraseña inicial al cargar la página
generarNuevaContrasena();
