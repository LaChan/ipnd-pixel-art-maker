/*

Udacity IPND JavaScript Project: Pixel Art Maker
Student: Lachlan Hope

*/

//Variable Declaration
const colorInput = document.querySelector('#colorPicker');

const sizeInput = document.querySelector('#sizePicker');

let color = "#ffffff";

//Setup Event Listeners
sizeInput.addEventListener('submit', function(evt){
  evt.preventDefault();
  let inputHeight = 0;
  let inputWidth = 0;
  inputHeight = sizeInput.inputHeight.value;
  inputWidth = sizeInput.inputWidth.value;
  makeGrid(inputHeight, inputWidth);
});

/*colorInput.addEventListener('input',  function(evt){
  color = colorInput.value
});
*/

//Function to set color of an individual cell
function setCellColor(evt){
  color = colorInput.value
  evt.target.style.backgroundColor = color;
};

//Function to create the drawing grid
function makeGrid(ih, iw) {

  //setup table element for grid, with positioning and styling
  let grid = document.getElementById("pixelCanvas")
  grid.innerHTML = ("<table id=\"pixelCanvas\"> </table>");
  grid.addEventListener('click', setCellColor);
  color = "#ffffff"

  //actually draw the cells
  for(var i = 0; i < ih; i++) {
    let tr = grid.insertRow();
    for(var j = 0; j < iw; j++) {
      let td = tr.insertCell(j);
      td.style.backgroundColor = color;
      }
  }
  document.body.appendChild(grid);
}

