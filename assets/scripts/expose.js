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
  var type = "horn";
  selected.addEventListener('change', (event) => {
    audio_set.src = `./assets/audio/${event.target.value}.mp3`;
    changed.src = `./assets/images/${event.target.value}.svg`;
    type = event.target.value;
  });
  pressed.addEventListener('click',(event) => {
    if(type == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    audio_set.play();
  });
  level.addEventListener('change',(event) => {
    var num = Number(event.target.value);
    if(num ==0){
      audio_set.volume = 0.0;
      loud.src = "./assets/icons/volume-level-0.svg";
    }
    else if(1 <= num && num<33){
      audio_set.volume = 0.33;
      loud.src = "./assets/icons/volume-level-1.svg";
    }
    else if(33 <= num && num<67){
      audio_set.volume = 0.66;
      loud.src = "./assets/icons/volume-level-2.svg";
    }
    else{
      audio_set.volume = 1.0;
      loud.src = "./assets/icons/volume-level-3.svg"; 
    }
  });  
}
