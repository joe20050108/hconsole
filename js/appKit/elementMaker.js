



//part of the early appkit system
function createDiv(divName, divClass, divText, style, autoAppend) {
    var applicationDiv = document.createElement("div");
    applicationDiv.innerHTML = `
    <div id="` + divName + `" class="` + divClass + `" style="` + style + `">` + divText + `</div>`;
    if (autoAppend == 1) {
        appendBody(applicationDiv);
    }
    else {}
}

function createButton(buttonName, buttonClass, buttonText, style, autoAppend) {
    var applicationButton = document.createElement("button");
    applicationButton.innerHTML = `
    <button id="` + buttonName + `" class="` + buttonClass + `" style="` + style + `>`+ buttonText + `</button>`;
    if (autoAppend == 1) {
        appendBody(applicationButton);
    }
    else {}
}

function createStyle(styleInfo) {
    var stylesheet = document.createElement("style");
    displayOK("Created: " + stylesheet);
    stylesheet.innerHTML = styleInfo;
    displayOK("Stylesheet information added: \n" + stylesheet.innerHTML);
    displayWarning("Requesting appender to append " + stylesheet + " to <head> of HTML document.");
    appendHead(stylesheet);
}

function createHTML(htmlText) {
    displayWarning(`It is highly recomended to only use this when you are loading an application as the webpage loads. Other we will get a killSwitch situation. Type help killswitch-instance for more info`);
    document.write(htmlText);
    displayOK("Added text: " + htmlText + " to HTML document.");
}