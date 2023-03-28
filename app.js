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

}

// Getting the first-counter
getElement('.first-counter');