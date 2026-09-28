const question = document.getElementById("question");
const answer = document.getElementById("answer");
const answerChoices = document.getElementById("answerChoices");
const category = document.getElementById("category");
let theAnswer = "";

function qa() {
    $.getJSON('https://the-trivia-api.com/v2/questions/', data => {
        question.textContent = data[0].question.text;
        let cat = data[0].category.replaceAll('_', ' ');
        cat = cat.slice(0, 1).toUpperCase() + cat.slice(1);
        category.textContent = "Category: " + cat;
        theAnswer = data[0].correctAnswer;
        let incorrectAnswers = data[0].incorrectAnswers;
        const placeholderOption = document.createElement('option');
        placeholderOption.value = '';
        placeholderOption.textContent = 'Choose an option...';
        answerChoices.replaceChildren(placeholderOption);
        const correctOption = document.createElement('option');
        correctOption.value = '';
        correctOption.textContent = theAnswer;
        answerChoices.appendChild(correctOption);
        for (let incAnswer of incorrectAnswers) {
            const option = document.createElement('option');
            option.value = incAnswer;
            option.textContent = incAnswer;
            answerChoices.appendChild(option);
        }
    });
}

function showAnswer() {
    console.log(theAnswer);
    answer.innerHTML = "Correct answer: " + theAnswer;
}