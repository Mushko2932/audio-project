import { getRefs } from './get-refs';
import './css/styles.css';

const refs = getRefs();

// song titles
const songs = [
  'Артем Пивоваров and NK - Там У Тополi (Roman Crash Remix)',
  'Хас feat Схожа - Не продам',
  'Cheev - Гарно так',
  'MBreeze - Дихай',
  'Shumei - Біля тополі',
];

// default song
let currentSong = 0;

// load song
function loadSong(song) {
  refs.songName.innerHTML = song;
  refs.audio.src = `songs/${song}.mp3`;
}

loadSong(songs[currentSong]);

// play song
function playSong() {
  refs.player.classList.add('play');
  refs.playImg.src = './images/pause.svg';
  refs.audio.play();
}

// pause song
function pauseSong() {
  refs.player.classList.remove('play');
  refs.playImg.src = './images/play.svg';
  refs.audio.pause();
}

// a song is playing
function isPlayingSong() {
  const isPlaying = refs.player.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

// next song
function nextSong() {
  currentSong += 1;

  if (currentSong > songs.length -1) {
    currentSong = 0;
  }

  loadSong(songs[currentSong]);
  playSong();
}

// prev song
function prevSong() {
  currentSong -= 1;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong(songs[currentSong]);
  playSong();
}

// progress bar
function updateProgressBar(e) {
  const { duration, currentTime } = e.srcElement;
  const progressBarPersent = (currentTime / duration) * 100;
  refs.bar.style.width = `${progressBarPersent}%`;
}

// event listener
refs.btnPlay.addEventListener('click', isPlayingSong);
refs.btnNext.addEventListener('click', nextSong);
refs.btnPrev.addEventListener('click', prevSong);
refs.audio.addEventListener('timeupdate', updateProgressBar);
