const startChangeColor = document.querySelector('button[data-start]');
const stopChangeColor = document.querySelector('button[data-stop]');

stopChangeColor.disabled = true;
let idInterval = 0;

startChangeColor.addEventListener('click', onChangeColor);
function onChangeColor() {
  startChangeColor.disabled = true;
  stopChangeColor.disabled = false;
  idInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stopChangeColor.addEventListener('click', onStopChangeColor);
function onStopChangeColor() {
  clearInterval(idInterval);
  startChangeColor.disabled = false;
  stopChangeColor.disabled = true;
}
