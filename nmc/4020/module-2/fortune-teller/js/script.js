// Fully opaque card colors (no alpha).
const GOLD = "#4b3a14";
const BLUE = "#1e3a5f";
const NAVY = "#1c1c6b";
const RED  = "#5a1526";

// Array of fortune dictionaries/objects
const fortunes = [
    { outcome: "You will have an amazing day.", category: "Well-being & Growth", icon: "zmdi-sun", cardColor: GOLD },
    { outcome: "Something surprising is coming your way.", category: "Timing & Transitions", icon: "zmdi-time", cardColor: BLUE },
    { outcome: "A new opportunity is just around the corner.", category: "Career & Finance", icon: "zmdi-case", cardColor: NAVY },
    { outcome: "Good news is on the horizon.", category: "Timing & Transitions", icon: "zmdi-time", cardColor: BLUE },
    { outcome: "Be open to unexpected advice today.", category: "Timing & Transitions", icon: "zmdi-time", cardColor: BLUE },
    { outcome: "You will soon witness a miracle.", category: "Timing & Transitions", icon: "zmdi-time", cardColor: BLUE },
    { outcome: "You will travel to exotic places.", category: "Well-being & Growth", icon: "zmdi-sun", cardColor: GOLD },
    { outcome: "Your luck is about to take a turn.", category: "Timing & Transitions", icon: "zmdi-time", cardColor: BLUE },
    { outcome: "Your hard work will soon pay off.", category: "Career & Finance", icon: "zmdi-case", cardColor: NAVY },
    { outcome: "A fresh chapter is about to begin in your life.", category: "Well-being & Growth", icon: "zmdi-sun", cardColor: GOLD },
    { outcome: "An unexpected invitation will lead to a memorable connection.", category: "Personal Relationships", icon: "zmdi-favorite", cardColor: RED },
    { outcome: "You will find new inspiration.", category: "Personal Relationships", icon: "zmdi-favorite", cardColor: RED },
    { outcome: "You will meet a new old friend.", category: "Personal Relationships", icon: "zmdi-favorite", cardColor: RED },
    { outcome: "You have much to look forward to.", category: "Timing & Transitions", icon: "zmdi-time", cardColor: BLUE },
    { outcome: "Peace will anchor itself in your heart.", category: "Well-being & Growth", icon: "zmdi-sun", cardColor: GOLD },
    { outcome: "Your best investment is the one that brings value to others.", category: "Career & Finance", icon: "zmdi-case", cardColor: NAVY },
    { outcome: "A skill you have been quietly building is about to be noticed.", category: "Career & Finance", icon: "zmdi-case", cardColor: NAVY },
    { outcome: "A bold idea you have been holding back will find its audience.", category: "Career & Finance", icon: "zmdi-case", cardColor: NAVY },
    { outcome: "A conversation you have been putting off will bring you closer.", category: "Personal Relationships", icon: "zmdi-favorite", cardColor: RED },
    { outcome: "Someone is thinking of you more fondly than you realize.", category: "Personal Relationships", icon: "zmdi-favorite", cardColor: RED },
    { outcome: "The rest you give yourself now will return to you tenfold.", category: "Well-being & Growth", icon: "zmdi-sun", cardColor: GOLD },
    { outcome: "A small daily habit is quietly reshaping who you are becoming.", category: "Well-being & Growth", icon: "zmdi-sun", cardColor: GOLD },
    { outcome: "A door you thought was closed will open again soon.", category: "Timing & Transitions", icon: "zmdi-time", cardColor: BLUE }
];

const moods = [
    "Hopeful",
    "Curious",
    "Restless",
    "Overwhelmed",
    "Calm",
    "Uncertain"
];

const moodAdvice = [
    "Ride the momentum you already feel.",
    "Follow the question that keeps tugging at you.",
    "Channel that energy into one deliberate step.",
    "Breathe first. The path clears when you slow down.",
    "Your stillness is the strongest signal you have.",
    "You don't need the whole map, only the next step."
];

const focusChoices = [
    { label: "Let the cards decide",        category: "" },
    { label: "Myself and my growth",        category: "Well-being & Growth" },
    { label: "Love and friendships",        category: "Personal Relationships" },
    { label: "Work and money",              category: "Career & Finance" },
    { label: "Where my life is heading",    category: "Timing & Transitions" }
];

const iconAnimations = {
    "zmdi-sun": "anim-sun",
    "zmdi-time": "anim-time",
    "zmdi-case": "anim-case",
    "zmdi-favorite": "anim-heart"
};

/* ---------------------------- DOM references ---------------------------- */

const fortuneForm = document.querySelector('#fortuneForm');
const nameInput = document.querySelector('#namehere');
const focusSelect = document.querySelector('#focus');
const cardDeck = document.querySelector('#cardDeck');
const mainCard = document.querySelector('#mainCard');
const cardFront = document.querySelector('#cardFront');
const categoryName = document.querySelector('#categoryName');
const categoryIcon = document.querySelector('#categoryIcon');
const emblemContainer = document.querySelector('#emblemContainer');
const questionText = document.querySelector('#questionText');
const resultText = document.querySelector('#resultText');
const adviceText = document.querySelector('#adviceText');
const signText = document.querySelector('#signText');
const luckyText = document.querySelector('#luckyText');
const errorMsg = document.querySelector('#errorMsg');

let isProcessing = false;

/* ------------------------------- Helpers ------------------------------- */

focusChoices.forEach((choice, i) => focusSelect.add(new Option(choice.label, i)));

// Filters the list of fortune objects matching the given category (or returns all if category is empty)
function fortunePool(category) {
    if (category === "") return fortunes;
    return fortunes.filter(fortune => fortune.category === category);
}

/* ------------------------------ Main logic ------------------------------ */

function fortune() {
    if (isProcessing) return;

    const userName = nameInput.value.trim();

    if (userName === "") {
        errorMsg.textContent = "Please enter your name to reveal your fortune!";
        nameInput.focus();
        return;
    }

    errorMsg.textContent = "";
    isProcessing = true;

    // Gather the reading details
    const focus = focusChoices[Number(focusSelect.value)];
    const pool = fortunePool(focus.category);

    // Pick a fortune object from the matching pool
    const selectedFortune = pool[Math.floor(Math.random() * pool.length)];

    // Reset card animation states
    mainCard.classList.remove('is-flipped', 'is-drawing');

    // Step 1: Card Shuffling Sequence
    cardDeck.classList.add('shuffling');

    // Step 2: Draw top card from deck
    setTimeout(() => {
        cardDeck.classList.remove('shuffling');
        mainCard.classList.add('is-drawing');

        categoryName.textContent = selectedFortune.category;
        categoryIcon.className = `zmdi ${selectedFortune.icon}`;
        cardFront.style.backgroundColor = selectedFortune.cardColor;

        resultText.textContent = `${userName}, ${selectedFortune.outcome}`;

        emblemContainer.className = "tarot-frame";
        if (iconAnimations[selectedFortune.icon]) {
            emblemContainer.classList.add(iconAnimations[selectedFortune.icon]);
        }

        // Step 3: Flip card open in 3D
        setTimeout(() => {
            mainCard.classList.add('is-flipped');
            isProcessing = false;
        }, 400);

    }, 1000);
}

// Submitting the form draws a card.
fortuneForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fortune();
});