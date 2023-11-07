let cellDifficultyEasy= 100;
let cellDifficultyMedium= 81;
let cellDifficultyHard= 49;



function createCell(cellAmount){
    
    for (let i = 1; i <= cellAmount; i++) {
        let cell = createSquare(i);
        let grid = document.getElementById("grid");
        grid.appendChild(cell);
    
    }
}

function createSquare(squareAmount){
    const cell = document.createElement("div");
    cell.classList.add("square");
    return cell;
}


document.getElementById("playButton").addEventListener("click", function(){
    createCell(cellDifficultyEasy);
});
