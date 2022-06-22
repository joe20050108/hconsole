//print with color.
(() => {
    var cPrint = jsconsole.commands.core.print;
    /* START STRINGS */
    var strings = {
        noParams: "Error: no parameter was defined.",
        blankParams: "Error: a ':' was defined for parameters, but no parameters were passed.",
    }
    /* END STRINGS */
    /* START COMMANDS */
    var commands = {
        print: {
            name: "print",
            action: printMsg
        },
        color: {
            name:"print.setColor",
            action: setColor
        },
        background: {
            name: "print.setBackground",
            action: setBackground
        },
        help: {
            name: "print.help",
            action: helpInfo
        },
        clear: {
            name: "print.clear",
            action: jsconsole.commands.core.clear
        }
    }
    /* END COMMANDS */
    /* START REGISTERS */
    jsconsole.commands.registerCommand(commands.print);
    jsconsole.commands.registerCommand(commands.color);
    jsconsole.commands.registerCommand(commands.background);
    jsconsole.commands.registerCommand(commands.help);
    jsconsole.commands.registerCommand(commands.clear);
    /* END REGISTERS */
    /* START FUNCTIONS */
    function printMsg(params) {
        try {
            params = params.split(":");
            if(params[1].split("\"")[1] == undefined || params[1].split("\"")[1] == null) {
                cPrint(strings.blankParams);
            }
            else {
                cPrint(params[1].split("\"")[1]);
            }
        } catch(e) {
            cPrint(e);
            cPrint(strings.noParams);
        }
    }
    function setColor(params) {
        try {
            params = params.split(":");
            if(params[1].split("\"")[1] == undefined || params[1].split("\"")[1] == null) {
                cPrint(strings.blankParams);
            }
            else {
                jsconsole.configuration.commandWindow.style.color = params[1].split("\"")[1];
            }
        } catch(e) {
            cPrint(e);
            cPrint(strings.noParams);
        }
    }
    function setBackground(params) {
        try {
            params = params.split(":");
            if(params[1].split("\"")[1] == undefined || params[1].split("\"")[1] == null) {
                cPrint("'Error: A \":\" for parameters was added, but no parameter/text was passed.'");
                cPrint("Proper usage: 'print.setBackground:\"string, rgb, rgba, or hex color value\"");
            }
            else {
                jsconsole.configuration.commandWindow.style.backgroundColor = params[1].split("\"")[1];
            }
        } catch(e) {
            cPrint(e);
            cPrint("Error: No parameter defined.");
            cPrint("Proper usage: 'print.setBackground:\"string, rgb, rgba, or hex color value\"'")
        }
    }
    function helpInfo() {
        cPrint("#")
        cPrint("# Help info: ");
        cPrint("# print: 'print:\"some text\"' -- print text");
        cPrint("# print.setColor: 'print.setColor:\"color\"' -- set the console window's foreground color");
        cPrint("# print.setBackground: 'print.setBackground:\"color\"' -- set the console window's background color");
        cPrint("# print.help : 'print.help' -- display help info for the print module");
        cPrint("#");
    }
    /* END FUNCTIONS */

    /* START LAZY */
    //im lazy so im going to "hack" into the commands and do this shit automatically while im testing it.
    /*window.addEventListener("load", () => {
        var i = document.getElementById("console-command-input");
        var s = document.getElementById("console-command-submit");
        i.value = "print:\"hello\"";
        setTimeout(() => {
            s.click();
        }, 0);
    });*/
    /* END LAZY */
})();