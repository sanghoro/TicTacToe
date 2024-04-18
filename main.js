//querySelectors
var cells = document.querySelectorAll('.cell');
var turn = document.querySelector('.turn')

//eventListeners
for (var i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', function(event){
        clickCell(event.target);
    })
}


//variables
var player = '⭐️'
var opponent = '❤️'


//functions
function hide(element) {
    element.classList.add('hidden')
}
function show(element) {
    element.classList.remove('hidden')
}
function togglePlayer(){
    if(player === '⭐️'){
        player = '❤️'
    } else {
        player = '⭐️'
        opponent = '❤️'
    }
    turn.innerText= `It's ${player}'s turn`
}
function clickCell(cell) {
    if (cell.innerText === '') {
        cell.innerText = player
        togglePlayer();  
    }
}
