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

// Functions - start

// getElement - start
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
// getElement - end

// increase - start
Counter.prototype.increase = function () {

    this.value++;

    this.valueDOM.textContent = this.value;

}
// increase - end

// decrease - start
Counter.prototype.decrease = function () {

    this.value--;

    this.valueDOM.textContent = this.value;

}
// decrease - end

// reset - start
Counter.prototype.reset = function () {

    this.value = 0;

    this.valueDOM.textContent = this.value;

}
// reset - end

// Functions - end

// Instantiating the first-counter
const firstCounter = new Counter(getElement('.first-counter'), 100);

// Instantiating the second-counter
const secondCounter = new Counter(getElement('.second-counter'), 200);

// firstCounter.increase();
// firstCounter.decrease();
firstCounter.reset();
// secondCounter.increase();
// secondCounter.decrease();
secondCounter.reset();