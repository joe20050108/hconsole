//loads scripts ONLY AS THE WEBPAGE LOADS


function loadScript() {
    try {
        document.write(`<script type="text/javascript" src="` + src + `"></script>`);
    }
    catch (error) {
        console.log("Error: Script not found.");
    }
}