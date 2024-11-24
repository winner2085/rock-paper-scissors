const playButton = document.querySelector('.play');
const playerScore = document.querySelector('.score-player');
const compScore = document.querySelector('.score-comp');
const input = document.getElementById('input-container');

let scorePlayer = 0;
let scoreComp = 0;

/* Draw score
draw_text(50,50,"Player1 = "+string(scorePlayer))
draw_text(50,150,"Player2 = "+string(scoreComp)) */

let inputList = ['Rock', 'Paper', 'Scissors'];
let outputList = ['<img src="https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg" alt="picture of a rock with googly eyes"></img>',
    '<img src="https://tse1.mm.bing.net/th/id/OIP.G33QhDv5cMCj5ttVNMix5QHaH_?rs=1&pid=ImgDetMain" alt="paper"></img>',
    '<img src="https://tse4.mm.bing.net/th/id/OIP.-o3BD_Mmr48QNQbW3DQjUgHaHx?rs=1&pid=ImgDetMain" alt="scissors"></img>',
]
let inputIndex = 0;

let playFunction = () =>{
    playButton.addEventListener('click', () =>{
        for (let i = 0; i < inputList.length; i++){
            if(input.value === inputList[i]){
                document.getElementById('image-container').innerHTML = outputList[i];
            }
        }
        for (let i = 1; i < inputList.length; i++){
            if(input.value === inputList[i]){
                document.getElementById('image-container').innerHTML = outputList[i];
            }
        }
        for (let i = 2; i < inputList.length; i++){
            if(input.value === inputList[i]){
                document.getElementById('image-container').innerHTML = outputList[i];
            }
        }
    function displayImage() {
        let num = Math.floor(Math.random());
        document.getElementById(outputList[num]);
    }        
    });
}

playFunction ();
displayImage ();

/* math.random possibly
let randomValue = a[Math.floor(a.length * Math.random())]; */