function boot() {
    document.getElementById("startCmd").remove();
    jsconsole.setup(
        document.getElementById("console-window"),
        document.getElementById("console-command-input"),
        document.getElementById("console-command-submit"),
    );
    jsconsole.commands.core.print("Ready.");
}
setTimeout(() => {
    boot();
}, 000)