// WOW.js initialization
new WOW().init();

// Swiper initialization
const swiper = new Swiper(".swiper-container", {
    pagination: {
        el: ".projects-pagination",
        bulletClass: "projects-bullet",
        bulletActiveClass: "projects-bullet-active",
        clickable: true,
    }, loop: true,
});