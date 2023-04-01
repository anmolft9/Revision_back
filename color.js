var numSquare = 6;
var square = document.querySelectorAll(".square");
var color = generateRandomColor(numSquare);

// const generateRandomColor = (num) => {
//   let arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push(ranColors());
//   }
//   return arr;
// };

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
