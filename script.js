const playButton = document.querySelector('.submit');
const playerScore = document.querySelector('.score-player');
const compScore = document.querySelector('.score-comp');
const input = document.getElementById('input-container');

global.scorePlayer=0;
global.scoreComp=0;

/* Draw score
draw_text(50,50,"Player1 = "+string(global.score1))
draw_text(50,150,"Player2 = "+string(global.score2)) */

let inputList = ['Rock', 'Paper', 'Scissors'];

let inputFunction = () =>{
    if(input.value === inputList){
        
    }
}