// Write your code here!
// Remove the main#main element
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id attribute to 'victory'
newHeader.id = 'victory';

// Set the text content (replace 'YOUR-NAME' with your actual name)
newHeader.textContent = 'YOUR-NAME is the champion';

// Add the new element to the document body
document.body.appendChild(newHeader);