const presentationText = `Olá, sou Milleny Franca, especialista em Recursos Humanos, pronta para potencializar talentos!`;
const presentationElement = document.getElementById('presentation');
let index = 0;

function typeText() {
    if (index < presentationText.length) {
        presentationElement.textContent += presentationText[index];
        index++;
        setTimeout(typeText, 100); // Velocidade de digitação
    }
}

document.addEventListener("DOMContentLoaded", typeText);
