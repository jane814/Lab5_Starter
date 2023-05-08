// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selected = document.getElementById("horn-select");
  selected.addEventListener('change', (event) => {
    var changed = document.querySelector("img");
    var audio_set = document.getElementsByClassName("hidden");
    audio_set.src = `./assets/audio/${event.target.value}.mp3`
    changed.src = `./assets/images/${event.target.value}.svg`;
  });
}
