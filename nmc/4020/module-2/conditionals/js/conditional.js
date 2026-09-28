let dropdown = document.querySelector("#userInput");
for (let i = 0; i <= 100; i++) {
    dropdown.innerHTML += `<option value="${i}">${i}</option>`;
}
function compare() {
    let answer = Number(document.querySelector("#userInput").value);
    let response = document.querySelector("#response");

    switch (true) {
        case (answer === 24):
            response.innerHTML = "Correct!";
            break;
        case (answer < 10):
            response.innerHTML = answer + " is way too low.";
            break;
        case (answer < 24):
            response.innerHTML = answer + " is too low but close.";
            break;
        case (answer > 40):
            response.innerHTML = answer + " is way too high.";
            break;
        default:
            response.innerHTML = answer + " is too high but close.";
    }
}
