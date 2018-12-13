/*

Udacity IPND JavaScript Project: Pixel Art Maker
Student: Lachlan Hope

*/

//Variable Declaration
const colorInput = document.querySelector('#colorPicker');

const sizeInput = document.querySelector('#sizePicker');

const grid = document.getElementById("pixelCanvas")

const dh = document.getElementById("dheading")

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

//Function to set color of an individual cell
function setCellColor(evt){
  color = colorInput.value
  evt.target.style.backgroundColor = color;
};

//Function to create the drawing grid
function makeGrid(ih, iw) {

  //check input values aren't absurd
  if (ih > 50 | iw > 50){
    dh.innerHTML = ('<h2 id=\"dheading\" style=\"color:#9600FF;font-family:Roboto:font-size:16pt\">Please select a grid size less than 50</h2>');
  } else {
   //clear existing table, set default color, add positioning and styling\
   dh.innerHTML = ('<h2 id=\"dheading\">Design Canvas</h2>');
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
  }
  document.body.appendChild(grid);
}

