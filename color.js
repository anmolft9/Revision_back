var numSquare = 6;
var square = document.querySelectorAll(".square");
var color = generateRandomColor(numSquare);
var chosenColor = colorChosen();
var resultDisplay = document.getElementById("result");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var colorDisplay = document.getElementById("colorSelected");

// const generateRandomColor = (num) => {
//   let arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push(ranColors());
//   }
//   return arr;
// };

function reget() {
  color = generateRandomColor(numSquare);
  chosenColor = colorChosen();

  colorDisplay.textContent = chosenColor;
  resetButton.textContent = "New colors";
  resultDisplay.textContent = "";

  for (var i = 0; i < square.length; i++) {
    if (color[i]) {
      square[i].style.display = "block";
      square[i].style.backgroundColor = color[i];
    } else {
      square[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
  reget();
});

for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = color[i];
  colorDisplay.textContent = chosenColor;

  square[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === chosenColor) {
      resultDisplay.textContent = "CORRECT";
      colorChange(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play again?";
    } else {
      resultDisplay.textContent = "INCORRECT";
      this.style.backgroundColor = "#232323";
    }
  });
}

function colorChange(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

function colorChosen() {
  var ran = Math.floor(Math.random() * color.length);
  return color[ran];
}

function generateRandomColor(num) {
  // make an array
  var arr = [];
  // loop num times
  for (var i = 0; i < num; i++) {
    // get randomColors and push them into the array

    arr.push(ranColors());
  }
  // return array
  return arr;
}

// const ranColors = () => {
//   var r = Math.floor(Math.random() * 256);
//   var g = Math.floor(Math.random() * 256);
//   var b = Math.floor(Math.random() * 256);

//   return "rgb(" + r + ", " + g + ", " + b + ")";
// };

function ranColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
console.log(color);
