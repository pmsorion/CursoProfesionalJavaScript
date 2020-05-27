import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [ new AutoPlay(), new AutoPause(), new Ads()] 
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
    player.media.muted ? player.unmute() : player.mute()
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
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
