document.addEventListener("DOMContentLoaded", () => {
    // Create a Cinematic Hero Overlay
    const addCinematicOverlay = () => {
        const heroSection = document.querySelector('.hero');
        const overlay = document.createElement('div');
        overlay.classList.add('hero-overlay');
        heroSection.appendChild(overlay);
    };

    addCinematicOverlay();

    // Modal Creation
    const createModal = () => {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2 id="modal-title"></h2>
                <div id="modal-description"></div>
            </div>`;
        document.body.appendChild(modal);
        return modal;
    };

    const modal = createModal();
    const modalTitle = modal.querySelector("#modal-title");
    const modalDescription = modal.querySelector("#modal-description");
    const closeModalButton = modal.querySelector(".close");

    const openModal = (title, description, card) => {
        modalTitle.textContent = title;
        modalDescription.innerHTML = description;
    
        // Get card's position
        const cardRect = card.getBoundingClientRect();
    
        // Set modal position relative to the card
        modal.style.top = `${cardRect.top + window.scrollY}px`;
        modal.style.left = `${cardRect.left + window.scrollX}px`;
        modal.style.width = `${cardRect.width}px`;
    
        // Show modal
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    
        // Fade-in effect
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 50);
    };
    

    const closeModal = () => {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300);
    };

    document.querySelectorAll(".project-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const card = e.target.closest('.card'); // Get the card element
            openModal(link.getAttribute("data-title"), link.getAttribute("data-description"), card);
        });
    });

    closeModalButton.addEventListener("click", closeModal);
    window.addEventListener("click", e => e.target === modal && closeModal());
});

// Burger Menu Logic
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

const toggleMenu = () => {
    navLinks.classList.toggle("show");
    document.body.style.overflow = navLinks.classList.contains("show") ? "hidden" : "auto";
};

menuToggle.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        document.body.style.overflow = "auto";
    });
});

window.addEventListener("click", e => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove("show");
        document.body.style.overflow = "auto";
    }
});

// Particle Animation Logic
const createParticles = () => {
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
};

createParticles();

// Smooth Scroll
const smoothScroll = (target) => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) smoothScroll(target);
    });
});

// Scroll Fade-In Effect (with Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Lazy Loading for Images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img[loading=\"lazy\"]");
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    document.body.appendChild(script);
}

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
    if (Math.abs(currentScroll - lastScroll) > 50) {
        document.querySelectorAll("section").forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
                section.classList.add("visible");
            }
        });
        lastScroll = currentScroll;
    }
});

// Hero Title Typing Effect
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.getElementById("hero-title");
    const titleText = "Abdelkarim REZGUI";  // Text to type
    let index = 0;

    // Function for typing effect
    function typeText() {
        if (index < titleText.length) {
            heroTitle.innerHTML += titleText.charAt(index);
            index++;
            setTimeout(typeText, 150); // Adjust speed of typing here
        }
    }

    typeText(); // Start typing

    // Particle generation logic
    const particlesContainer = document.querySelector('.particles');
    const particleCount = window.innerWidth < 768 ? 50 : 100;  // Adjust count for mobile

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.transform = `translateY(${Math.random() * -100}vh)`; // Start at a random position
        particlesContainer.appendChild(particle);
    }
});
