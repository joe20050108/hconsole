//Style module can change the styles of the submit, input, and output elements using the console
(() => {
    var cPrint = jsconsole.commands.core.print
    //strings
    var strings = {
        noParams: "Error, no parameter was defined.",
        blankParams: "Error, a ':' was defined for parameters, but no parameters were passed.",
        nonValid: "Error: 'styles' was called, but no valid command was called. See valid commands below",
        help: "" + 
        "# Help info:" + "\n" +
        "# styles.setStyle: 'styles.setStyle:\"['element', 'style', 'value']\"" + "\n" +
        "# Valid elements: 'commandWindow, commandInput, commandSubmit'"
    };
    //commands
    var commands = {
        styles: {
            name: "styles",
            action: fallbackFunc
        },
        cSetStyle: {
            name:"styles.console.setStyle",
            action: setConsoleStyle,
        },
        setStyle: {
            name: "styles.setStyle",
            action: setStyle
        }
    }
    //register commands
    jsconsole.commands.registerCommand(commands.styles);
    jsconsole.commands.registerCommand(commands.cSetStyle);
    jsconsole.commands.registerCommand(commands.setStyle);
    //action functions
    function fallbackFunc() {
        cPrint(strings.nonValid);
        cPrint(strings.help);
    }
    function setConsoleStyle(params) {
        try {
            params = params.split(":");
            if(params[1].split("\"")[1] == undefined || params[1].split("\"")[1] == null) {
                cPrint(strings.blankParams);
            }
            else {
                var parsed = JSON.parse(params[1]);
                jsconsole.configuration.commandWindow.style[parsed[0]] = parsed[1];
                cPrint("[ OK ]");
            }
        } catch(e) {
            cPrint(e);
            cPrint(strings.noParams);
        }
    }
    //generalized function
    function setStyle(params) {
        try {
            params = params.split(":");
            if(params[1].split("\"")[1] == undefined || params[1].split("\"")[1] == null) {
                cPrint(strings.blankParams);
            }
            else {
                var parsed = JSON.parse(params[1]);
                jsconsole.configuration[parsed[0]].style[parsed[1]] = parsed[2];
                cPrint("[ OK ]");
            }
        } catch(e) {
            cPrint(e);
            cPrint(strings.noParams);
        }
    }
})();