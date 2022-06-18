//Registers version info and stuff into the webpage


//registers the variables into a system and then logs to console.
var appList = [];
var appListPosition = 0;
function registerApp(appName) {
    appList[appListPosition] = appName;
    appListPosition++;
}

//displays application info
function displayVersion(appInfo) {
    console.log("App Name: " + appInfo[0]);
    console.log("Name: " + appInfo[1]);
    console.log("Description: " + appInfo[2]);
    console.log("Version: " + appInfo[3]);
    console.log("Owner: " + appInfo[4]);
    if (appInfo[5] == 2) {
        console.log("Type: Full Webpage");
    }
    else if(appInfo[5] == 1) {
        console.log("Type: Floating App");
    }
}