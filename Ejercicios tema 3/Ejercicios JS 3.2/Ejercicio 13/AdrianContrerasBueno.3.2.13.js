const inputText = document.getElementById('inputText');
const duplicateButton = document.getElementById('duplicateButton');
const textDisplay = document.getElementById('textDisplay');
duplicateButton.addEventListener('click', function() {
    const text = inputText.value;
    const duplicatedText = text + ' ' + text;
    textDisplay.textContent = duplicatedText;
});