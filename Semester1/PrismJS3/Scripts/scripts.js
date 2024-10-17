// Change the text in the tab (title tag change)
window.document.title = 'Using Prism to Generate a Random Number ';

// Print the random number
// Create variable
let randomNumber;

// Assign variable a value - random number between 1 and 100
randomNumber = Math.floor(Math.random() * 100) + 1;

// Write to the document
window.document.write('<h3>' + randomNumber + '</h3>');

window.document.write(
    '<p>Refresh you browser to generate a random number between 1 and 100.</p>'
);