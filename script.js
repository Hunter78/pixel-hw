window.onload = start;
var color;
var array = ["red", "green", "orange", "white", "yellow", "purple", "brown", "black", "blue"];
var el = document.createElement('div');
var colors = document.createElement('div');

function coloring(event) {
  color = event.target.style.backgroundColor;
}

function emptySquares(event) {
  event.target.style.backgroundColor = color;
}

function pixelMaker(){
  for (var i = 0; i < 1000; i++) {
    el = document.createElement('div');
    document.body.appendChild(el);
    el.style.border = "1px solid black";
    el.style.width = "25px";
    el.style.height = "25px";
    el.style.float = "left";
    el.addEventListener("click", emptySquares);
  }
}

function colorMaker(){
  for (var i = 0; i < array.length; i++){
    colors = document.createElement('div');
    document.getElementById('primary-colors').appendChild(colors);
    colors.addEventListener("click", coloring);
    colors.style.width = "25px";
    colors.style.height = "25px";
    colors.style.border = "1px solid black";
    colors.style.backgroundColor = array[i];
    colors.style.float = "left";
  }
}
function start(){
  pixelMaker();
  colorMaker();  
}










