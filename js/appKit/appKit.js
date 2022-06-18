

var testMode = 1;

normalText = "font-size: 15px";
yellowText = "font-size: 15px; color: yellow";
greenText = "font-size: 15px; color: green";
redText = "font-size: 15px; color: red";

versionNumber = "0.2"
appKitVersion = versionNumber;

console.log("%c AppKit", "font-size: 50px;");
console.log("%c Version " + versionNumber, "font-size: 18px;");
console.log("%c An API for javascript based HTML, JS, and CSS to seamlessly make apps.", normalText);
console.log("%c Either by using it for floating apps or for HTMLless documents.", normalText);
console.log("%c This API will continue to grow as we advanced this webpage fun.", normalText);

console.log("%c Loading AppKit scripts, please wait.", yellowText);
//load all scripts but the errorSystem here.
console.log("%c Scripts loaded.", greenText);

function killSwitch() {
    document.write(`
    <body>The kill switch has been flipped. Please reload to go back to the normal webpage.</body>`);
    displayError("The kill switch has been flipped. Please reload to go back to the normal webpage.");
}

function overloader(duration) {
    var stampAjuster = 1;
    displayError("Webpage overflow.");
    displayWarning("Webpage will now no longer respond.");
    for (i = 0; i < duration; i++) {
        createDiv("overflow", "overflow", "OVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOWOVERFLOW", "color: white; position: absolute; margin-top: " + stampAjuster + "px; color: red;", 1);
        createDiv("overflow", "overflow", "Overload triggered. Hu Tao is haunting you.", "color: white; position: absolute; margin-top: " + stampAjuster + 2 + "px; color: orange; font-size: 50px;", 1);
        stampAjuster = stampAjuster + 10;
    }
}