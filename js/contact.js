document.addEventListener("DOMContentLoaded", () => {

    console.log("CONTACT.JS CARGADO");

    const form = document.getElementById("whatsappForm");

    if (!form) {
        console.error("No se encontró el formulario.");
        return;
    }

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre =
            document.getElementById("nombre")?.value.trim() || "";

        const empresa =
            document.getElementById("empresa")?.value.trim() || "";

        const correo =
            document.getElementById("correo")?.value.trim() || "";

        const telefono =
            document.getElementById("telefono")?.value.trim() || "";

        const tipoProyecto =
            document.getElementById("tipoProyecto")?.value || "";

        const mensaje =
            document.getElementById("mensaje")?.value.trim() || "";

        /* VALIDACIONES */

        if (!nombre) {
            alert("Por favor ingresa tu nombre.");
            return;
        }

        if (!correo) {
            alert("Por favor ingresa tu correo electrónico.");
            return;
        }

        if (!mensaje) {
            alert("Por favor describe tu proyecto.");
            return;
        }

        /* MENSAJE */

        const texto = `Hola David,

Me gustaría recibir información sobre tus servicios.

━━━━━━━━━━━━━━━━━━

Nombre:
${nombre}

Empresa:
${empresa || "No especificada"}

Correo:
${correo}

Teléfono:
${telefono || "No especificado"}

Tipo de proyecto:
${tipoProyecto || "No especificado"}

Descripción:

${mensaje}

━━━━━━━━━━━━━━━━━━

Mensaje enviado desde:
davidagudeloproducer.com`;

        const whatsappURL =
            `https://wa.me/573044277722?text=${encodeURIComponent(texto)}`;

        window.open(
            whatsappURL,
            "_blank"
        );

    });

});
