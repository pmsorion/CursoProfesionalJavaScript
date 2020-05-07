import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const button = document.querySelector('button');
const player = new MediaPlayer({ el: video });

let valor = true
const changeName = () => {
    let boton = document.getElementById('playButton')
    valor ? boton.innerText = 'Pause' : boton.innerText = 'Play';
    valor = !valor;
}

button.onclick = () => {
    player.media.paused ? (player.play(), changeName()) : (player.pause(), changeName())
}