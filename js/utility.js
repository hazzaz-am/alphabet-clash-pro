// hide element by id
function hideElementById (elementId) {
  const element = document.getElementById(elementId)
  element.classList.add('hidden')
}

// Show Element By Id
function showElementById (elementId) {
  const element = document.getElementById(elementId)
  element.classList.remove('hidden')
}

// set background color to keyboard
function setBackgroundColorById (elementId) {
  const element = document.getElementById(elementId)
  element.classList.add("bg-[#FFA500]")
}

// remove background color to keyboard
function removeBackgroundColorById (elementId) {
  const element = document.getElementById(elementId)
  element.classList.remove("bg-[#FFA500]")
}

// Generate random alphabet
function generateARandomAlphabet () {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
  const alphabets = alphabetString.split('')
  
  const randomNumber = Math.random() * 25
  const index = Math.round(randomNumber)
  
  const alphabet = alphabets[index]
  return alphabet
}

// get element value by id
function gettElementValueById (elementId) {
  const element = document.getElementById(elementId)
  const stringValue = element.innerText;
  const numburValue = parseInt(stringValue)
  return numburValue
}

// set element value by id
function setElementValueById (elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value
}