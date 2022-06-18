if (testMode == 1) {
    createDiv("topleft", "", "test mode", "position: absolute; top: 0; left: 0;", 1);
    createDiv("topright", "", "test mode", "position: absolute; top: 0; right: 0", 1);
    createDiv("bottomleft", "", "test mode", "position: absolute; bottom: 0; left: 0", 1);
    createDiv("bottomright", "", "test mode", "position: absolute; bottom: 0; right: 0", 1);
    createDiv("versionInfo", "", "Appkit Build " + versionNumber, "position: absolute; bottom: 0; right: 0; margin-bottom: 16px", 1);
    createDiv("loadDate", "", "Loaded at: " + Date(), "position: absolute; bottom: 0; right: 0; margin-bottom: 32px;", 1);
}
else {}