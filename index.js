let pokeicon1 = document.getElementById("pokeicon1");
let text1FirstLine = document.querySelector("#text1 p");
let text1SecondLine = document.querySelector("#text1 div");
let buysell = document.getElementById("buysell");
let textBox = document.getElementById("textBox");
let pyriteAudio = document.getElementById("pyriteAudio");
let buyPage = document.getElementById("buyPage");
let buyTable = document.getElementById("buyTable");
let moneyIcon = document.getElementById("moneyicon");
let buyCursor = document.getElementById("buyCursor");
let highlightBorder = document.getElementById("highlightBorder");
let quantity = document.getElementById("quantity");
let itemDescription = document.getElementById("itemDescription");

// Index of inventory array.
let itemI = 0;

let inventory = [
    {
        name: "HYPER POTION",
        quantity: 0,
        description: "Restores the HP of a POKeMON by 200 points.",
        price: 1200
    },
    {
        name: "SUPER POTION",
        quantity: 0,
        description: "Restores the HP of a POKeMON by 60 points.",
        price: 700
    },
    {
        name: "FULL HEAL",
        quantity: 0,
        description: "Heals all the status problems of one POKeMON.",
        price: 600
    },
    {
        name: "REVIVE",
        quantity: 0,
        description: "Revives a fainted POKeMON with half its HP.",
        price: 1500
    },
    {
        name: "ANTIDOTE",
        quantity: 0,
        description: "Heals a poisoned POKeMON.",
        price: 100
    },
    {
        name: "BURN HEAL",
        quantity: 0,
        description: "Heals POKeMON of a burn.",
        price: 250
    },
    {
        name: "ICE HEAL",
        quantity: 0,
        description: "Defrosts a frozen POKeMON.",
        price: 250
    },
    {
        name: "AWAKENING",
        quantity: 0,
        description: "Awakens a sleeping POKeMON.",
        price: 250
    },
    {
        name: "PARYLZ HEAL",
        quantity: 0,
        description: "Heals a paralyzed POKeMON.",
        price: 200
    }
]
let money = 12000
let pokeicon1Level = 2;

var audio = new Audio('29 - Pyrite Town.mp3');
function pyritePlay() {
audio.play();
}

console.log(inventory[0].description)
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

function keyDownBuy(event) {
    let currentCursor = parseInt(buyCursor.style.top || 130);
    let currentBorder = parseInt(highlightBorder.style.top || -15);
    if(event.code == 'ArrowDown'){
        console.log(parseInt(buyCursor.style.top), buyCursor.style.top)
        if((parseInt(buyCursor.style.top) || 0) < 760){
            buyCursor.style.top = (currentCursor + 70) + 'px';
            highlightBorder.style.top = (currentBorder + 70) + 'px'
            console.log(buyCursor.style.top);
            if(parseInt(buyCursor.style.top) < 760){
                itemI++;
            quantity.innerHTML = `Quantity held <br> ${inventory[itemI].name}x${inventory[itemI].quantity}`;
            itemDescription.innerText = inventory[itemI].description;
            } else {
                itemI++
                quantity.innerHTML = `Quantity held <br>`
                itemDescription.innerText = 'Quit shopping'
            }
        }
    } else if (event.code == 'ArrowUp'){
        if(parseInt(buyCursor.style.top) > 130){
            itemI--;
            quantity.innerHTML = `Quantity held <br> ${inventory[itemI].name}x${inventory[itemI].quantity}`;
            itemDescription.innerText = inventory[itemI].description;
            buyCursor.style.top = (currentCursor - 70) + 'px';
            highlightBorder.style.top = (currentBorder - 70) + 'px';
        }
    } else if (event.code == 'Enter'){
        alert("You pressed enter!")
    }
}

//This function runs when user presses enter over 'BUY'
function buyPath() {
    alert("This is the 'BUY' Path!");
    textBox.style.display = 'none';
    buyPage.style.display = 'flex';
    moneyIcon.innerText = `${money.toLocaleString()}`;
    quantity.innerHTML = `Quantity held <br> ${inventory[0].name}x${inventory[0].quantity}`;
    itemDescription.innerText = inventory[0].description
    window.removeEventListener("keydown", keyDownStart);
    window.addEventListener("keydown", keyDownBuy);
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
    window.removeEventListener("keydown", keyDownStart);
    buysell.style.display = 'none';
}


console.log(inventory)