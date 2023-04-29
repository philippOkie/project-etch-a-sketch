let numberCells = prompt()
let amountOfCellsXY = numberCells * numberCells
const scale = (640 / numberCells) - 2
const containerCell = document.getElementById("containerCell")


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