/*
==================================================
DAVID AGUDELO PRODUCER
BLOG.JS
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initializeCategoryFilters();
    initializeLazyImages();
    initializeCardAnimations();

});

/*
==================================================
FILTROS DE CATEGORÍA
==================================================
*/

function initializeCategoryFilters() {

    const buttons =
        document.querySelectorAll(".blog-category");

    const articles =
        document.querySelectorAll(".blog-card");

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const category =
                button.textContent.trim();

            /*
            ==========================================
            FUTURO FILTRO REAL
            ==========================================
            */

            console.log(
                "Categoría seleccionada:",
                category
            );

            /*
            ==========================================
            ANIMACIÓN VISUAL
            ==========================================
            */

            articles.forEach(article => {

                article.style.opacity = "0";

                setTimeout(() => {

                    article.style.opacity = "1";

                }, 150);

            });

        });

    });

}

/*
==================================================
LAZY LOADING
==================================================
*/

function initializeLazyImages() {

    const images =
        document.querySelectorAll("img");

    if ("loading" in HTMLImageElement.prototype) {

        images.forEach(img => {

            img.loading = "lazy";

        });

    }

}

/*
==================================================
MICROANIMACIONES
==================================================
*/

function initializeCardAnimations() {

    const cards =
        document.querySelectorAll(
            ".blog-card"
        );

    cards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "translateY(-8px)";

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });

}

/*
==================================================
PREPARACIÓN PARA BUSCADOR FUTURO
==================================================
*/

window.blogSearch = function(term) {

    const cards =
        document.querySelectorAll(".blog-card");

    term =
        term.toLowerCase();

    cards.forEach(card => {

        const text =
            card.textContent.toLowerCase();

        if (text.includes(term)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

};

/*
==================================================
PREPARACIÓN PARA ANALYTICS FUTURO
==================================================
*/

document.addEventListener(
    "click",
    (event) => {

        const articleLink =
            event.target.closest(
                ".blog-card a"
            );

        if (!articleLink) return;

        console.log(
            "Artículo abierto:",
            articleLink.href
        );

    }
);
