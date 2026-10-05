let drinkDisplayMap = {
    "Latte": "Latte",
    "IcedMatchaLatte": "Iced Matcha Latte",
    "ChaiTea": "Chai Tea",
    "BubbleTea": "Bubble Tea",
    "ThaiIcedTea": "Thai Iced Tea"
};

let drinkMenu = {
    "Latte": "A smooth espresso drink made with steamed milk and a little foam.",
    "IcedMatchaLatte": "A refreshing green tea drink with milk and a hint of sweetness.",
    "ChaiTea": "A spiced black tea blended with cinnamon, cardamom, and cloves.",
    "BubbleTea": "A sweet milk tea with chewy tapioca pearls.",
    "ThaiIcedTea": "Strong black tea, orange color, sweetened and served over ice with cream."
};

let drinkArray = ["Latte", "IcedMatchaLatte", "ChaiTea", "BubbleTea", "ThaiIcedTea"];
let drinkList = document.querySelector("#adrink");

drinkList.innerHTML += `<option value="" hidden selected>Select a drink</option>`;

for (let key in drinkDisplayMap) {
    drinkList.innerHTML += `<option value="${key}">${drinkDisplayMap[key]}</option>`;
}

function serveDrink() {
    let sName = document.querySelector("#adrink").value;
    let aboutMe = document.querySelector('#aboutme');
    let image = document.querySelector('#image');
    if (drinkMenu[sName]) {
        aboutMe.innerHTML = drinkMenu[sName];
        image.innerHTML = "<img src='beveragepics/" + sName + ".png' alt=" + sName + ">";
    } else {
        aboutMe.innerHTML = sName + " isn't a valid drink";
        image.innerHTML = "<img src='images/placeholder.png' alt='placeholder'>";
    }
} 