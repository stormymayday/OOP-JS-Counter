// Constructor function
function Counter(element, value) {

    console.log(element, value);

}

// Function that gets the element
function getElement(elementSelection) {

    // Getting the element
    const element = document.querySelector(elementSelection);

    console.log(element);

}

// Getting the first-counter
getElement('.first-counter');