let pokeicon1 = document.getElementById("pokeicon1");
let text1FirstLine = document.querySelector("#text1 p");
let text1SecondLine = document.querySelector("#text1 div");
let buysell = document.getElementById("buysell");
let textBox = document.getElementById("textBox");
let pyriteAudio = document.getElementById("pyriteAudio");
let buyPage = document.getElementById("buyPage");
let buyTable = document.getElementById("buyTable");
let moneyIcon = document.getElementById("moneyicon");

let inventory = {
    "HYPER POTION": 0,
    "SUPER POTION": 0,
    "FULL HEAL": 0,
    "REVIVE": 0,
    "ANTIDOTE": 0,
    "BURN HEAL": 0,
    "ICE HEAL": 0,
    "AWAKENING": 0,
    "PARLYZ HEAL": 0
}
let money = 12000
let pokeicon1Level = 2;

var audio = new Audio('29 - Pyrite Town.mp3');
function pyritePlay() {
audio.play();
}

window.addEventListener("keydown", keyDownStart)

function keyDownStart(event) {
    if(event.code == 'ArrowDown'){
        if(pokeicon1Level >= 2){
            pokeicon1.style.top = '110px'
            pokeicon1Level -= 1;
            //pyritePlay();
            //Audio(url) to be added
        } else if(pokeicon1Level === 1){
            pokeicon1.style.top = '180px'
            pokeicon1Level -= 1;
            //Audio(url) to be added
        }
    }
    if(event.code == 'ArrowUp'){
        if(pokeicon1Level <= 0){
            pokeicon1.style.top = '110px'
            pokeicon1Level += 1;
            //Audio(url) to be added
        } else if(pokeicon1Level === 1){
            pokeicon1.style.top = '40px'
            pokeicon1Level += 1;
            //Audio(url) to be added
        }
    }
    if(event.code == 'Enter'){
        if(pokeicon1Level === 2){
            buyPath();
            //pyritePlay();
        } else if (pokeicon1Level === 1){
            sellPath()
        } else if(pokeicon1Level <= 0){
            quitPath()
        }
    }
    console.log(`key=${event.key},code=${event.code}`);
}

//This function runs when user presses enter over 'BUY'
function buyPath() {
    alert("This is the 'BUY' Path!");
    textBox.style.display = 'none';
    buyPage.style.display = 'flex';
    moneyIcon.innerText = `${money.toLocaleString()}`
}

//This function runs when user presses enter over 'SELL'
function sellPath() {
    alert("This is the 'SELL' Path!");
    textBox.style.display = 'none';
}

//This function runs when user presses enter over 'QUIT'
function quitPath() {
    alert("This is the 'QUIT' Path!");
    text1FirstLine.innerText = "We look forward to your next ";
    text1SecondLine.innerText = 'visit.'
    window.removeEventListener("keydown", keyDownFunction);
    buysell.style.display = 'none';
}


console.log(inventory)