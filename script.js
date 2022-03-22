const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset-btn');

let currentPlayer = "X";

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkForWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(indexOf => cells[indexOf].innerText.trim() == currentPlayer)
        // let draw = combination !== check
        if(check){
            alert("PLAYER " + currentPlayer + " WON!");
            return true
        }
    });

    return false
}

function checkDraw (){
    for(i in cells){
        if (cells[i].innerText === ""){
            return false
        }
    }

    alert("GAME IS DRAW")
    return true
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        // check valid move
        if(cell.innerText.trim() != ""){
            return
        }
        
        // play currentPlayer move
        cell.innerText = currentPlayer 
        
        // if there is no winner continue game
        if(!checkForWinner()){
            checkDraw()
            currentPlayer = currentPlayer == "X" ? "O" : "X";    
        }
    })
})

// To reset the game
resetButton.addEventListener('click', () => {
    cells.forEach(cell => cell.innerText = "");
})