document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = 'Cédula o contraseña incorrectos';
    loginForm.appendChild(errorMessage);

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener valores del formulario
        const cedula = document.getElementById('cedula').value;
        const password = document.getElementById('password').value;

        // Credenciales por defecto
        const defaultCedula = '1234';
        const defaultPassword = 'password';

        // Validar credenciales
        if (cedula === defaultCedula && password === defaultPassword) {
            // Redirigir a la página principal
            window.location.href = '../D02-main-screen/index-main.html';
        } else {
            // Mostrar mensaje de error
            errorMessage.style.display = 'block';

            // Limpiar campos
            document.getElementById('password').value = '';

            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    });

    // Opcional: Validar cédula solo números
    document.getElementById('cedula').addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});