function displayVersion() {
    if (input == "version") {
        if (param1 == "appkit") {
            console.log("AppKit Version: " + appKitVersion);
            displayWarning("Sending version info to " + outputWindow);
            sendText("AppKit Version: " + appKitVersion);
            displayOK("Displayed AppKit Version Info");
        }    
        else if (param1 == "devkit") {
            console.log("Developement Kit Version: " + devKitVersion);
            displayWarning("Sending version info to " + outputWindow);
            sendText("Developement Kit Version: " + devKitVersion);
            displayOK("Displayed DevKit Version Info");
        }
        else if (param1 == "help") {
            console.log(`version: Displays version info for AppKit and DevKit. \n
            param1 valid inputs: \n
            appkit - displays AppKit build number. \n
            devkit - displays DevKit build number. \n
            help - displays help info for version.`);
            displayWarning("Sending text to " + outputWindow);
            sendText(`version: Displays version info for AppKit and DevKit.\n
            param1 valid inputs: \n
            appkit - displays AppKit build number \n
            devkit - displays DevKit build number \n
            help - displays help info for version`);
            displayOK("Text sent.");
        }
        else {
            displayError("No parameters specified.");
            listError("No parameters specified.");
        }
    }
}