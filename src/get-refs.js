export function getRefs() {
    return {
        container: document.querySelector('.container'),
        player: document.querySelector('.player'),
        nowPlaying: document.querySelector('.now-playing'),
        headphone: document.querySelector('.headphone'),
        songName: document.querySelector('.song'),
        audio: document.querySelector('.audio'),
        progressBar: document.querySelector('.progress-bar'),
        bar: document.querySelector('.bar'),
        playControl: document.querySelector('.play-control'),
        btnPrev: document.querySelector('.btn-prev'),
        btnPlay: document.querySelector('.btn-play'),
        btnNext: document.querySelector('.btn-next'),
    };
}