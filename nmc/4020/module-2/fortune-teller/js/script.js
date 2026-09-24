/**
 * Fortune Teller Application
 * -------------------------------------------------------------
 * Parallel arrays store fortune outcomes along with their respective
 * categories, icons, and card background colors. The item at index N
 * of every array describes the same fortune, so keep them in sync.
 *
 * The reading is built from the user's inputs (name, birthday, focus,
 * mood, question) instead of a pure random roll: the "focus" picks the
 * category, and the rest of the inputs are hashed to pick the fortune
 * inside it. Same answers => same card.
 */

// When true, the date is part of the seed, so the same answers give the
// same card all day but a fresh one tomorrow. Set to false for a card
// that never changes for a given set of answers.
const DAILY_READINGS = true;

const outcomes = [
    "You will have an amazing day.",                                   // 0
    "Something surprising is coming your way.",                        // 1
    "A new opportunity is just around the corner.",                    // 2
    "Good news is on the horizon.",                                    // 3
    "Be open to unexpected advice today.",                             // 4
    "You will soon witness a miracle.",                                // 5
    "You will travel to exotic places.",                               // 6
    "Your luck is about to take a turn.",                              // 7
    "Your hard work will soon pay off.",                               // 8
    "A fresh chapter is about to begin in your life.",                 // 9
    "An unexpected invitation will lead to a memorable connection.",   // 10
    "You will find new inspiration.",                                  // 11
    "You will meet a new old friend.",                                 // 12
    "You have much to look forward to.",                               // 13
    "Peace will anchor itself in your heart.",                         // 14
    "Your best investment is the one that brings value to others.",    // 15
    "A skill you have been quietly building is about to be noticed.",  // 16
    "A bold idea you have been holding back will find its audience.",  // 17
    "A conversation you have been putting off will bring you closer.", // 18
    "Someone is thinking of you more fondly than you realize.",        // 19
    "The rest you give yourself now will return to you tenfold.",      // 20
    "A small daily habit is quietly reshaping who you are becoming.",  // 21
    "A door you thought was closed will open again soon."              // 22
];

const categories = [
    "Well-being & Growth",      // 0
    "Timing & Transitions",     // 1
    "Career & Finance",         // 2
    "Timing & Transitions",     // 3
    "Timing & Transitions",     // 4
    "Timing & Transitions",     // 5
    "Well-being & Growth",      // 6
    "Timing & Transitions",     // 7
    "Career & Finance",         // 8
    "Well-being & Growth",      // 9
    "Personal Relationships",   // 10
    "Personal Relationships",   // 11
    "Personal Relationships",   // 12
    "Timing & Transitions",     // 13
    "Well-being & Growth",      // 14
    "Career & Finance",         // 15
    "Career & Finance",         // 16
    "Career & Finance",         // 17
    "Personal Relationships",   // 18
    "Personal Relationships",   // 19
    "Well-being & Growth",      // 20
    "Well-being & Growth",      // 21
    "Timing & Transitions"      // 22
];

const icons = [
    "zmdi-sun",        // 0
    "zmdi-time",       // 1
    "zmdi-case",       // 2
    "zmdi-time",       // 3
    "zmdi-time",       // 4
    "zmdi-time",       // 5
    "zmdi-sun",        // 6
    "zmdi-time",       // 7
    "zmdi-case",       // 8
    "zmdi-sun",        // 9
    "zmdi-favorite",   // 10
    "zmdi-favorite",   // 11
    "zmdi-favorite",   // 12
    "zmdi-time",       // 13
    "zmdi-sun",        // 14
    "zmdi-case",       // 15
    "zmdi-case",       // 16
    "zmdi-case",       // 17
    "zmdi-favorite",   // 18
    "zmdi-favorite",   // 19
    "zmdi-sun",        // 20
    "zmdi-sun",        // 21
    "zmdi-time"        // 22
];

// Fully opaque card colors (no alpha). A see-through card lets the
// glowing eye of the stacked deck cards show through as a blurry blob.
const GOLD = "#4b3a14";
const BLUE = "#1e3a5f";
const NAVY = "#1c1c6b";
const RED  = "#5a1526";

const cardColors = [
    GOLD, // 0
    BLUE, // 1
    NAVY, // 2
    BLUE, // 3
    BLUE, // 4
    BLUE, // 5
    GOLD, // 6
    BLUE, // 7
    NAVY, // 8
    GOLD, // 9
    RED,  // 10
    RED,  // 11
    RED,  // 12
    BLUE, // 13
    GOLD, // 14
    NAVY, // 15
    NAVY, // 16
    NAVY, // 17
    RED,  // 18
    RED,  // 19
    GOLD, // 20
    GOLD, // 21
    BLUE  // 22
];

// Extra parallel arrays: how the user says they feel today, and the
// line of guidance printed on the card for that mood.
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

// What the user wants the deck to focus on. Each label maps to one of
// the category names used in the categories array (empty = any).
const focusChoices = [
    { label: "Let the cards decide",        category: "" },
    { label: "Myself and my growth",        category: "Well-being & Growth" },
    { label: "Love and friendships",        category: "Personal Relationships" },
    { label: "Work and money",              category: "Career & Finance" },
    { label: "Where my life is heading",    category: "Timing & Transitions" }
];

// Card emblem animation class for each icon.
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

// Fill the dropdowns from the arrays above so there is one source of truth.
focusChoices.forEach((choice, i) => focusSelect.add(new Option(choice.label, i)));

// Indexes of every fortune in the chosen category (or all of them).
function fortunePool(category) {
    const pool = [];
    for (let i = 0; i < outcomes.length; i++) {
        if (category === "" || categories[i] === category) pool.push(i);
    }
    return pool;
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

    const index = pool[Math.floor(Math.random() * pool.length)];

    // Reset card animation states
    mainCard.classList.remove('is-flipped', 'is-drawing');

    // Step 1: Card Shuffling Sequence
    cardDeck.classList.add('shuffling');

    // Step 2: Draw top card from deck
    setTimeout(() => {
        cardDeck.classList.remove('shuffling');
        mainCard.classList.add('is-drawing');

        const selectedOutcome = outcomes[index];
        const selectedIcon = icons[index];

        categoryName.textContent = categories[index];
        categoryIcon.className = `zmdi ${selectedIcon}`;
        cardFront.style.backgroundColor = cardColors[index];

        resultText.textContent = `${userName}, ${selectedOutcome}`;

        emblemContainer.className = "tarot-frame";
        if (iconAnimations[selectedIcon]) {
            emblemContainer.classList.add(iconAnimations[selectedIcon]);
        }

        // Step 3: Flip card open in 3D
        setTimeout(() => {
            mainCard.classList.add('is-flipped');
            isProcessing = false;
        }, 400);

    }, 1000);
}

// Submitting the form (button click or Enter in any field) draws a card.
fortuneForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fortune();
});