// These two arrays store related information in the same order.
// An occupant name and an image filename at the same index belong together.
let occupants = [
    "TACO closet",
    "Storage",
    "Lilian F. and Reagan B.",
    "Claire S.",
    "Kyla S.",
    "Anthony D.",
    "Lauren B.",
    "Emily T."
]

let occupantPix = [
    "taco.jpeg",
    "storage.jpeg",
    "lilian-reagan.jpeg",
    "claire.jpeg",
    "kyla.jpeg",
    "anthony.jpeg",
    "lauren.jpeg",
    "emily.jpeg"
]

// Connect JavaScript to the HTML elements where the results will appear.
let count = document.querySelector("#count")
let output = document.querySelector("#output")
let photo = document.querySelector("#photo")

// @TODO: Put the repeated viewer code into a function.
// Update the viewer using the current index.
function updateViewer() {
    output.innerHTML = occupants[currentIndex]
    photo.src = "images/" + occupantPix[currentIndex]
    photo.alt = occupants[currentIndex]
    count.innerHTML = "Item " + (currentIndex + 1) + " of " + occupants.length
}
// `currentIndex` keeps track of which item is currently displayed.
let currentIndex = 2

// Connect the JavaScript to the Previous button
let previous = document.querySelector("#previous")

// Connects JavaScript to the Next button.
let next = document.querySelector("#next")

// @TODO: Remove the repetitive code and replace it with the `updateViewer`.
// Clicking Previous moves to the previous index and updates the viewer.
previous.addEventListener("click", function () {
    // Note the minuses:
    currentIndex--

    // If the index moves before the beginning, go to the last item.
    if (currentIndex < 0) {
        currentIndex = occupants.length - 1
    }

    updateViewer()
})

// @TODO: Remove the repetitive code and replace it with the `updateViewer`.
// Clicking Next moves to the next index and updates the viewer.
next.addEventListener("click", function () {
    currentIndex++

    // If the index reaches the end of the array, return to the beginning.
    if (currentIndex >= occupants.length) {
        currentIndex = 0
    }

    updateViewer()
})

// @TODO: Remove the repetitive code and replace it with the `updateViewer`.
// Display the initial item when the page loads.
updateViewer()

function setControlsNone() {
    previous.style.display = 'none';
    next.style.display = 'none';
}

function setControlsDisplay() {
    previous.style.display = 'block';
    next.style.display = 'block';
}

photo.addEventListener('mouseenter', () => {
    setControlsDisplay();
})

photo.addEventListener('mouseleave', e => {
    setControlsNone();
})

previous.addEventListener('mouseenter', setControlsDisplay);
next.addEventListener('mouseenter', setControlsDisplay);

previous.addEventListener('mouseleave', setControlsNone);
next.addEventListener('mouseleave', setControlsNone);