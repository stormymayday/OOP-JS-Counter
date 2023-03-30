// Constructor function
function Counter(element, value) {

    // Properties
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

}

// Functions start

// getElement start
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
// getElement end

// increase start
Counter.prototype.increase = function () {

    // Incraesing the value by 1
    this.value++;

    // Setting valueDOM
    this.valueDOM.textContent = this.value;

}
// increase end

// Functions end

// Instantiating the first-counter
const firstCounter = new Counter(getElement('.first-counter'), 100);

// Instantiating the second-counter
const secondCounter = new Counter(getElement('.second-counter'), 200);

firstCounter.increase();
secondCounter.increase();