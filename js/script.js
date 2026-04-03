document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    const navbar = document.querySelector('.navbar');

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
});