const button = document.querySelector("#btn");
const bodyVar = document.querySelector("body");

function changeColor() {
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);
  let formatColor = `rgb(${color1}, ${color2}, ${color3})`;
  bodyVar.style.backgroundColor = formatColor;
}

function move() {
  let moveRight = Math.floor(Math.random() * 150);
  let moveDown = Math.floor(Math.random() * 150);
  let formatRight = `${moveRight}px`;
  let formatDown = `${moveDown}px`;
  button.style.left = formatRight;
  button.style.top = formatDown;
}

button.addEventListener("mouseover", move);
button.addEventListener("click", changeColor);
