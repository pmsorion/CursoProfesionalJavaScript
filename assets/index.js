import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [ new AutoPlay(), new AutoPause()] 
});

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
    player.media.muted ? player.unmute() : player.mute()
}


// let valor = true
// const changeName = () => {
//     let boton = document.getElementById('playButton')
//     valor ? boton.innerText = 'Pause' : boton.innerText = 'Play';
//     valor = !valor;
// }

// playButton.onclick = () => {
//     player.media.paused ? (player.play(), changeName()) : (player.pause(), changeName())
// }



