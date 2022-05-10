const grid = document.querySelector(".gridcontainer");
const clearBtn = document.getElementById('clearBtn');
const drawBtn = document.getElementById('drawBtn');

clearBtn.onclick = () => clearGrid();
drawBtn.onclick = () => drawGrid();

//Validate that the number of squares is minor or equal than 100 
function drawGrid(){
    var number = document.getElementById("number").value;
    if (number<=100){
        createGrid(number);
    }
    else{
        alert('Number of squares no more of 100');
    }      
}

//Create the Grid with the number of the squares that user wants
createGrid = (num) => {
    if((num)<=100){
        for (let i = 0; i<(num*num); i++) {
            const div = document.createElement("div");
            grid.appendChild(div);
            grid.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
            div.addEventListener('mouseover', changeColor)
          }
    }
}

//Change the cels of the grid to black color (onclick) 
function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

//Clear the grid
function clearGrid(){
    grid.innerHTML = ''
}

    









