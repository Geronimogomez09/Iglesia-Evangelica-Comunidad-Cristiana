const logo = document.getElementById("logo");
const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");
const body = document.body;

logo.addEventListener("click", () => {
    intro.classList.add("oculto");

    setTimeout(() => {
        intro.style.display = "none";   // ahora sí desaparece
        body.classList.add("fondo2");
        contenido.style.display = "grid";
        contenido.classList.add("activo");
    }, 800);
});
const fecha = document.getElementById("fecha");

const hoy = new Date();
const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

fecha.textContent = hoy.toLocaleDateString("es-AR", opciones);