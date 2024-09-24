document.addEventListener("DOMContentLoaded", function () {
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

    document.addEventListener('DOMContentLoaded', () => {
        const heroTexts = document.querySelectorAll('.animate-text');
    
        heroTexts.forEach((text, index) => {
            text.style.animationDelay = `${index * 0.5}s`; // Delays each text by 0.5s
        });
    });
    

    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModalButton = modal.querySelector(".close");
    const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


    // Modal functionality
    projectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const projectCard = e.target.closest(".project-card");
            const projectTitle = projectCard.querySelector("h3").textContent;
            const projectDescription = projectCard.querySelector("p").textContent;

            // Populate modal content
            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;

            // Center modal on the screen
            modal.style.display = "flex"; // Use flex to center modal vertically and horizontally
        });
    });

    // Close modal functionality
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
