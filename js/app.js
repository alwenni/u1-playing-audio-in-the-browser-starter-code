const catImage = document.querySelector('#cat');
catImage.addEventListener('click', (evt) => {
    console.log(evt.target, 'event triggered');
});


const catSays = new Audio('../assets/audio/cat.mp3');
catImage.addEventListener('click', (evt) => {
    catSays.play();
});


catImage.addEventListener("click", (evt) => {
  catSays.volume = 0.05;
  catSays.play();
});


const notCatDiv = document.querySelector("#not-cat")
notCatDiv.addEventListener("click", (evt) => {
  if (evt.target.id !== "cat") {
    const audioElement = new Audio(`../assets/audio/${evt.target.id}.mp3`)
    audioElement.volume = .05
    audioElement.play()
  }
})