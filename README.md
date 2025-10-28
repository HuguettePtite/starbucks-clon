# ☕ Starbucks Landing Page Clone (Responsive Design)

![Clon-Starbucks](./assets/header-desktop.png)

![Clon-Starbucks](./assets/footer-desktop.png)
## 🌟 Resumen del Proyecto

Rehice la página de inicio de Starbucks para demostrar sólidas habilidades en **Diseño Responsivo**, **CSS Layout**, **JavaScript** y **Buenas Prácticas** de *Front-End*.

Mi objetivo fue replicar la experiencia de usuario y la estructura visual del sitio original, haciéndolo un diseño responsivo que se adapta a cualquier dispositivo: móvil, tableta y escritorio.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** para estructura semántica.
* **CSS3:** para estilizar, usando variables CSS (`:root`) para manejo de temas y colores.
* **CSS Grid:** para la **macroestructura** del layout (header y secciones principales).
* **Flexbox:** para la **microestructura** y alineación de elementos de navegación y footer.
* * **JavaScript:** Utilizado para crear el efecto de desplegar el menú de hamburguesa en la navbar. Cuando pasamos a la versión móvil.

---

## ✨ Características Destacadas y Habilidades Demostradas:

1.  **Layout Shifter (Menú Adaptativo):** Al usar un móvil el menú principal se transforma en un **icono de hamburguesa**.
2.  **Estrategia Desktop First:** En el código CSS usé `max-width` para pasar de un diseño de escritorio a una vista móvil apilada.

![Clon-Starbucks](./assets/mobile.png)

3.  **Manejo de Layouts Complejos:** usé `grid-template-columns: auto 1fr;` en el *header* para separar el logo y el menú.
4.  **Control de Flujo con `order`:** Usé la propiedad `order` en las Media Queries para **invertir el orden visual** de los bloques de imagen y texto en móvil, garantizando una lectura lógica sin alterar el HTML.
5.  **Accesibilidad (ARIA):** usé atributos básicos de accesibilidad (`alt` en imágenes) y preparé el HTML para cuando le incluya JavaScript.
6.  **Menú desplegable:** (Manipulación del DOM)
* Captura del DOM: Se utilizó querySelector para seleccionar el botón de hamburguesa y el menú de navegación principal (.main-menu).

* Manejo de Eventos: Se usó el método addEventListener para "escuchar" el evento de click en el botón.

* Lógica Toggle: La función de callback utiliza classList.toggle('is-open') para añadir o quitar una clase CSS. Esto permite que el CSS controle el estado visual (mostrar/ocultar), mientras que JavaScript solo controla el comportamiento, dando una separación de responsabilidades.

---

## 🌐 Visualización del Proyecto

**Estado:** Finalizado. Anteriormente, solo contaba con HTML y CSS. El ultimo objetivo era añadir un pequeño JavaScript, ¡lo he logrado!🎉

## 📧 Contacto

Huguette López
* **LinkedIn:** [www.linkedin.com/in/huguettea134711a3]


---



