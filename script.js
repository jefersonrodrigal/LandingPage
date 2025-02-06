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