// continue game
function continueGame() {
		const alphabet = generateARandomAlphabet();
		// generate random alphabet to show on board

			// set alphabet to current alphabet
	const curretnAlphabetElement = document.getElementById("current-alphabet");
	curretnAlphabetElement.innerText = alphabet;

	// set key background color by it's id
	setBackgroundColorById(alphabet);

}

// detect the key press
function handleKeyboardPress(event) {
	// find which key is pressed
	const pressedKey = event.key;

	// if press escape quite the game
	if (pressedKey === "Escape") {
		escapeGame ()
	}

	// make current alphabet lowercase to compare to pressed key
	const curretnAlphabet = getElementTextById("current-alphabet");
	const expectedAlphabet = curretnAlphabet.toLocaleLowerCase();

	// checking if user is pressing the right key or not
	if (pressedKey === expectedAlphabet) {
		// increase score for right press
		const currentScore = gettElementValueById("current-score");
		const newScore = currentScore + 1;
		setElementValueById("current-score", newScore);

		// remove current key background color and set it to the next
		removeBackgroundColorById(expectedAlphabet);
		continueGame();
	} else {
		// decrease the life if key press is not right as expected
		const currentLife = gettElementValueById("current-life");
		const newLife = currentLife - 1;
		setElementValueById("current-life", newLife);

		if (newLife === 0) {
			gameOver();
		}
	}
}

// Start The Game
function play() {
	hideElementById("home-screen");
	hideElementById("game-over");
	showElementById("play-ground");
	setElementValueById("current-life", 5);
	setElementValueById("current-score", 0);
	continueGame();
	document.addEventListener("keyup", handleKeyboardPress);
}

function gameOver() {
	// hide play ground and show the score
	hideElementById("play-ground");
	showElementById("game-over");

	// calculate total score
	const totalScoreElement = document.getElementById("total-score");
	// const currentScore = document.getElementById("current-score").innerText;
	const currentScore = getElementTextById("current-score");
	totalScoreElement.innerText = currentScore;

	// play again if user click to play again
	const playAgainButton = document.getElementById("play-again");
	playAgainButton.addEventListener("click", playAgain);
}

// play again
function playAgain() {
	hideElementById("game-over");
	hideElementById("home-screen");
	showElementById("play-ground");
	setElementValueById("current-life", 5);
	setElementValueById("current-score", 0);
}


// escape the game 
function escapeGame () {
	hideElementById("play-ground");
	showElementById("home-screen");

	// for remove the color bg from key
	const curretnAlphabet = getElementTextById("current-alphabet");
	const alphabetForRemoveBg = curretnAlphabet.toLowerCase();
	removeBackgroundColorById(alphabetForRemoveBg);
}