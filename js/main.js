let cellDifficultyEasy= 100;
let cellDifficultyMedium= 81;
let cellDifficultyHard= 49;
let tempCellAmount = 1;


function createCell(cellAmount){
    
    for (let i = 1; i <= cellAmount; i++) {
        let cell = createSquare(i);
        let grid = document.getElementById("grid");
        grid.appendChild(cell);
        tempCellAmount++;
    }
}

function createSquare(squareAmount){
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.innerHTML += squareAmount;
    cell.addEventListener("click", function() {

        console.log("Clicked cell", squareAmount);
    });
    return cell;
}


document.getElementById("playButton").addEventListener("click", function(){
    if(tempCellAmount != cellDifficultyEasy)
        createCell(cellDifficultyEasy);
    
});
