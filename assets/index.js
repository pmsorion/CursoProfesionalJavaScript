const video = document.querySelector('video');
const button = document.querySelector('button');


function MediaPlayer(config) {
    this.media = config.el
}
    
MediaPlayer.prototype.play = function() {
    this.media.play();
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

const player = new MediaPlayer({ el: video });

let valor = true
const changeName = () => {
    player.play
    let boton = document.getElementById('playButton')
    valor ? boton.innerText = 'Pause' : boton.innerText = 'Play';
    valor = !valor;
}

button.onclick = () => {
    player.media.paused ? (player.play(), changeName()) : (player.pause(), changeName())
}