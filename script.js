document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about, .services, .contact");

    function handleScroll() {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                section.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Garante que seções visíveis no carregamento já animem
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = carouselImages[0].clientWidth;

function moveToNextSlide() {
    if (counter >= carouselImages.length - 1) {
        counter = 0; // Volta para a primeira imagem
    } else {
        counter++;
    }
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

function moveToPrevSlide() {
    if (counter <= 0) {
        counter = carouselImages.length - 1; // Vai para a última imagem
    } else {
        counter--;
    }
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

setInterval(moveToPrevSlide, 3000);  // Mudar imagem automaticamente a cada 3 segundos

document.addEventListener("DOMContentLoaded", function () {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = Array.from(carouselSlide.children);

    // Clonando imagens para criar um loop infinito
    images.forEach(img => {
        let clone = img.cloneNode(true);
        carouselSlide.appendChild(clone);
    });
});