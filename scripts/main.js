document.addEventListener("DOMContentLoaded", () => {
    // Interceptar enlaces
    const enlaces = document.querySelectorAll("a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
            e.preventDefault();
            alert("🔗 Esto lleva a algún lugar");
        });
    });

    // Validación del formulario
    const formulario = document.querySelector(".formulario form");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            const inputs = formulario.querySelectorAll("input:not([type='checkbox'])");
            const selects = formulario.querySelectorAll("select");
            const checkbox = formulario.querySelector("input[type='checkbox']");

            let valid = true;
            let mensaje = "";

            // Validar inputs
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    valid = false;
                    mensaje = "⚠️ Por favor completa todos los campos del formulario.";
                }
            });

            // Validar selects
            selects.forEach(select => {
                if (select.selectedIndex === 0) {
                    valid = false;
                    mensaje = "⚠️ Por favor selecciona una opción en todos los campos.";
                }
            });

            // Validar checkbox
            if (!checkbox.checked) {
                valid = false;
                mensaje = "⚠️ Debes aceptar la Política de Protección de Datos Personales.";
            }

            if (valid) {
                alert("✅ ¡Gracias por contactarte con nosotros!");
                formulario.reset();
            } else {
                alert(mensaje);
            }
        });
    }
});
