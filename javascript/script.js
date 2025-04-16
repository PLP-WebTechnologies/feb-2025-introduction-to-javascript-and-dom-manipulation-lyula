// Get references to the HTML elements
const dynamicTextElement = document.getElementById('dynamicText');
const styleButton = document.getElementById('styleButton');
const elementContainer = document.getElementById('elementContainer');
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');

// Task 1: Change text content dynamically
function changeText() {
    dynamicTextElement.textContent = 'The text has been changed by JavaScript!';
}

// Call changeText after a delay to show the initial text first
setTimeout(changeText, 2000);

// Task 2: Modify CSS styles via JavaScript
function changeStyle() {
    dynamicTextElement.classList.toggle('styled'); // Toggle a CSS class
}

styleButton.addEventListener('click', changeStyle);

// Task 3: Add or remove an element when a button is clicked
function addElement() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'A new paragraph added by JavaScript.';
    newParagraph.classList.add('new-element');
    elementContainer.appendChild(newParagraph);
}

function removeElement() {
    const lastParagraph = elementContainer.lastElementChild;
    if (lastParagraph) {
        elementContainer.removeChild(lastParagraph);
    } else {
        alert('No more elements to remove!');
    }
}

addElementButton.addEventListener('click', addElement);
removeElementButton.addEventListener('click', removeElement);