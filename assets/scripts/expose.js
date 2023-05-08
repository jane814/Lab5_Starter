// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selected = document.getElementById("horn-select");
  var changed = document.querySelector("img");
  var audio_set = document.getElementsByClassName("hidden");
  selected.addEventListener('change', (event) => {
    audio_set.src = `./assets/audio/${event.target.value}.mp3`;
    changed.src = `./assets/images/${event.target.value}.svg`;
  });
  audio_set.addEventListener('click',() => {
    audio.play();
  });
}
