let numberCells = prompt()
if (numberCells > 90){
    numberCells = prompt("number should be less than 90")
}
let amountOfCellsXY = numberCells * numberCells
let scale = (800 / numberCells) 
sale = scale - 1
const containerCell = document.getElementById("containerCell")

// print the number of cells in the container of cells
function makeField(){
    for (let i = 1; i <= amountOfCellsXY; i++) {
        const newCell = document.createElement("div")
        newCell.classList.add('cell')
        newCell.setAttribute("id", "oneCell")
        newCell.style.width = scale + "px"
        newCell.style.height = scale + "px"
        containerCell.appendChild(newCell)
    }
}
  
makeField()
console.log(scale)
console.log(amountOfCellsXY)
console.log(numberCells)