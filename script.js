document.addEventListener("DOMContentLoaded", () => {
    // Modal Creation
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <p id="modal-description"></p>
        </div>`;
    document.body.appendChild(modal);

    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModalButton = modal.querySelector(".close");

    // Modal Logic
    document.querySelectorAll(".project-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            modalTitle.textContent = link.getAttribute("data-title");
            modalDescription.textContent = link.getAttribute("data-description");
            modal.style.display = "flex";
        });
    });

    closeModalButton.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => e.target === modal ? modal.style.display = "none" : null);

    // Burger Menu Logic
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        document.body.style.overflowY = navLinks.classList.contains("show") ? "hidden" : "auto";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            document.body.style.overflowY = "auto";
        });
    });

    window.addEventListener("click", e => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("show");
            document.body.style.overflowY = "auto";
        }
    });

    // Particle Animation Logic - reduce particles for mobile
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    document.querySelector('.hero').appendChild(particlesContainer);

    const particleCount = window.innerWidth < 768 ? 30 : 50; // Fewer particles on mobile

    Array.from({ length: particleCount }).forEach(() => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particlesContainer.appendChild(particle);
    });

    // Scroll to Section on CTA Button Click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Scroll Fade-In Effect (Throttle for performance on mobile)
    let lastScroll = 0;
    document.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (Math.abs(currentScroll - lastScroll) > 50) { // Throttle the event
            document.querySelectorAll("section").forEach(section => {
                if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
                    section.classList.add("visible");
                }
            });
            lastScroll = currentScroll;
        }
    });
});
