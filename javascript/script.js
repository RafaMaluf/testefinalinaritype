document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.background-container');
    const numBalls = 10; // Número de bolas
    const ballSizeMin = 200; // Tamanho mínimo da bola
    const ballSizeMax = 400; // Tamanho máximo da bola
    const durationMin = 10; // Duração mínima da animação
    const durationMax = 20; // Duração máxima da animação

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createBall() {
        const ball = document.createElement('div');
        ball.classList.add('ball');

        // Dimensões da bola
        const size = getRandom(ballSizeMin, ballSizeMax);
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;

        // Determina a posição inicial fora da tela
        const side = Math.floor(Math.random() * 4);
        let startX, startY, endX, endY;
        switch (side) {
            case 0: // Esquerda
                startX = -size;
                startY = getRandom(0, window.innerHeight - size);
                endX = window.innerWidth;
                endY = getRandom(0, window.innerHeight - size);
                break;
            case 1: // Direita
                startX = window.innerWidth;
                startY = getRandom(0, window.innerHeight - size);
                endX = -size;
                endY = getRandom(0, window.innerHeight - size);
                break;
            case 2: // Topo
                startX = getRandom(0, window.innerWidth - size);
                startY = -size;
                endX = getRandom(0, window.innerWidth - size);
                endY = window.innerHeight;
                break;
            case 3: // Fundo
                startX = getRandom(0, window.innerWidth - size);
                startY = window.innerHeight;
                endX = getRandom(0, window.innerWidth - size);
                endY = -size;
                break;
        }

        ball.style.left = `${startX}px`;
        ball.style.top = `${startY}px`;
        ball.style.setProperty('--translate-x', `${endX - startX}px`);
        ball.style.setProperty('--translate-y', `${endY - startY}px`);

        // Animação de flutuação com duração aleatória
        const duration = getRandom(durationMin, durationMax);
        ball.style.animation = `move ${duration}s linear infinite`;

        container.appendChild(ball);
    }

    for (let i = 0; i < numBalls; i++) {
        createBall();
    }
});



document.getElementById('copy-email').addEventListener('click', function(event) {
    event.preventDefault();
    const email = 'inaritype@gmail.com';

    navigator.clipboard.writeText(email).then(function() {
        const successMessage = document.getElementById('copy-success');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);
    }, function(err) {
        console.error('Erro ao copiar o e-mail: ', err);
    });
});
