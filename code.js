let numberCells 
let amountOfCellsXY 
let scale 

const containerCell = document.getElementById("containerCell")
const big = document.getElementById("bigButton")
const mdm = document.getElementById("mdmButton")
const small = document.getElementById("smallButton")
const clean = document.getElementById("cleanButton")

// function removes old divs 
function removeDivs() {
    let oldDivs = document.querySelectorAll(".cell")

    for (let j = 0; j < oldDivs.length; j++) {
        oldDivs[j].parentNode.removeChild(oldDivs[j])
    }
}

clean.addEventListener('click', () => {
    removeDivs()
    makeField()
})

// getting player choice by html buttons and changing the size of the div container
big.addEventListener('click', () => {
    numberCells = 64
    removeDivs()
    makeField()
})
mdm.addEventListener('click', () => {
    numberCells = 32
    removeDivs()
    makeField()
})
small.addEventListener('click', () => {
    numberCells = 16
    removeDivs()
    makeField()
})

// print the number of cells in the container of cells
function makeField(){
    amountOfCellsXY = numberCells * numberCells
    scale = (800 / numberCells) 
    sale = scale - 1
    for (let i = 1; i <= amountOfCellsXY; i++) {
        const newCell = document.createElement("div")
        newCell.classList.add('cell')
        newCell.setAttribute("id", "oneCell")
        newCell.style.width = scale + "px"
        newCell.style.height = scale + "px"
        containerCell.appendChild(newCell)
    }
}

function getScale(numberCells) {
    let amountOfCellsXY = numberCells * numberCells
    let scale = (800 / numberCells) 
    return sale = scale - 1, amountOfCellsXY
}
  
console.log(scale)
console.log(amountOfCellsXY)
console.log(numberCells)