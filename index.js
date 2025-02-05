
const colorBox = document.getElementById("colorBox");
const colorButtons = document.querySelectorAll(".color-btn");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

// Function to start a new game
function startGame() {
    // Shuffle colors and pick a random target color
    colors = colors.sort(() => Math.random() - 0.5);
    targetColor = colors[Math.floor(Math.random() * colors.length)];

    // Set color box background
    colorBox.style.backgroundColor = targetColor;

    // Assign colors to buttons
    colorButtons.forEach((button, index) => {
        button.style.backgroundColor = colors[index];
        button.onclick = () => checkGuess(button.style.backgroundColor);
    });

    // Reset messages
    gameStatus.textContent = "";
}

// Function to check if guessed color is correct
function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct!";
        gameStatus.style.color = "green";
        score++;
        scoreDisplay.textContent = score;
        colorBox.classList.add("correct");
        setTimeout(() => {
            colorBox.classList.remove("correct");
            startGame();
        }, 500);
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.style.color = "red";
        colorBox.classList.add("wrong");
        setTimeout(() => colorBox.classList.remove("wrong"), 300);
    }
}

// Event listener for new game button
newGameButton.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
    startGame();
});

// Start game on page load
startGame();
