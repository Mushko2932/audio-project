const e={container:document.querySelector(".container"),player:document.querySelector(".player"),nowPlaying:document.querySelector(".now-playing"),headphone:document.querySelector(".headphone"),songName:document.querySelector(".song"),audio:document.querySelector(".audio"),progressBar:document.querySelector(".progress-bar"),bar:document.querySelector(".bar"),playControl:document.querySelector(".play-control"),btnPrev:document.querySelector(".btn-prev"),btnPlay:document.querySelector(".btn-play"),btnNext:document.querySelector(".btn-next")};var o;o="Артем Пивоваров and NK - Там У Тополi (Roman Crash Remix)",e.songName.innerHTML=o,e.audio.src=`songs/${o}.mp3`,e.btnPlay.addEventListener("click",(()=>{e.audio.play()}));
//# sourceMappingURL=index.5792042e.js.map
