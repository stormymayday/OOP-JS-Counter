// Constructor function
function Counter(element, value) {

    console.log(element, value);

}

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

// Getting the first-counter
getElement('.first-counter');