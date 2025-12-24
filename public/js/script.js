document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ANIMACIONES AL HACER SCROLL ---
    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section, .project-card, .about-layout, .contact-container');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // --- 2. FORMULARIO AJAX ---
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            
            const data = new FormData(form);
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    form.innerHTML = "<h3 style='color: #a855f7; text-align: center; padding: 2rem;'>🚀 ¡Gracias! Tu mensaje ha sido enviado con éxito.</h3>";
                } else {
                    alert("Hubo un error al enviar. Por favor, intenta de nuevo.");
                }
            } catch (error) {
                alert("Error de conexión. Revisa tu internet e intenta de nuevo.");
            }
        });
    }
});