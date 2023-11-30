window.addEventListener('scroll', function () {
    const parallaxContent = document.querySelector('.parallax-content');
    let scrollPosition = window.scrollY;
    parallaxContent.style.transform = `translateZ(-2px) scale(2) translateY(${scrollPosition * 50}px)`; /* Изменение положения при прокрутке */
});