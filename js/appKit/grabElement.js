//fetches an element by its id and stores it in a variable

var elementArray = [];
var elementCounter = 0;

function getElement(elementID) {
    elementArray[elementCounter] = document.getElementById(elementID);
    elementCounter++;
}