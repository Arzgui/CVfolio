document.addEventListener("DOMContentLoaded", function () {

    // Modal Creation
    const projectLinks = document.querySelectorAll(".project-link");
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Modal structure
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <p id="modal-description"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModalButton = modal.querySelector(".close");

    // Open modal when project link is clicked
    projectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const projectTitle = link.getAttribute("data-title");
            const projectDescription = link.getAttribute("data-description");

            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;

            modal.style.display = "flex";
        });
    });

    // Close modal
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Burger Menu Logic
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        // Ensure scrolling is enabled when the menu is open
        document.body.style.overflowY = navLinks.classList.contains("show") ? "hidden" : "auto";
    });

    // Close menu after clicking a link
    navItems.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            document.body.style.overflowY = "auto"; // Re-enable scrolling
        });
    });

    // Close mobile menu when clicking outside
    window.addEventListener("click", function (e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("show");
            document.body.style.overflowY = "auto"; // Re-enable scrolling
        }
    });

    // Particle Animation Logic
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    document.querySelector('.hero').appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${(Math.random() * 5) + 5}s`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particlesContainer.appendChild(particle);
    }

    // Scroll to Section on CTA Button Click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Ensure content is interactive after hero animation
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.pointerEvents = 'auto'; // Re-enable interaction after animation

});
