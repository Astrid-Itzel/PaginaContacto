document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const teléfono = document.getElementById('teléfono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;


    // Obtener referencias a los elementos de error
    const nombreError = document.getElementById('nombre');
    const apellidoError = document.getElementById('apellido');
    const emailError = document.getElementById('email');
    const teléfonoError = document.getElementById('teléfono');
    const asuntoError = document.getElementById('asunto');
    const mensajeError = document.getElementById('mensaje');

    // Limpiar los mensajes de error previos
    nombreError.textContent = '';
    apellidoError.textContent = '';
    emailError.textContent = '';
    teléfonoError.numberContent = '';
    asuntoError.textContent = '';
    mensajeError.textContent = '';

    // Variables para verificar si hay errores
    let isValid = true;

    // Validar el nombre
    if (nombre.trim() === '') {
        nombreError.textContent = 'El nombre es requerido.';
        isValid = false;
    }

    // Validar el nombre
    if (apellido.trim() === '') {
        apellidoError.textContent = 'El nombre es requerido.';
        isValid = false;
}

    // Validar el correo electrónico
    if (!validateEmail(email)) {
        emailError.textContent = 'Ingrese un correo electrónico válido.';
        isValid = false;
    }

    // Validar el teléfono
    if (teléfono.length < 8) {
        teléfonoError.numberContent = 'El teléfono debe tener al menos 8 dígitos.';
        isValid = false;
    }

    // Validar el Asunto
    if (asunto.length < 5) {
        asuntoError.textContent = 'El asunto debe ser más largo.';
        isValid = false;
    }

    // Validar el Asunto
    if (asunto.length < 10) {
        asuntoError.textContent = 'El mensaje debe ser más largo';
        isValid = false;
    }

    // Enviar el formulario si es válido
    if (isValid) {
        alert('Formulario enviado correctamente.');

        /*const formularioContacto=document.querySelector("#formularioContacto")
        formularioContacto.addEventListener('submit', handlesubmit)
    
        function handlesubmit(event) {
            event.preventDefault()
            const formularioContacto = new FormData(this)
        } */
    
        // Aquí puedes realizar el envío del formulario si es necesario
        // Por ejemplo, usando fetch() o XMLHttpRequest para enviar los datos a un servidor
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return regex.test(email);
}