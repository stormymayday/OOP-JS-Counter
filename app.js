import Counter from "./utils/class/class.js";
import { Counter as CounterFC } from "./utils/constructor-function/constructor-function.js";
import getElement from "./utils/getElement/getElement.js";

// Instantiating the first-counter using Counter constructor function:
const firstCounter = new CounterFC(getElement('.first-counter'), 100);

// Instantiating the second-counter using Counter class:
const secondCounter = new Counter(getElement('.second-counter'), 200);
