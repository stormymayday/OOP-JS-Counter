// Constructor function
function Counter(element, value) {

    console.log(element, value);

}

// Creating the first-counter
const firstCounter = new Counter(getElement('.first-counter'), 100);

// Function that gets the element
function getElement(selection) {

    // Getting the element
    const element = document.querySelector(selection);

    // If element exists (not null), return it
    if (element) {
        return element;
    }

    // If element does not exist (null), throw error
    throw new Error(`Please check "${selection}" selector. No such element exists.`);
}