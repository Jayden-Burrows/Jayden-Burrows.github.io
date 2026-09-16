// const output = document.getElementById('output');
// const img = document.getElementById('photo');
const count = document.getElementById('count');
const directory = document.getElementById('directory');
const roomNumInput = document.getElementById('roomNum');
const roomNumBtn = document.getElementById('roomNumBtn');
const errorMsg = document.getElementById('errorMsg');

const occupants = [
    "TACO Closet",
    "Storage",
    "Lilian F. and Reagan B",
    "Claire S.",
    "Kyla S.",
    "Anthony D.",
    "Lauren B.",
    "Emily T."
]

const occupantPix = [
    "taco.jpeg",
    "storage.jpeg",
    "lilian-reagan.jpeg",
    "claire.jpeg",
    "kyla.jpeg",
    "anthony.jpeg",
    "lauren.jpeg",
    "emily.jpeg",
]

const roomLetters = "abcdefgh";

function appendRoom(index) {
    let li = document.createElement('li');
    let occupantCard = document.createElement('div');
    occupantCard.classList.add('occupant-card');
    let img = document.createElement('img');
    img.src = "images/" + occupantPix[index];
    img.alt = occupants[index];
    img.width = 180;
    img.height = 270;
    occupantCard.appendChild(img);
    let p = document.createElement('p');
    p.textContent = occupants[index];
    occupantCard.appendChild(p);
    li.appendChild(occupantCard);
    directory.appendChild(li);
    errorMsg.textContent = '';
}

function searchRoom() {
    let roomNum = roomNumInput.value;
    try {
        let [beforeLetter, letter] = roomNum.split('403');
        letter = letter.toLowerCase();
        if (!roomLetters.includes(letter) || letter == '') {
            directory.replaceChildren();
            throw new Error("Please enter a valid room letter.");
        } else if (beforeLetter != '') {
            directory.replaceChildren();
            throw new Error("Please enter a valid room number.");
        }
        let index = roomLetters.indexOf(letter);
        directory.replaceChildren();
        appendRoom(index);
    } catch (error) {
        errorMsg.textContent = error.message;
    }
}

roomNumBtn.addEventListener('click', () => {
    searchRoom();
})

document.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        searchRoom();
    }
})

for (let i = 0; i < occupants.length; i++) {
    appendRoom(i);
}

// output.innerHTML = occupants[index];
// img.src = "images/" + occupantPix[index];
// img.alt = occupants[index];
count.innerHTML = occupants.length;