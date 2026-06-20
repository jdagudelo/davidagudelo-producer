/* ==========================================
DAVID AGUDELO PRODUCER
MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavbar();
    initializeAOS();
    initializeBackToTop();
    initializeLanguageSelector();
    initializeLazyLoading();
    initializeRevealAnimations();

});

/* ==========================================
NAVBAR SCROLL EFFECT
========================================== */

function initializeNavbar() {

    const navbar = document.querySelector(".custom-navbar");

    if (!navbar) return;

    function updateNavbar() {

        if (window.scrollY > 60) {

            navbar.style.background = "rgba(5,5,5,0.95)";
            navbar.style.backdropFilter = "blur(20px)";
            navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.35)";

        } else {

            navbar.style.background = "rgba(5,5,5,0.15)";
            navbar.style.backdropFilter = "blur(18px)";
            navbar.style.boxShadow = "none";
        }
    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });
}

/* ==========================================
AOS INITIALIZATION
========================================== */

function initializeAOS() {

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            offset: 100

        });
    }
}

/* ==========================================
BACK TO TOP BUTTON
========================================== */

function initializeBackToTop() {

    const button = document.createElement("button");

    button.id = "backToTop";

    button.innerHTML = `
        <i class="fa-solid fa-arrow-up"></i>
    `;

    document.body.appendChild(button);

    Object.assign(button.style, {

        position: "fixed",
        right: "24px",
        bottom: "24px",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "none",
        background: "#D4AF37",
        color: "#050505",
        fontSize: "18px",
        cursor: "pointer",
        opacity: "0",
        visibility: "hidden",
        transform: "translateY(20px)",
        transition: "all .3s ease",
        zIndex: "999"

    });

    function toggleButton() {

        if (window.scrollY > 500) {

            button.style.opacity = "1";
            button.style.visibility = "visible";
            button.style.transform = "translateY(0)";

        } else {

            button.style.opacity = "0";
            button.style.visibility = "hidden";
            button.style.transform = "translateY(20px)";
        }
    }

    toggleButton();

    window.addEventListener("scroll", toggleButton, {
        passive: true
    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });
    });
}

/* ==========================================
LANGUAGE SELECTOR
========================================== */

function initializeLanguageSelector() {

    const button = document.querySelector(".language-btn");

    if (!button) return;

    let language = localStorage.getItem("siteLanguage") || "es";

    updateLanguageButton();

    button.addEventListener("click", () => {

        language = language === "es"
            ? "en"
            : "es";

        localStorage.setItem(
            "siteLanguage",
            language
        );

        updateLanguageButton();

        document.dispatchEvent(
            new CustomEvent(
                "languageChanged",
                {
                    detail: language
                }
            )
        );

    });

    function updateLanguageButton() {

        button.textContent =
            language === "es"
                ? "ES | EN"
                : "EN | ES";
    }
}

/* ==========================================
NATIVE LAZY LOADING
========================================== */

function initializeLazyLoading() {

    const images = document.querySelectorAll("img");

    images.forEach(img => {

        img.loading = "lazy";

        img.decoding = "async";
    });
}

/* ==========================================
REVEAL ANIMATIONS
========================================== */

function initializeRevealAnimations() {

    const elements = document.querySelectorAll(
        ".service-card, .profile-image, .stats-section .col-md-3"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }
            });

        },

        {
            threshold: 0.15
        }

    );

    elements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);
    });
}

/* ==========================================
PERFORMANCE OPTIMIZATION
========================================== */

window.addEventListener(

    "load",

    () => {

        requestAnimationFrame(() => {

            document.body.classList.add("loaded");

        });

    },

    {
        once: true
    }

);

/* ==========================================
ACTIVE MENU LINK
========================================== */

(function () {

    const links = document.querySelectorAll(".nav-link");

    const currentPage =
        window.location.pathname.split("/").pop();

    links.forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "" && href === "#")
        ) {

            link.classList.add("active");
        }
    });

})();

/* ==========================================
PREMIUM HOVER EFFECT
========================================== */

document.addEventListener("mousemove", e => {

    const cards =
        document.querySelectorAll(".service-card");

    cards.forEach(card => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );
    });

});

/* ==========================================
FUTURE LANGUAGE SYSTEM HOOK
========================================== */

document.addEventListener(

    "languageChanged",

    e => {

        const lang =
            e.detail;

        console.log(
            `Language changed to: ${lang}`
        );

        /*
            Próxima fase:

            language.js

            translations = {
                es: {},
                en: {}
            }

            updatePageLanguage(lang)
        */
    }

);

/* ==========================================
END
========================================== */
