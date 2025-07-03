document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.billing-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Búsqueda simulada. Resultados cargados.");
    });
});
