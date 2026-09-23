/**
 * Fortune Teller Application
 * -------------------------------------------------------------
 * Parallel arrays store fortune outcomes along with their respective 
 * categories, icons, and custom background colors.
 */

const outcomes = [
    "You will have an amazing day.",
    "Something surprising is coming your way.",
    "A new opportunity is just around the corner.",
    "Good news is on the horizon.",
    "Be open to unexpected advice today.",
    "You will soon witness a miracle.",
    "You will travel to exotic places.",
    "Your luck is about to take a turn.",
    "Your hard work will soon pay off.",
    "A fresh chapter is about to begin in your life.",
    "An unexpected invitation will lead to a memorable connection.",
    "You will find new inspiration.",
    "You will meet a new old friend.",
    "You have much to look forward to.",
    "Peace will anchor itself in your heart.",
    "Your best investment is the one that brings value to others."
];

const categories = [
    "Well-being & Growth",
    "Timing & Transitions",
    "Career & Finance",
    "Timing & Transitions",
    "Timing & Transitions",
    "Timing & Transitions",
    "Well-being & Growth",
    "Timing & Transitions",
    "Career & Finance",
    "Well-being & Growth",
    "Personal Relationships",
    "Personal Relationships",
    "Personal Relationships",
    "Timing & Transitions",
    "Well-being & Growth",
    "Career & Finance"
];

const icons = [
    "zmdi-sun",
    "zmdi-time",
    "zmdi-case",
    "zmdi-time",
    "zmdi-time",
    "zmdi-time",
    "zmdi-sun",
    "zmdi-time",
    "zmdi-case",
    "zmdi-sun",
    "zmdi-favorite",
    "zmdi-favorite",
    "zmdi-favorite",
    "zmdi-time",
    "zmdi-sun",
    "zmdi-case"
];

const cardColors = [
    "rgba(235, 198, 66, 0.25)",
    "rgba(81, 131, 189, 0.25)",
    "rgba(22, 22, 125, 0.25)",
    "rgba(81, 131, 189, 0.25)",
    "rgba(81, 131, 189, 0.25)",
    "rgba(81, 131, 189, 0.25)",
    "rgba(235, 198, 66, 0.25)",
    "rgba(81, 131, 189, 0.25)",
    "rgba(22, 22, 125, 0.25)",
    "rgba(235, 198, 66, 0.25)",
    "rgba(237, 17, 46, 0.25)",
    "rgba(237, 17, 46, 0.25)",
    "rgba(237, 17, 46, 0.25)",
    "rgba(81, 131, 189, 0.25)",
    "rgba(235, 198, 66, 0.25)",
    "rgba(22, 22, 125, 0.25)"
];

const nameInput = document.querySelector('#namehere');
const fortuneBtn = document.querySelector('#fortuneBtn');
const cardDeck = document.querySelector('#cardDeck');
const mainCard = document.querySelector('#mainCard');
const cardFront = document.querySelector('#cardFront');
const categoryName = document.querySelector('#categoryName');
const categoryIcon = document.querySelector('#categoryIcon');
const emblemContainer = document.querySelector('#emblemContainer');
const resultText = document.querySelector('#resultText');
const errorMsg = document.querySelector('#errorMsg');

let isProcessing = false;

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

    // Reset card animation states
    mainCard.classList.remove('is-flipped', 'is-drawing');

    // Step 1: Card Shuffling Sequence
    cardDeck.classList.add('shuffling');

    const randomIndex = Math.floor(Math.random() * outcomes.length);

    // Step 2: Draw top card from deck
    setTimeout(() => {
        cardDeck.classList.remove('shuffling');
        mainCard.classList.add('is-drawing');

        const selectedOutcome = outcomes[randomIndex];
        const selectedCategory = categories[randomIndex];
        const selectedIcon = icons[randomIndex];
        const selectedColor = cardColors[randomIndex];

        categoryName.textContent = selectedCategory;
        categoryIcon.className = `zmdi ${selectedIcon}`;
        resultText.textContent = `${userName}, ${selectedOutcome.toLowerCase()}`;
        cardFront.style.backgroundColor = selectedColor;

        emblemContainer.className = "tarot-frame";
        if (selectedIcon === "zmdi-sun") {
            emblemContainer.classList.add("anim-sun");
        } else if (selectedIcon === "zmdi-time") {
            emblemContainer.classList.add("anim-time");
        } else if (selectedIcon === "zmdi-case") {
            emblemContainer.classList.add("anim-case");
        } else if (selectedIcon === "zmdi-favorite") {
            emblemContainer.classList.add("anim-heart");
        }

        // Step 3: Flip card open in 3D
        setTimeout(() => {
            mainCard.classList.add('is-flipped');
            isProcessing = false;
        }, 400);

    }, 1000);
}

fortuneBtn.addEventListener('click', fortune);

nameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        fortune();
    }
});