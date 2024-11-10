window.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    const heart = document.querySelector(".heart");

    // Explosão do coração após 3 segundos
    setTimeout(() => {
        heart.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        heart.style.transform = "scale(3)"; // Aumenta o coração
        heart.style.opacity = "0"; // Desaparece

        // Após a "explosão", esconde a tela de carregamento e mostra o conteúdo principal
        setTimeout(() => {
            loadingScreen.style.display = "none";
            mainContent.style.display = "flex";
        }, 500); // Espera 0.5 segundo para a transição de explosão
    }, 3000); // 3 segundos de espera inicial
});
