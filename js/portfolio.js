/*
==========================================
DAVID AGUDELO PRODUCER
PORTFOLIO.JS
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initPortfolioFilters();
    initLightbox();
    initPortfolioAnimations();
    initImageOptimization();

});

/*
==========================================
FILTROS
==========================================
*/

function initPortfolioFilters() {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter = button.dataset.filter;

            portfolioItems.forEach(item => {

                const category = item.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "block";

                    requestAnimationFrame(() => {
                        item.style.opacity = "1";
                        item.style.transform = "translateY(0)";
                    });

                } else {

                    item.style.opacity = "0";
                    item.style.transform = "translateY(20px)";

                    setTimeout(() => {
                        item.style.display = "none";
                    }, 250);

                }

            });

        });

    });

}

/*
==========================================
LIGHTBOX
==========================================
*/

function initLightbox() {

    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox img");
    const closeBtn = document.querySelector(".lightbox-close");

    const lightboxTitle = document.querySelector(".lightbox-title");
    const images = document.querySelectorAll(".portfolio-item img");

    if (!lightbox) return;

    images.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImg.src = image.src;

            if (lightboxTitle) {
                lightboxTitle.textContent = image.alt || "Proyecto";
            }

            document.body.style.overflow = "hidden";

        });

    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeLightbox();

        }

    });

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

}

/*
==========================================
ANIMACIONES
==========================================
*/

function initPortfolioAnimations() {

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 800,
            once: true,
            offset: 100,
            easing: "ease-out-cubic"

        });

    }

}

/*
==========================================
OPTIMIZACION VISUAL
==========================================
*/

function initImageOptimization() {

    const images = document.querySelectorAll(
        ".portfolio-item img"
    );

    images.forEach(image => {

        image.loading = "lazy";

        image.decoding = "async";

    });

}

/*
==========================================
REVEAL EFFECT
==========================================
*/

const revealObserver = new IntersectionObserver(

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

document.querySelectorAll(".portfolio-item")
.forEach(item => {

    revealObserver.observe(item);

});

/*
==========================================
PRELOAD HERO IMAGE
==========================================
*/

window.addEventListener("load", () => {

    const heroImage = new Image();

    heroImage.src =
    "../assets/images/portfolio/destacados/hero_01.webp";

});

/*
==========================================
SMOOTH SCROLL
==========================================
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
