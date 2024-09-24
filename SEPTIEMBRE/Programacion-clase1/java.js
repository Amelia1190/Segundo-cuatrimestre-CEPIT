document.addEventListener('DOMContentLoaded', () => {
    // Función para realizar el desplazamiento suave
    function scrollToElement(targetElement, callback) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Ejecutar el callback después de un pequeño retraso para asegurar que el desplazamiento haya terminado
        setTimeout(() => {
            if (typeof callback === 'function') {
                callback();
            }
        }, 600); // Ajusta este tiempo según la duración del desplazamiento
    }

    // Función de callback que se ejecutará después del desplazamiento
    function afterScroll() {
        console.log('Desplazamiento completado.');
    }

    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav ul li a');

    // Añadir un evento click a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            // Obtener el destino del enlace
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Desplazarse suavemente al destino y luego ejecutar la función de callback
            scrollToElement(targetElement, afterScroll);
        });
    });
});

  