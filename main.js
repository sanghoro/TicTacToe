//querySelectors
var cells = document.querySelectorAll('.cell');
var turn = document.querySelector('.turn')

//eventListeners
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
        clickCell(event.target);
    })
}

//variables
var player = '🐶'
var opponent = '🐵'
var playerWins = 0;
var opponentWins = 0;

var winningCombi = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

//functions
function togglePlayer() {
    if (player === '🐶') {
        player = '🐵'
    } else {
        player = '🐶'
        opponent = '🐵'
    }
    turn.innerText = `It's ${player}'s turn`
}
function resetCell() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}
function checkWin() {
    var playerWon = false
    for (var i = 0; i < winningCombi.length; i++) {
        var combi = winningCombi[i]
        if (cells[combi[0]].innerText !== '' &&
            cells[combi[0]].innerText === cells[combi[1]].innerText &&
            cells[combi[1]].innerText === cells[combi[2]].innerText) {
            playerWon = true;

            updateWinCount(cells[combi[0]].innerText);
            turn.innerText = `${cells[combi[0]].innerText} WON!`;

            setTimeout(function () {
                resetCell();
                togglePlayer();
                turn.innerText = `It's ${player}'s turn`
            }, 1500);
        }
    }
    return playerWon;
}

function checkTie() {
    var allFilled = true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerText === '') {
            allFilled = false;
        }
    }
    if (allFilled && !checkWin()) {
        turn.innerText = "IT'S A DRAW!";
        setTimeout(function () {
            resetCell();
            togglePlayer()
        }, 1500);
        return true;
    }
}

function clickCell(cell) {
    if (cell.innerText === '') {
        cell.innerText = player;

        if (!checkWin() && !checkTie()) {
            togglePlayer();
        }
    }
}

function updateWinCount(winningSymbol) {
    if (winningSymbol === '🐶') {
        playerWins++;
        document.getElementById('playerWins').innerText = playerWins;
    } else if (winningSymbol === '🐵') {
        opponentWins++;
        document.getElementById('opponentWins').innerText = opponentWins;
    }
}
