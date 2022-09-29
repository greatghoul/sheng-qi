function playMusic() {
    const flag = document.querySelector('#flag');

    const audio = new Audio();
    audio.src = 'music.wav';
    audio.play();
}

function raiseFlag() {
    let bottom = 0;
    let opacity = 0;
    
    const timer = setInterval(() => {
        bottom += 0.1;
        opacity += 0.008;

        flag.style.bottom = `${bottom}px`;

        if (opacity <= 1) {
            flag.style.opacity = opacity;
        }

        if (bottom >= 500 - 60) {
            clearInterval(timer);
        }
    }, 10);
}

function handleStart () {
    playMusic();
    setTimeout(raiseFlag, 1000);
}

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', handleStart, false);
