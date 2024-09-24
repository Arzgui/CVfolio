document.addEventListener("DOMContentLoaded", function () {
    // Modal Creation
    const projectLinks = document.querySelectorAll(".project-link");
    const modal = document.createElement("div");
    modal.classList.add("modal");
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
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Delay Hero Text Animation
    const heroTexts = document.querySelectorAll('.animate-text');
    heroTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.5}s`; // Staggered animation delay
    });

    // Modal Functionality
    projectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const projectCard = e.target.closest(".project-card");
            const projectTitle = projectCard.querySelector("h3").textContent;
            const projectDescription = projectCard.querySelector("p").textContent;

            // Populate modal content and display
            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;
            modal.style.display = "flex";
        });
    });

    // Close Modal on Click
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close Modal on Outside Click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
