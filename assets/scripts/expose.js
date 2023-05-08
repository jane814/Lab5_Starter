// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selected = document.getElementById("horn-select");
  var changed = document.querySelector("img");
  var audio_set = document.querySelector("audio");
  var pressed = document.querySelector("button");
  var level = document.getElementById("volume");
  var images = document.querySelectorAll("img");
  var loud = images[1];
  selected.addEventListener('change', (event) => {
    audio_set.src = `./assets/audio/${event.target.value}.mp3`;
    changed.src = `./assets/images/${event.target.value}.svg`;
  });
  pressed.addEventListener('click',(event) => {
    audio_set.play();
  });
  level.addEventListener('input',(event) => {
    if(event.target.value ==0){
      audio_set.volume = 0.0;
      loud.src = "./assets/icons/volume-level-0.svg";
    }
    else if(1 <= event.target.value <33){
      audio_set.volume = 0.33;
      loud.src = "./assets/icons/volume-level-1.svg";
    }
    else if(33 <= event.target.value <67){
      audio_set.volume = 0.66;
      loud.src = "./assets/icons/volume-level-2.svg";
    }
    else{
      audio_set.volume = 1.0;
      loud.src = "./assets/icons/volume-level-3.svg"; 
    }
  });  
}
