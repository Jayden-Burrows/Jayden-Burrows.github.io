const divLoad = document.getElementById('mainDiv');
let theAnswer = [];


function qa() {
    $.getJSON('https://the-trivia-api.com/v2/questions/', data => {
        divLoad.innerHTML = "";

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
            answerChoices.onchange = () => showAnswer(i);
            const correctAnswerChoice = document.createElement('option');
            correctAnswerChoice.textContent = data[i].correctAnswer;
            correctAnswerChoice.value = data[i].correctAnswer;
            answerChoices.appendChild(correctAnswerChoice);
            for (let incorrectAnswer of data[i].incorrectAnswers) {
                const answerChoice = document.createElement('option')
                answerChoice.textContent = incorrectAnswer;
                answerChoice.value = incorrectAnswer;
                answerChoices.appendChild(answerChoice);
            }

            questionContainer.appendChild(cat);
            questionContainer.appendChild(question);
            questionContainer.appendChild(correctAnswer);
            questionContainer.appendChild(answerChoices);
            divLoad.appendChild(questionContainer);
        }
    });
}

function showAnswer(i) {
    let id = "answers" + i;
    let selectedAnswer = document.getElementById(id);
    selectedAnswer.textContent = "Correct Answer: " + theAnswer[i];
    selectedAnswer.style.display = "block";
}