/*

Udacity IPND JavaScript Project: Pixel Art Maker
Student: Lachlan Hope

*/

//Variable Declaration
const bdy = document.querySelector('body');

const colorInput = document.querySelector('#colorPicker');

const sizeInput = document.querySelector('#sizePicker');

var color = "#ffffff"

let inputHeight = 0

let inputWidth = 0

//Setup Event Listeners
sizeInput.addEventListener('submit', function(evt){
  evt.preventDefault();
  inputHeight = sizeInput.inputHeight.value;
  inputWidth = sizeInput.inputWidth.value;
  makeGrid(inputHeight, inputWidth);
});

colorInput.addEventListener('input',  function(evt){
  color = colorInput.value
});

//Function to set color of an individual cell
function setCellColor(evt){
  evt.target.style.backgroundColor = color;
}

//Function to create the drawing grid
function makeGrid(ih, iw) {

    //setup table element for grid, with positioning and styling
    let grid = document.createElement('table');
    grid.setAttribute("id", "drawing_grid")
    grid.addEventListener('click', setCellColor);

    //actually draw the cells
    for(var i = 0; i < ih; i++) {
      let tr = grid.insertRow();
      for(var j = 0; j < iw; j++) {
        let td = tr.insertCell(j);
        td.style.backgroundColor = color;
      }
    }

    //check for an existing table with drawing_grid id, and remove if present
    let tbl = document.querySelector('#drawing_grid');
    if (document.contains(tbl)){
      bdy.removeChild(tbl)
      bdy.appendChild(grid);
    } else {
      bdy.appendChild(grid);
    } 
  }
  