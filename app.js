import Counter from "./utils/class/class.js";
import getElement from "./utils/getElement/getElement.js";

// Instantiating the second-counter using Counter class:
const secondCounter = new Counter(getElement('.second-counter'), 200);
