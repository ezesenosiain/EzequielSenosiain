document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    const navbar = document.querySelector('.navbar');

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox__image');
    const lightboxClose = document.querySelector('.lightbox__close');
    const images = document.querySelectorAll('.gallery-card__image img');

    let lastScroll = 0;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hide');
        } else {
            navbar.classList.remove('hide');
        }

        lastScroll = currentScroll;
    });

    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.classList.add('active');
            lightboxImage.src = img.src;
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});