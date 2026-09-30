const divLoad = document.getElementById('mainDiv');
const score = document.getElementById('score');
const difficultyScores = ["easy", "medium", "hard"]
let theAnswer = [];
// Will contain points for each question and the points assigned the user's answer (either 0 or the points assigned for the question)
let scores = []
// Will contain the maximum number of points given for the quiz;
let maxPoints;
let userPoints;

function qa() {
    $.getJSON('https://the-trivia-api.com/v2/questions/', data => {
        divLoad.innerHTML = "";

        theAnswer = [];
        scores = [];
        maxPoints = 0;
        userPoints = 0;

        // Sorting the questions by difficulty
        // Note: I used AI to see how people typically sort by a custom order
        data.sort((a, b) => difficultyScores.indexOf(a['difficulty']) - difficultyScores.indexOf(b['difficulty']))

        divLoad.replaceChildren();
        for (let i = 0; i < 10; i++) {
            const questionContainer = document.createElement('div');
            questionContainer.classList.add("question");
            // Equivalent to step 7, just using createElement because it's more programmatic
            const cat = document.createElement('h3');
            cat.textContent = data[i].category.replaceAll('_', ' ');

            const question = document.createElement('h6')
            question.textContent = data[i].question.text;

            const correctAnswer = document.createElement('p');
            correctAnswer.id = "answers" + i;
            correctAnswer.style.display = "none";

            theAnswer.push(data[i].correctAnswer)

            const answerChoices = document.createElement('select');
            answerChoices.onchange = (e) => showAnswer(i, e);

            const placeholderOption = document.createElement('option');
            placeholderOption.selected = true;
            placeholderOption.hidden = true;
            placeholderOption.disabled = true;
            placeholderOption.value = '';
            placeholderOption.textContent = 'Choose an option...';
            answerChoices.appendChild(placeholderOption);

            let possibleAnswerChoices = [...data[i].incorrectAnswers, data[i].correctAnswer];
            // Used AI to help me randomize the order of the choices
            for (let j = 0; j < 4; j++) {
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

            questionContainer.appendChild(cat);
            questionContainer.appendChild(question);
            questionContainer.appendChild(correctAnswer);
            questionContainer.appendChild(answerChoices);
            divLoad.appendChild(questionContainer);

            // Assign points to each question based on difficulty
            scores.push({});
            scores[i]['maxPoints'] = assignPoints(data[i]['difficulty']); // Points for the question
            scores[i]['userPoints'] = 0; // The points awarded to the user based on their current answer
        }
        score.style.display = 'block';
        maxPoints = scores.reduce((sum, score) => { return sum + score['maxPoints'] }, 0);
        score.textContent = `0 out of ${maxPoints} points`;
    });
}

function showAnswer(i, e) {
    let id = "answers" + i;
    // Get the dropdown 
    const selectedInput = e.target;
    // Get the user-selected answer 
    const selectedAnswerValue = selectedInput.value;
    let selectedAnswerBox = document.getElementById(id);
    if (selectedAnswerValue === theAnswer[i]) {
        selectedAnswerBox.textContent = "Correct! The answer is: " + theAnswer[i];
        scores[i]["userPoints"] = scores[i]["maxPoints"];
    } else {
        selectedAnswerBox.textContent = "Wrong answer. Correct Answer: " + theAnswer[i];
        scores[i]["userPoints"] = -scores[i]["maxPoints"];
    }
    selectedInput.disabled = true;
    selectedAnswerBox.style.display = "block";
    userPoints = scores.reduce((sum, score) => sum + score['userPoints'], 0);
    if (userPoints < 0) {
        score.style.color = '#df2424';
    } else {
        score.style.color = 'white';
    }
    score.textContent = `${userPoints} out of ${maxPoints} points`;
}

function assignPoints(difficulty) {
    switch (difficulty) {
        case 'easy':
            return 100;
        case 'medium':
            return 250;
        case 'hard':
            return 500;
        default:
            return 0;
    }
}

// TODO: 
// Make the questions into a grid of separate categories
// Make points for different players 
// daily double