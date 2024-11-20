// Seleciona o conteúdo principal e o botão de portfólio
const mainContent = document.getElementById('main-content');
const portfolioLink = document.getElementById('portfolioLink');

// Função para aplicar a rotação
function girarPagina(direcao) {
    if (!mainContent.classList.contains('rotate-animation')) {
        mainContent.style.transform = `rotateX(${direcao === 'down' ? 180 : -180}deg)`;
        mainContent.classList.add('rotate-animation');
        setTimeout(() => {
            mainContent.classList.remove('rotate-animation');
        }, 1000); // Remove a classe após a animação
    }
}

// Listener para clique no botão "Visualizar Portfólio"
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    girarPagina('down'); // Roda para baixo ao clicar
    setTimeout(() => {
        window.location.href = portfolioLink.href;
    }, 1000); // Redireciona após a animação
});

// Listener para rolar o botão do mouse
document.addEventListener('wheel', (e) => {
    girarPagina(e.deltaY > 0 ? 'down' : 'up'); // Determina a direção com base no movimento do mouse
});
