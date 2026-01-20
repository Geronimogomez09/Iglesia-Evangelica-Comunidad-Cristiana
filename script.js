const logo = document.getElementById("logo");
const contenido = document.getElementById("contenido");

logo.addEventListener("click", () => {
    contenido.classList.toggle("activo");
});