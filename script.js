document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".project-link");
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.navbar ul');
    
    // Toggle the visibility of the menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    
    // Close the menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
    
    // Optional: Close the menu if clicked outside of it
    window.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    });
    

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

    // Open modal when a project link is clicked
    projectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const projectTitle = e.target.getAttribute("data-title");
            const projectDescription = e.target.getAttribute("data-description");

            // Populate modal content
            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;

            // Show modal
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the content
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

