let BLOCKS_PER_CHART = 16 * 16;
const containerCell = document.getElementById("containerCell");

for (let i = 1; i <= BLOCKS_PER_CHART; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add('cell');
    containerCell.appendChild(newCell);
}

