// 1. Capturar Elementos del DOM
// Usamos querySelector para encontrar los contenedores.
const menuButton = document.querySelector('.block-menu-pop');
const navMenu = document.querySelector('.main-menu');

if (menuButton && navMenu) {
    
    // 2. El clic
    function toggleMenu() {
        // Añade la clase 'is-open' si no la tiene, y la quita si la tiene.
        // Alterna entre mostrar y ocultar el menú.
        navMenu.classList.toggle('is-open');
    }

    // 3. Escuchar el evento de clic en el botón de hamburguesa
    menuButton.addEventListener('click', toggleMenu); 
}