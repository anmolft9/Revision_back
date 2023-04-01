var numSquare = 6;
var square = document.querySelectorAll(".square");
var color = generateRandomColor(numSquare);

generateRandomColor = (numSquare) => {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(ranColors());
  }
  return arr;
};

const ranColors = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
};
