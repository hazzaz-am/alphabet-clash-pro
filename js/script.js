function continueGame () {
  const alphabet = generateARandomAlphabet();

  const curretnAlphabetElement = document.getElementById('current-alphabet')
  curretnAlphabetElement.innerText = alphabet;

  setBackgroundColorById(alphabet)
}

function play () {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}