let numberCells 
let amountOfCellsXY 
let scale 

let color = "#000000"
const containerCell = document.getElementById("containerCell")
const big = document.getElementById("bigButton")
const mdm = document.getElementById("mdmButton")
const small = document.getElementById("smallButton")
const clean = document.getElementById("cleanButton")
const black = document.getElementById("blackButton")
const rnbw = document.getElementById("rnbwButton")
let isDraw = false

containerCell.addEventListener('mousedown', () => isDraw = true)

containerCell.addEventListener('mouseup', () => isDraw = false)

// function removes old divs 
function removeDivs() {
    let oldDivs = document.querySelectorAll(".cell")

    for (let j = 0; j < oldDivs.length; j++) {
        oldDivs[j].parentNode.removeChild(oldDivs[j])
    }
}

rnbw.addEventListener('click', () => { 
    let randR = Math.floor(Math.random() * 255) + 1
    let randG = Math.floor(Math.random() * 255) + 1
    let randB = Math.floor(Math.random() * 255) + 1
    
    color = "rgb(" + randR + ", " + randG + ", " + randB + ")"; 
})

black.addEventListener('click', () => {
    color = "#000000"
})


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

let newCell = document.query

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
    let cells = document.querySelectorAll('.cell')
    if (isDraw) {
        for (let cell of cells) {
            cell.addEventListener('mouseover', () => setColor(cell))    
        }
    }
    if (!isDraw) {
        for (let cell of cells) {
            cell.addEventListener('mouseover', () => setColor(cell))
        }
    }
}

function setColor(element) {
    if (isDraw) element.style.backgroundColor = color
    
    if (!isDraw) element.style.backgroundColor = "none"    
}


