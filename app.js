// Constructor function
function Counter(element, value) {

    console.log(element, value);

}

// Function that gets the element
function getElement(selection) {

    // Getting the element
    const element = document.querySelector(selection);

    console.log(element);

}

// Getting the first-counter
getElement('.first-counter');