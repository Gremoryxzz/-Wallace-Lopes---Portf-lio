// EFEITO DIGITAÇÃO
const text = "Desenvolvedor Front-End & Back-End";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// BOTÃO PROJETO
function abrirProjeto(link) {
    window.open(link, "_blank");
}

// ANIMAÇÃO SCROLL
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});