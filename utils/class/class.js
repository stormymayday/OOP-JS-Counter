import getElement from "../getElement/getElement.js";

class Counter {

    constructor(element, value) {

        // Properties
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;

        // Bidning 'this' such that it points to Counter
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        // Event Listeners
        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);

    }

    // Methods - start

    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }

    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }

    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }

    // Methods - end
}

export default Counter;

// Instantiating the first-counter
const firstCounter = new Counter(getElement('.first-counter'), 100);

// Instantiating the second-counter
const secondCounter = new Counter(getElement('.second-counter'), 200);