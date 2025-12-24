document.addEventListener('DOMContentLoaded', () => {
    // Configuramos el observador para detectar cuando el usuario hace scroll
    const observerOptions = {
        threshold: 0.1 // Se activa cuando se ve el 10% del elemento
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el elemento entra en pantalla, le damos visibilidad
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Seleccionamos todo lo que queremos animar
    const elementsToAnimate = document.querySelectorAll('.section, .project-card, .about-layout, .contact-container');
    
    elementsToAnimate.forEach(el => {
        // Estado inicial: invisible y un poco más abajo
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});
const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita que abra la página de Formspree
        
        const data = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.innerHTML = "<h3>¡Gracias! Tu mensaje ha sido enviado con éxito.</h3>";
            form.style.textAlign = "center";
            form.style.padding = "2rem";
        } else {
            alert("Hubo un error. Por favor, intenta de nuevo.");
        }
    });
}