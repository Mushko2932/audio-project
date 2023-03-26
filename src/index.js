import { getRefs } from './get-refs';
import './css/styles.css';

const refs = getRefs();

// songs name
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
  refs.audio.play();
}

// pause song
function pauseSong() {
  refs.audio.pause();
}

// event listener
refs.btnPlay.addEventListener('click', () => {
  playSong();
});
