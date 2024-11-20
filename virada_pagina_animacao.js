// Seleciona o botão "Ver Portfólio"
const portfolioLink = document.getElementById("portfolioLink");
const bodyElement = document.body;

// Variável para controlar se a animação inicial do coração terminou
let isHeartAnimationCompleted = false;

// Função para aplicar a rotação e redirecionar
function applyRotationAndRedirect(url) {
    // Evita múltiplos disparos de animação
    if (bodyElement.classList.contains("page-rotation")) return;

    // Adiciona a classe para rotação
    bodyElement.classList.add("page-rotation");

    // Após a animação, redireciona para o URL especificado
    setTimeout(() => {
        if (url) {
            window.location.href = url;
        }
    }, 1000); // Tempo correspondente à duração da rotação
}

// Evento ao clicar no botão "Ver Portfólio"
portfolioLink.addEventListener("click", (e) => {
    if (!isHeartAnimationCompleted) return; // Bloqueia o clique até o coração finalizar
    e.preventDefault(); // Impede o redirecionamento imediato
    applyRotationAndRedirect(portfolioLink.href);
});

// Evento para capturar a rolagem do mouse
window.addEventListener("wheel", (e) => {
    if (!isHeartAnimationCompleted) return; // Bloqueia o efeito até o coração finalizar
    applyRotationAndRedirect(portfolioLink.href);
});

// Espera a animação do coração terminar
window.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart");

    // Monitora o término da animação do coração
    heart.addEventListener("animationend", () => {
        isHeartAnimationCompleted = true;

        // Exibe o conteúdo principal após o coração
        const mainContent = document.getElementById("main-content");
        mainContent.style.display = "flex";
    });
});
