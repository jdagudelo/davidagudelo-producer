/*
==================================================
DAVID AGUDELO PRODUCER
SERVICES.JS
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initServiceCards();
    initMethodCards();
    initAdvantageCards();
    initCTAEffects();
    preloadImportantImages();

});

/*
==================================================
SERVICE CARDS
==================================================
*/

function initServiceCards() {

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("service-active");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("service-active");

        });

    });

}

/*
==================================================
METHOD CARDS
==================================================
*/

function initMethodCards() {

    const cards = document.querySelectorAll(".method-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0)";

        });

    });

}

/*
==================================================
ADVANTAGE CARDS
==================================================
*/

function initAdvantageCards() {

    const cards =
        document.querySelectorAll(".advantage-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("advantage-active");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("advantage-active");

        });

    });

}

/*
==================================================
CTA BUTTON EFFECT
==================================================
*/

function initCTAEffects() {

    const ctaButtons =
        document.querySelectorAll(".cta-section .btn");

    ctaButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform =
                "translateY(-3px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translateY(0)";

        });

    });

}

/*
==================================================
PRELOAD IMPORTANT IMAGES
==================================================
*/

function preloadImportantImages() {

    const images = [

        "../assets/images/portfolio/destacados/hero_03.webp",
        "../assets/images/portfolio/destacados/hero_04.webp"

    ];

    images.forEach(src => {

        const img = new Image();

        img.src = src;

    });

}

/*
==================================================
INTERSECTION OBSERVER
==================================================
*/

const serviceObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document
.querySelectorAll(
    ".service-card, .method-card, .advantage-card"
)
.forEach(item => {

    serviceObserver.observe(item);

});

/*
==================================================
SMOOTH SCROLL
==================================================
*/

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});
