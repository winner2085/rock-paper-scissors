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
let outputList = ['<img src="https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg" alt="picture of a rock with googly eyes"></img>',
    '<img src="https://tse1.mm.bing.net/th/id/OIP.G33QhDv5cMCj5ttVNMix5QHaH_?rs=1&pid=ImgDetMain" alt="paper"></img>',
    '<img src="https://tse4.mm.bing.net/th/id/OIP.-o3BD_Mmr48QNQbW3DQjUgHaHx?rs=1&pid=ImgDetMain" alt="scissors"></img>',
]
let inputIndex = 0;

let inputFunction = () =>{
    if(input.value === inputList[inputIndex]){
        
    }
}

/* math.random possibly
var randomValue = a[Math.floor(a.length * Math.random())]; */