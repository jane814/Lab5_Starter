// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selected = document.getElementById("horn-select");
  selected.addEventListener('change', (event) => {
    var changed = document.querySelector("img");
    changed.src = `./assets/images/${event.target.value}.svg`;
    console.log(changed.src);
  });
}
