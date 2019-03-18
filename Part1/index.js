let keepTrack = [];


const play = (value) => {
    const player = document.getElementById('player');
    const element = document.getElementById(value);
    
    if (player.innerText === 'x') {
    player.innerText = 'o';
    element.innerText = 'x'
    keepTrack[value] = 'x'
} else { 
    player.innerText = 'x';
    element.innerText = 'o'
    keepTrack[value] = 'o'
} 
console.log(keepTrack);
}
let square1 = keepTrack[0]
let square2 = keepTrack[1]
let square3 = keepTrack[2]
let square4 = keepTrack[3]
let square5 = keepTrack[4]
let square6 = keepTrack[5]
let square7 = keepTrack[6]
let square8 = keepTrack[7]
let square9 = keepTrack[8]

if (square1 === square2 & square1 === square3) {
    window.alert('{square1} is the winner');
    
} else if (square4 === square5 & square4 === square6){
    window.alert('square1 is the winner');
} else if (square7 === square8 & square7 === square9){
    window.alert('{square7 is the winner}')
} else if (square1 === square4 & square1 === square7){
    window.alert('{square1 is the winner}')
} else if (square2 === square5 & square2 === square8){
    window.alert('{square2 is the winner}')
} else if (square3 === square6 & square3 === square9){
    window.alert('{square3 is the winner}')
} else if (square1 === square5 & square1 === square9){
    window.alert('{square1 is the winner}')
} else if (square3 === square5 & square3 === square7){
    window.alert('{square3 is the winner}')
} 
let fullBoard = true 
for (let i = 0; i < keepTrack.length; i++);
    if (keepTrack === undefined){
        fullBoard = false;

    } if (fullBoard = true){
        window.alert("CAT wins the game")
    }
    



