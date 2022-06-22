//Sponsored by meme-themes
(() => {
    var cPrint = jsconsole.commands.core.print
    //strings
    var strings = {
        noParams: "Error, no parameter was defined.",
        blankParams: "Error, a ':' was defined for parameters, but no parameters were passed.",
        nonValid: "Error: Where tf is your style-console module?!",
        help: "" + 
        "# There is no help" + "\n" +
        "# good luck out there champ!",
        uh: "Error: Suggest reading help info using \"themes.help\""
    }
    //themes or memes
    var themes = {
        wut: {
            output: `
            color: #B100B4;
            background-color: black;
            background-image:url(https://steamuserimages-a.akamaihd.net/ugc/1875201467735254832/180D2BFAC2B7BF1AA7723E8379AE281AC3A64F16/);
            background-size: cover;
            `,
            input: `
            color: pink;
            background-color: black;
            `,
            submit: `
            color: pink;
            background-color: black;
            `,
            //unboxed is essentially anything out of the console,
            //and since it doesnt rely on the config, it basically needs to be rewritten per-website
            unboxed: ` 
            #console-body, #console, body {
                background-color: pink;
                color: black;
                border: none;
            }
            button {
                border: none;
                color: black;
            }
            `
        },
        stock: {
            output: "",
            input: "",
            submit: "",
            unboxed: ""
        }
    }
    //commands
    var commands = {
        setTheme: {
            name: "theme.setTheme",
            action: setTheme
        },
        getHelp: {
            name: "theme.getHelp",
            action: (() => { jsconsole.commands.core.print(strings.help) })
        }
    }
    //register commands
    jsconsole.commands.registerCommand(commands.setTheme);
    jsconsole.commands.registerCommand(commands.getHelp);
    //action functions
    function setTheme(params) {
        if(jsconsole.commands.registeredCommands["styles"] == undefined) {
            jsconsole.commands.core.print(strings.nonValid);
        } else {
            try {
                params = params.split(":");
                if(params[1].split("\"")[1] == undefined || params[1].split("\"")[1] == null) {
                    cPrint(strings.blankParams);
                }
                else {
                    //set a bunch of theme nonsense
                    /* START SPECIFIC + SUPERSPECIFIC */
                    try {
                        if(params[1].split("\"")[1] == "dark" || params[1].split("\"")[1] == "light") {
                            if(params[1].split("\"")[1] == "dark") {
                                document.getElementById("theme-css").href = "Microsoft.WinJS.3.0/css/ui-dark.css"
                            }
                            else if(params[1].split("\"")[1] == "light") {
                                document.getElementById("theme-css").href = "Microsoft.WinJS.3.0/css/ui-light.css"
                            }
                        }
                        /* SUPERSPECIFIC END */
                        //firstly, make sure it isnt a call to change the winjs ui stylesheet
                        else {
                            params = params[1].split("\"");
                            jsconsole.configuration.commandWindow.style = themes[params[1]].output;
                            jsconsole.configuration.commandInput.style = themes[params[1]].input;
                            jsconsole.configuration.commandSubmit.style = themes[params[1]].submit;
                            /* BEGIN SPECIFIC CODE */
                            //unboxed-css(ONLY WORKS ON THE ORIGINAL WEBPAGE)
                            try { //try to delete an old style tag if possible
                                document.getElementById("unboxed-meme").remove();
                            } catch(e) {} //who cares its probably not there..
                            var unboxedCSS = document.createElement("style");
                            unboxedCSS.id = "unboxed-meme";
                            unboxedCSS.innerHTML = themes[params[1]].unboxed;
                            document.head.appendChild(unboxedCSS);
                        } 
                        /* END SPECIFIC CODE */
                    } catch(e) {
                        jsconsole.commands.core.print(e);
                        jsconsole.commands.core.print(strings.uh);
                    }
                }
            } catch(e) {
                cPrint(e);
                cPrint(strings.noParams);
            }
        }
    }
})();

(() => {
    
})