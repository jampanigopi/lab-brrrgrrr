// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
    Patty: 80,
    Cheese: 10,
    Tomatoes: 20,
    Onions: 20,
    Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
    Patty: true,
    Cheese: true,
    Tomatoes: true,
    Onions: true,
    Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
    renderPatty();
    renderCheese();
    renderTomatoes();
    renderOnions();
    renderLettuce();
    renderButtons();
    renderIngredientsBoard();
    renderPrice();
    // console.log(state);
}

function renderPatty() {
    let patty = document.querySelector('#patty');
    //you can also use getElementById
    if (state.Patty) {
        patty.style.display = 'inherit';
    } else {
        patty.style.display = 'none';
    }
}

function renderCheese() {
    //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
    let patty = document.querySelector('#cheese');
    //you can also use getElementById
    if (state.Cheese) {
        patty.style.display = 'inherit';
    } else {
        patty.style.display = 'none';
    }
}

function renderTomatoes() {
    //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
    let patty = document.querySelector('#tomato');
    //you can also use getElementById
    if (state.Tomatoes) {
        patty.style.display = 'inherit';
    } else {
        patty.style.display = 'none';
    }
}

function renderOnions() {
    //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
    let patty = document.querySelector('#onion');
    //you can also use getElementById
    if (state.Onions) {
        patty.style.display = 'inherit';
    } else {
        patty.style.display = 'none';
    }
}

function renderLettuce() {
    //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
    let patty = document.querySelector('#lettuce');
    //you can also use getElementById
    if (state.Lettuce) {
        patty.style.display = 'inherit';
    } else {
        patty.style.display = 'none';
    }
}

document.querySelector('.btn-patty').onclick = function () {
    state.Patty = !state.Patty;
    renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector('.btn-cheese').onclick = function () {
    state.Cheese = !state.Cheese;
    renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector('.btn-tomatoes').onclick = function () {
    state.Tomatoes = !state.Tomatoes;
    renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector('.btn-onions').onclick = function () {
    state.Onions = !state.Onions;
    renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector('.btn-lettuce').onclick = function () {
    state.Lettuce = !state.Lettuce;
    renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
const renderButtons = () => {
    for (const key in ingredients) {
        if (!state[key]) {
            var element = document.getElementById(`b${key}`);
            element.classList.remove('active');
        } else {
            var element = document.getElementById(`b${key}`);
            element.classList.add('active');
        }
    }
};

//Challenge 2 - Render only the items selected in the ingredients board based on the state
const renderIngredientsBoard = () => {
    str = '<h3>Ingredients</h3>';
    for (const key in state) {
        if (state[key]) {
            // console.log(key);
            str += `<p class="items">${key}</p>`;
            document.getElementById('mc').innerHTML = str;
        } else {
            str += '';
            document.getElementById('mc').innerHTML = str;
        }
    }
};

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
const renderPrice = () => {
    s = 0;
    for (const key in ingredients) {
        if (state[key]) {
            s += ingredients[key];
        }
    }
    document.getElementById('pd').innerText = `INR ${s}`;
};