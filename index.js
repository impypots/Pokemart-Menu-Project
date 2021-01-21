let pokeicon1 = document.getElementById("pokeicon1");
let pokeicon2 = document.getElementById("pokeicon2");
let text1FirstLine = document.querySelector("#text1 p");
let text1SecondLine = document.querySelector("#text1 div");
let buysell = document.getElementById("buysell");
let textBox = document.getElementById("textBox");
let pyriteAudio = document.getElementById("pyriteAudio");
let buyPage = document.getElementById("buyPage");
let sellPage = document.getElementById("sellPage");
let buyTable = document.getElementById("buyTable");
let moneyIcon = document.getElementById("moneyicon");
let moneyIcon2 = document.getElementById("moneyicon2");
let buyCursor = document.getElementById("buyCursor");
let sellCursor = document.getElementById("sellCursor");
let highlightBorder = document.getElementById("highlightBorder");
let highlightBorder2 = document.getElementById("highlightBorder2");
let quantity = document.getElementById("quantity");
let itemDescription = document.getElementById("itemDescription");
let itemDescription2 = document.getElementById("itemDescription2");
let moneyCounter = document.getElementById("moneyCounter");
let amount = document.getElementById("amount");
let price = document.getElementById("price");
let buyTextBackground = document.getElementById("buyTextBackground");
let buyFirstLine = document.getElementById("buyFirstLine");
let buyOtherLines = document.getElementById("buyOtherLines");
let yesno = document.getElementById("yesno");
let sellTable = document.getElementById("sellTable");
let sellItemsQuantity = document.getElementById("sellItemsQuantity");

// Index of inventory array.
let itemI = 0;
let amountInt = 1;

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
let money = 1000
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
        console.log(parseInt(buyCursor.style.top), buyCursor.style.top, itemI)
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
        if(itemI < 9){
            if(inventory[itemI].price <= money){
        itemDescription.innerHTML = `${inventory[itemI].name}? <br>And how many <br>would you like?`;
        moneyCounter.style.display = 'block';
        amountInt = 1;
        amount.innerText = amountInt;
        price.innerText = (inventory[itemI].price * amountInt).toLocaleString();
        window.removeEventListener("keydown", keyDownBuy);
        window.addEventListener("keydown", keyDownCount)
            }
        } else {
            window.removeEventListener("keydown", keyDownBuy);
            window.addEventListener("keydown", keyDownStart);
            textBox.style.display = 'block';
            buyPage.style.display = 'none';
            text1FirstLine.innerHTML = 'May I help you with anything else?';
            text1SecondLine.innerHTML = '';
        }
    }
}

function keyDownCount(event) {
    if(event.code == 'ArrowDown' && amountInt > 1){
        amountInt--;
        amount.innerText = amountInt;
        price.innerText = (inventory[itemI].price * amountInt).toLocaleString();
    } else if(event.code == 'ArrowUp' && amountInt < 9 && inventory[itemI].price * (amountInt + 1) <= money){
        amountInt++;
        amount.innerText = amountInt;
        price.innerText = (inventory[itemI].price * amountInt).toLocaleString();
    } else if(event.code == 'Escape'){
        window.removeEventListener("keydown", keyDownCount);
        window.addEventListener("keydown", keyDownBuy);
        moneyCounter.style.display = 'none';
        itemDescription.innerText = inventory[itemI].description;
        amountInt = 1;
    } else if (event.code == 'Enter'){
        buyTextBackground.style.display = 'block';
        yesno.style.display = 'block';
        pokeicon2.style.display = 'block';
        pokeicon2.style.top = '-668px';
        buyFirstLine.style.display = 'inline';
        buyOtherLines.style.display = 'inline';
        buyFirstLine.innerHTML = `${inventory[itemI].name}, okay.<br>`;
        buyOtherLines.innerHTML = `And you wanted ${amountInt}.<br>That will be ${amountInt * inventory[itemI].price}.<br>Is that okay?`;
        window.removeEventListener("keydown", keyDownCount);
        window.addEventListener("keydown", keyDownYesNo);
    }
}

let yes = true;
function keyDownYesNo(event) {
    if(event.code == 'ArrowDown'){
        pokeicon2.style.top = '-588px';
        yes = false;
        console.log(yes)
    } else if(event.code == 'ArrowUp'){
        pokeicon2.style.top = '-668px';
        yes = true;
    } else if(event.code == 'Enter'){
        if(yes){
            money = money - (amountInt * inventory[itemI].price);
            inventory[itemI].quantity += amountInt;
            quantity.innerHTML = `Quantity held <br> ${inventory[itemI].name}x${inventory[itemI].quantity}`;
            moneyIcon.innerText = `${money.toLocaleString()}`;
            window.removeEventListener("keydown", keyDownYesNo);
            window.addEventListener("keydown", keyDownBuy);
            yesno.style.display = 'none';
            pokeicon2.style.display = 'none';
            buyTextBackground.style.display = 'none';
            buyFirstLine.style.display = 'none';
            buyOtherLines.style.display = 'none';
            moneyCounter.style.display = 'none';
            console.log(pokeicon2.style.top)
        } else if(!yes) {
            window.removeEventListener("keydown", keyDownYesNo);
            window.addEventListener("keydown", keyDownBuy);
            yesno.style.display = 'none';
            pokeicon2.style.display = 'none';
            buyTextBackground.style.display = 'none';
            buyFirstLine.style.display = 'none';
            buyOtherLines.style.display = 'none';
            moneyCounter.style.display = 'none';
            console.log(yes);
            yes = true;
        }
    }
}

function keyDownSell(event) {
    let currentCursor = parseInt(sellCursor.style.top || 248);
    let currentBorder = parseInt(highlightBorder2.style.top || 345);
    if(event.code == "ArrowDown" && currentCursor <= 675){
        sellCursor.style.top = (currentCursor + 61) + 'px';
        highlightBorder2.style.top = (currentBorder + 61) + 'px';
        itemI++;
        itemDescription2.innerText = inventory[itemI].description;
        console.log(itemI)
    } else if(event.code == 'ArrowUp' && currentCursor > 248){
        sellCursor.style.top = (currentCursor - 61) + 'px';
        highlightBorder2.style.top = (currentBorder - 61) + 'px';
        itemI--;
        itemDescription2.innerText = inventory[itemI].description;
        console.log(currentCursor)
    } else if(event.code == 'Enter'){

    } else if(event.code == 'Escape'){
        alert("You pressed escape!")
    }
}

//This function runs when user presses enter over 'BUY'
function buyPath() {
    alert("This is the 'BUY' Path!");
    textBox.style.display = 'none';
    buyPage.style.display = 'flex';
    moneyIcon.innerText = `${money.toLocaleString()}`;
    quantity.innerHTML = `Quantity held <br> ${inventory[0].name}x${inventory[0].quantity}`;
    itemDescription.innerText = inventory[0].description;
    window.removeEventListener("keydown", keyDownStart);
    window.addEventListener("keydown", keyDownBuy);
}

//This function runs when user presses enter over 'SELL'
function sellPath() {
    alert("This is the 'SELL' Path!");
    console.log(inventory[4].quantity)
    textBox.style.display = 'none';
    sellPage.style.display = 'flex';
    moneyIcon2.innerHTML = `${money.toLocaleString()}`;
    itemI = 0;
    itemDescription2.innerText = inventory[itemI].description;
    for(let i = 0; i < inventory.length; i++){
        sellItemsQuantity.innerHTML += `<p>X ${inventory[i].quantity} </p>`;
    }
    window.removeEventListener("keydown", keyDownStart);
    window.addEventListener("keydown", keyDownSell);
}

//This function runs when user presses enter over 'QUIT'
function quitPath() {
    alert("This is the 'QUIT' Path!");
    text1FirstLine.innerText = "We look forward to your next ";
    text1SecondLine.innerText = 'visit.'
    window.removeEventListener("keydown", keyDownStart);
    buysell.style.display = 'none';
}


console.log(inventory);