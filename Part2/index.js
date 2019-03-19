console.log("The house always wins");

let id = document.getElementById();
let color = document.getElementById();
document.getElementById('diamonds').style.color = 'red';
document.getElementById('clubs').style.color = 'black';
document.getElementById('hearts').style.color = "red";
document.getElementById('spades').style.color = 'black';

let setCard = () => {
    let card = document.getElementById(id.value);
    document.getElementById('diamonds').id.value = "A";
    document.getElementById('clubs').id.value = "A";
    document.getElementById('hearts').id.value = "A";
    document.getElementById('spades').id.value = "A";
    console.log(card)
    card.style.value = color.value;
}

