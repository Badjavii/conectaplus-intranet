/**
 * SISTEMA DE NAVEGACIÓN PARA INTRANET CONECTAPLUS
 * Controla la redirección entre áreas y mantiene estado activo
 */

document.addEventListener('DOMContentLoaded', function () {
    // Mapeo de áreas con sus URLs (ajusta según tu estructura de archivos)
    const areas = {
        'inicio': '../main/index-main.html',
        'atencion-cliente': '../customer-service/index-cs.html',
        'facturacion': '../billing/index-billing.html',
        'finanzas': '../finance/index-finance.html',
        'recursos-humanos': '../hr/index-hr.html',
        'capacitacion': '../training/index-training.html',
        'inteligencia-negocios': '../business-intelligence/index-bi.html',
        'mercadeo-ventas': '../marketing/index-marketing.html',
        'salida': '../logout/index.html'
    };

    // Configurar eventos de navegación
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.department-nav a');

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const areaId = this.getAttribute('data-area') ||
                    this.querySelector('span').textContent.toLowerCase().replace(/\s+/g, '-');

                redirectToArea(areaId);
            });
        });
    }

    // Redirigir a área específica
    function redirectToArea(areaId) {
        const targetUrl = areas[areaId];

        if (targetUrl) {
            // Verificar si estamos ya en esa área
            const currentPage = window.location.pathname.split('/').pop();
            const targetPage = targetUrl.split('/').pop();

            if (currentPage !== targetPage) {
                window.location.href = targetUrl;
            }
        } else {
            console.error(`Área no configurada: ${areaId}`);
        }
    }

    // Marcar área activa actual
    function setActiveArea() {
        const currentPage = window.location.pathname.split('/').pop();
        let activeArea = 'inicio'; // Por defecto

        // Buscar coincidencia con las áreas configuradas
        for (const [area, url] of Object.entries(areas)) {
            if (url.endsWith(currentPage)) {
                activeArea = area;
                break;
            }
        }

        // Aplicar clase active
        document.querySelectorAll('.department-nav li').forEach(li => {
            li.classList.remove('active');

            const link = li.querySelector('a');
            const linkArea = link.getAttribute('data-area') ||
                link.querySelector('span').textContent.toLowerCase().replace(/\s+/g, '-');

            if (linkArea === activeArea) {
                li.classList.add('active');
            }
        });
    }

    // Inicializar
    setupNavigation();
    setActiveArea();

    // Opcional: Exportar funciones para acceso global
    window.IntranetNavigation = {
        redirectToArea,
        setActiveArea
    };
});