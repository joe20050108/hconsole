function appendBody(bodyElement) {
    document.body.appendChild(bodyElement);
    displayOK("Appended: " + bodyElement + " to <body> of HTML document.");
}

function appendHead(headElement) {
    document.head.appendChild(headElement);
    displayOK("Appended: " + headElement + " to <head> of HTML document.");
}

function appendTo(elementName, appendLocation) {
    //not sure how to go about this yet
}