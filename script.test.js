// Import the necessary modules
const { JSDOM } = require('jsdom');

// Load the HTML file into a JSDOM instance
const html = `
<html>
  <body>
    <button id="btn" class="magic">Magic 🎩</button>
    <div id="boxes" class="boxes big"></div>
  </body>
</html>`;
const dom = new JSDOM(html);
global.window = dom.window;
global.document = dom.window.document;

// Import the JavaScript file to run its content
const script = require('./script.js');


// Define the test
describe('magicButton', () => {
    it('should toggle the "big" class on the boxesContainer element when clicked', () => {
        // Find the necessary elements
        const boxesContainer = document.getElementById('boxes');
        const magicButton = document.getElementById('btn');

        // Simulate a click on the magicButton element
        magicButton.click();

        // Check that the "big" class has been toggled on the boxesContainer element
        expect(boxesContainer.classList.contains('big')).toBe(false);

        // Simulate a second click on the magicButton element
        magicButton.click();

        // Check that the "big" class has been toggled back on the boxesContainer element
        expect(boxesContainer.classList.contains('big')).toBe(true);
    });
});



