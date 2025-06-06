// Validación del formulario y simulación de mensaje
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;

    if (!nombre || !email || !asunto) {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    return true;
}

function calcularDescuento() {
    const porcentaje = parseFloat(document.getElementById("descuento").value);
    const precioOriginal = 100;

    if (isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
        alert("Por favor, ingresá un porcentaje válido entre 0 y 100.");
        return;
    }

    const descuento = precioOriginal * (porcentaje / 100);
    const precioFinal = precioOriginal - descuento;
    document.getElementById("precioFinal").textContent = `Precio final con ${porcentaje}% de descuento: $${precioFinal.toFixed(2)}`;
}

// Cambia el estilo del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#10e746';
    } else {
        header.style.backgroundColor = '#077e0d';
    }
});
