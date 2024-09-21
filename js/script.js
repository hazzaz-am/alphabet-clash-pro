function continueGame() {
	const alphabet = generateARandomAlphabet();

	const curretnAlphabetElement = document.getElementById("current-alphabet");
	curretnAlphabetElement.innerText = alphabet;

	setBackgroundColorById(alphabet);
}

// detect the key press
function handleKeyboardPress(event) {
	const pressedKey = event.key;

	const curretnAlphabetElement = document.getElementById("current-alphabet");
	const curretnAlphabet = curretnAlphabetElement.innerText;
	const expectedAlphabet = curretnAlphabet.toLocaleLowerCase();

	if (pressedKey === expectedAlphabet) {
		const currentScore = gettElementValueById("current-score");
		const newScore = currentScore + 1;
		setElementValueById("current-score", newScore);

		removeBackgroundColorById(expectedAlphabet);
		continueGame();
	} else {
		const currentLife = gettElementValueById("current-life");
		const newLife = currentLife - 1;
		setElementValueById("current-life", newLife);

		if (newLife === 0) {
			hideElementById("play-ground");
			showElementById("game-over");
      removeBackgroundColorById(expectedAlphabet)
			const totalScoreElement = document.getElementById("total-score");
			const currentScore = document.getElementById("current-score").innerText;
			totalScoreElement.innerText = currentScore;

			const playAgainButton = document.getElementById("play-again");
			playAgainButton.addEventListener("click", () => {
				hideElementById("game-over");
				showElementById("play-ground");
				setBackgroundColorById(expectedAlphabet);
				setElementValueById("current-life", 5);
				setElementValueById("current-score", 0);
			});
		}
	}
}

// Start The Game
function play() {
	hideElementById("home-screen");
	showElementById("play-ground");
	continueGame();
	document.addEventListener("keyup", handleKeyboardPress);
}
