const row1column1 = document.getElementById("row1column1");
const row1column2 = document.getElementById("row1column2");
const row1column3 = document.getElementById("row1column3");
//---
const row2column1 = document.getElementById("row2column1");
const row2column2 = document.getElementById("row2column2");
const row2column3 = document.getElementById("row2column3");
//---
const row3column1 = document.getElementById("row3column1");
const row3column2 = document.getElementById("row3column2");
const row3column3 = document.getElementById("row3column3");

const alertP = document.querySelector("#alertP");

const turnViewColor = document.getElementById("turnViewColor");
const turnViewText = document.getElementById("turnViewText");


row1column1.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row1column1);

    if(addColorResult === true){
        addColor(row1column1, turns(row1column1));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row1column2.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row1column2);

    if(addColorResult === true){
        addColor(row1column2, turns(row1column2));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row1column3.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row1column3);

    if(addColorResult === true){
        addColor(row1column3, turns(row1column3));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row2column1.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row2column1);

    if(addColorResult === true){
        addColor(row2column1, turns(row2column1));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row2column2.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row2column2);

    if(addColorResult === true){
        addColor(row2column2, turns(row2column2));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row2column3.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row2column3);

    if(addColorResult === true){
        addColor(row2column3, turns(row2column3));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row3column1.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row3column1);

    if(addColorResult === true){
        addColor(row3column1, turns(row3column1));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row3column2.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row3column2);

    if(addColorResult === true){
        addColor(row3column2, turns(row3column2));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

row3column3.addEventListener('click', () => {
    console.log("click is working");
    let addColorResult = checkChoosen(row3column3);

    if(addColorResult === true){
        addColor(row3column3, turns(row3column3));
    }
    else{
        console.log("This place has already been chosen!");
    }
});

function turns (divClick){
    console.log("turn is working");
    if(lastTurn === null){
        lastTurn = "player1";
        console.log(lastTurn);
        updateTurnView(lastTurn);
        return lastTurn;
    }
    else if(lastTurn == "player1"){
        lastTurn = "player2";
        console.log(lastTurn);
        updateTurnView(lastTurn);
        return lastTurn;
    }
    else if(lastTurn == "player2"){
        lastTurn = "player1";
        console.log(lastTurn);
        updateTurnView(lastTurn);
        return lastTurn;
    }
    else{
        return console.log("Aqui fudeu");
    }
}

let lastTurn = null;


function checkChoosen (divClick){
    console.log("check is working");
    console.log(divClick.classList);
    if(divClick.classList[1] === null || divClick.classList[1] === undefined){
        return true;
    }
    else{
        return("This place has already been chosen!");
    }
}

function addColor(divClick, turn){
    console.log("color is working");
    if(divClick.classList.contains("blocks")){
        divClick.classList.add(`.${0}`, turn);
        console.log("color condition is working");
    }
    else{
        return("This place has already been chosen!");
    }
}

function updateTurnView (currentTurn){
    if(currentTurn == "player1"){
        turnViewColor.style.backgroundColor = "#add8e6";
        turnViewText.innerText = "It is Player 2 turn";
    }
    else if(currentTurn == "player2"){
        turnViewColor.style.backgroundColor = "#f08080";
        turnViewText.innerText = "It is Player 1 turn";
    }
};