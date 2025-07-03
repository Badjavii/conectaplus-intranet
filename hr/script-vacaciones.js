document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.vacation-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Solicitud enviada correctamente (simulado)');
        form.reset();
    });
});
