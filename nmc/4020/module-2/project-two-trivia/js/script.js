const categoriesPage = document.getElementById('categories-page');
const categoryError = document.getElementById('categoryError');
const questionsPage = document.getElementById('questions-page');
const questionsGrid = document.getElementById('questions-grid');
const questionPage = document.getElementById('question-page');
const score = document.getElementById('score');
const difficultyScores = ["easy", "medium", "hard"]
let questions = [];
// Will contain points for each question and the points assigned the user's answer (either 0 or the points assigned for the question)
let scores = []
let lastScore;

// Used AI to quickly generate this section, so I could quickly draft out the pages 
// ---------- Categories --------------
const categories = [
    { name: "Science", value: "science", icon: "zmdi-eyedropper" },
    { name: "Film and TV", value: "film_and_tv", icon: "zmdi-videocam" },
    { name: "Society and Culture", value: "society_and_culture", icon: "zmdi-accounts" },
    { name: "Music", value: "music", icon: "zmdi-audio" },
    { name: "Geography", value: "geography", icon: "zmdi-globe" },
    { name: "Arts and Literature", value: "arts_and_literature", icon: "zmdi-palette" },
    { name: "History", value: "history", icon: "zmdi-time-restore" },
    { name: "Food and Drink", value: "food_and_drink", icon: "zmdi-pizza" },
    { name: "Sports and Leisure", value: "sport", icon: "zmdi-bike" },
    { name: "General Knowledge", value: "general_knowledge", icon: "zmdi-collection-bookmark" }
];

// Function to render category cards
function renderCategoryCards(items) {
    const container = document.getElementById('categories');

    const cardsHTML = items.map(cat => `
        <label class="category-card">
          <input type="checkbox" name="category[]" value="${cat.value}">
          <i class="zmdi ${cat.icon}"></i>
          <span class="category-name">${cat.name}</span>
        </label>
      `).join('');

    container.innerHTML = cardsHTML;
}

// Generate cards on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryCards(categories);
});

// ---------- Categories --------------

function qa() {
    // 1. Make first-page disappear and second-page appear
    // 2. Get selected categories
    // 3. Make request for selected categories one at a time
    // 4. populate columns one at a time
    // 5. make it each is a button that makes a popup appear
    // 6. points bar at the bottom
    const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    const selectedCategories = Array.from(checkedBoxes).map(box => box.value);

    if (selectedCategories.length < 5) {
        categoryError.textContent = "Please select at least 5 categories";
    } else {
        categoriesPage.style.display = 'none';
        questionsPage.style.display = 'block';
        for (let i = 0; i < 5; i++) {
            // randomly choose an answer
            const randomIndex = Math.floor(Math.random() * selectedCategories.length);
            // [0] because splice() returns an array
            const selectedCategory = selectedCategories.splice(randomIndex, 1)[0];
            getCategory(i, selectedCategory);

        }

        // $.getJSON('https://the-trivia-api.com/v2/questions/', data => {
        //     divLoad.innerHTML = "";

        //     theAnswer = [];
        //     scores = [];
        //     maxPoints = 0;
        //     userPoints = 0;

        //     // Sorting the questions by difficulty
        //     // Note: I used AI to see how people typically sort by a custom order
        //     data.sort((a, b) => difficultyScores.indexOf(a['difficulty']) - difficultyScores.indexOf(b['difficulty']))

        //     divLoad.replaceChildren();
        //     for (let i = 0; i < 10; i++) {
        //         const questionContainer = document.createElement('div');
        //         questionContainer.classList.add("question");
        //         // Equivalent to step 7, just using createElement because it's more programmatic
        //         const cat = document.createElement('h3');
        //         cat.textContent = data[i].category.replaceAll('_', ' ');

        //         const question = document.createElement('h6')
        //         question.textContent = data[i].question.text;

        //         const correctAnswer = document.createElement('p');
        //         correctAnswer.id = "answers" + i;
        //         correctAnswer.style.display = "none";

        //         theAnswer.push(data[i].correctAnswer)

        //         const answerChoices = document.createElement('select');
        //         answerChoices.onchange = (e) => showAnswer(i, e);

        //         const placeholderOption = document.createElement('option');
        //         placeholderOption.selected = true;
        //         placeholderOption.hidden = true;
        //         placeholderOption.disabled = true;
        //         placeholderOption.value = '';
        //         placeholderOption.textContent = 'Choose an option...';
        //         answerChoices.appendChild(placeholderOption);

        //         let possibleAnswerChoices = [...data[i].incorrectAnswers, data[i].correctAnswer];
        //         // Used AI to help me randomize the order of the choices
        //         for (let j = 0; j < 4; j++) {
        //             // randomly choose an answer
        //             const randomIndex = Math.floor(Math.random() * possibleAnswerChoices.length);
        //             // Splice removes the item from the array and returns the item in an array 
        //             // so use [0] to get that one answer from the possible answerChoices
        //             const possibleAnswer = possibleAnswerChoices.splice(randomIndex, 1)[0];

        //             const answerChoice = document.createElement('option')
        //             answerChoice.textContent = possibleAnswer;
        //             answerChoice.value = possibleAnswer;
        //             answerChoices.appendChild(answerChoice);
        //         }

        //         questionContainer.appendChild(cat);
        //         questionContainer.appendChild(question);
        //         questionContainer.appendChild(correctAnswer);
        //         questionContainer.appendChild(answerChoices);
        //         divLoad.appendChild(questionContainer);

        //         // Assign points to each question based on difficulty
        //         scores.push({});
        //         scores[i]['maxPoints'] = assignPoints(data[i]['difficulty']); // Points for the question
        //         scores[i]['userPoints'] = 0; // The points awarded to the user based on their current answer
        //     }
        //     score.style.display = 'block';
        //     maxPoints = scores.reduce((sum, score) => { return sum + score['maxPoints'] }, 0);
        //     score.textContent = `0 out of ${maxPoints} points`;
        // });
    }
}

function getCategory(i, category) {
    let request = `https://the-trivia-api.com/v2/questions/?limit=5&categories=${category}`;
    $.getJSON(request, data => {
        const categoryColumn = document.createElement('div');
        // Note: I used AI to see how people typically sort by a custom order
        data.sort((a, b) => difficultyScores.indexOf(a['difficulty']) - difficultyScores.indexOf(b['difficulty']))

        const catHeader = getHeader(data, i);
        categoryColumn.appendChild(catHeader);

        questions[i] = []
        // iterate over the questions
        for (let j = 0; j < 5; j++) {
            questions[i].push(data[j]);

            let questionPanel = createQuestionPanel(i, j);
            categoryColumn.appendChild(questionPanel);
        }

        questionsGrid.appendChild(categoryColumn);
    });
}

function getHeader(data, i) {
    const catHeader = document.createElement('div');
    catHeader.classList.add('catHeader');
    const cat = document.createElement('h3');
    cat.textContent = data[i].category.replaceAll('_', ' ');
    catHeader.appendChild(cat);

    return catHeader;
}

function createQuestionPanel(i, j) {
    const questionPanel = document.createElement('button');
    questionPanel.id = "questionPanel" + i + j;
    questionPanel.classList.add('catHeader');
    questionPanel.onclick = (e) => showQuestion(i, j, e.currentTarget);

    const pointsAmt = document.createElement('h3');
    pointsAmt.textContent = (j + 1) * 100;
    questionPanel.appendChild(pointsAmt);

    return questionPanel;
}

function showQuestion(i, j, questionPanel) {
    const questionContainer = createQuestion(i, j);
    questionPage.replaceChildren(questionContainer);

    questionPage.style.display = 'block';
    questionsPage.style.display = 'none';
    questionPanel.disabled = true;
}

function createQuestion(i, j) {
    const data = questions[i][j];

    const questionContainer = document.createElement('div');
    questionContainer.classList.add("question");
    // Equivalent to step 7, just using createElement because it's more programmatic

    const question = document.createElement('h6')
    question.textContent = data.question.text;
    questionContainer.appendChild(question);

    const correctAnswerDisplay = document.createElement('p');
    correctAnswerDisplay.id = "answers" + i + j;
    correctAnswerDisplay.style.display = "none";
    questionContainer.appendChild(correctAnswerDisplay);

    let possibleAnswerChoices = [...data.incorrectAnswers, data.correctAnswer];
    const answerChoices = createAnswerChoices(i, j, possibleAnswerChoices);
    questionContainer.appendChild(answerChoices);

    return questionContainer;
}

function createAnswerChoices(i, j, possibleAnswerChoices) {
    const answerChoices = document.createElement('select');
    answerChoices.onchange = (e) => showAnswer(i, j, e);
    createPlaceholderOption(answerChoices);
    randomizeAnswerChoices(answerChoices, possibleAnswerChoices);

    return answerChoices;
}

function createPlaceholderOption(answerChoices) {
    const placeholderOption = document.createElement('option');
    placeholderOption.selected = true;
    placeholderOption.hidden = true;
    placeholderOption.disabled = true;
    placeholderOption.value = '';
    placeholderOption.textContent = 'Choose an option...';
    answerChoices.appendChild(placeholderOption);
}

function randomizeAnswerChoices(answerChoices, possibleAnswerChoices) {
    // k could be i or j, but those letters are used to represent
    // the column and row, so I'll use k
    for (let k = 0; k < 4; k++) {
        // randomly choose an answer
        const randomIndex = Math.floor(Math.random() * possibleAnswerChoices.length);
        // Splice removes the item from the array and returns the item in an array 
        // so use [0] to get that one answer from the possible answerChoices
        const possibleAnswer = possibleAnswerChoices.splice(randomIndex, 1)[0];

        const answerChoice = document.createElement('option')
        answerChoice.textContent = possibleAnswer;
        answerChoice.value = possibleAnswer;
        answerChoices.appendChild(answerChoice);
    }
}

function showAnswer(i, j, e) {
    let id = "answers" + i + j;
    // Get the dropdown 
    const selectedInput = e.target;
    // Get the user-selected answer 
    const selectedAnswerValue = selectedInput.value;
    let selectedAnswerBox = document.getElementById(id);
    if (selectedAnswerValue === questions[i][j].correctAnswer) {
        selectedAnswerBox.textContent = "Correct! The answer is: " + questions[i][j].correctAnswer;
    } else {
        selectedAnswerBox.textContent = "Wrong answer. Correct Answer: " + questions[i][j].correctAnswer;
    }
    selectedInput.disabled = true;
    selectedAnswerBox.style.display = "block";
    

    const questionContainer = e.target.parentElement;
    const backBtn = document.createElement('button');
    backBtn.onclick = () => {
        questionsPage.style.display = "block";
        questionPage.style.display = "none";
    };
    backBtn.textContent = "Return to Board";

    questionContainer.appendChild(backBtn);
}

// TODO:
// Make the questions into a grid of separate categories
// Make points for different players
// daily double