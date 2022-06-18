//this is the command interpreter

//how to add a program to the ADK CMD
//step 1: add the interpreter
//step 2: add interpreter function to application.js

//boy do i need to make a proper CMD

console.log("What are you doing here.");

function openTiller() {
    if (input == "tiller") {
        if (param1 == "encrypt") {
            displayWarning("Calling the encrypter.");
            encrypt();
            displayOK("Encrypted text.");
        }
        else if(param1 == "decrypt") {
            displayWarning("Calling the decrypter.");
            decrypt();
            displayOK("Decrypted text.");
        }
        else if(param1 == "help") {
            sendText("I have no help for you! Sorry.");
        }
        else {
            displayError("No parameters specified.");
            listError("No parameters specified.");
        }
    }
}

function encrypt() {
    var chars = [];
    var position = 0;
    var spliced;
    for (char in param2) {
        //get param2 and split it
        spliced = param2.split("");
        chars[position] = [translateToGuard(spliced[position])];
        position++;
    }
    //assign text to output variable and display
    sendText(chars.join("-"));
}

function decrypt() {
    var chars = [];
    var position = 0;
    var spliced;
    for (char in param2) {
        //get param2 and split it
        spliced = param2.split("-");
        chars[position] = [translateToEnglish(spliced[position])];
        position++;
    }
    //assign text to output variable and display
    sendText(chars.join(""));
}

function translateToGuard(x) {
    //basically the same as it was in python
    if (x == "a"){
        return "223";
    }
    if (x == "b"){
        return "23.";
    }
    if (x == "c"){
        return "232";
    }
    if (x == "d"){
        return "233";
    }
    if (x == "e"){
        return "3..";
    }
    if (x == "f"){
        return "3.2";
    }
    if (x == "g"){
        return "3.3";
    }
    if (x == "h"){
        return "32.";
    }
    if (x == "i"){
        return "322";
    }
    if (x == "j"){
        return "323";
    }
    if (x == "k"){
        return "33.";
    }
    if (x == "l"){
        return "332";
    }
    if (x == "m"){
        return "333";
    }
    if (x == "n"){
        return "..2";
    }
    if (x == "o"){
        return "..3";
    }
    if (x == "p"){
        return ".2.";
    }
    if (x == "q"){
        return ".22";
    }
    if (x == "r"){
        return ".23";
    }
    if (x == "s"){
        return ".3.";
    }
    if (x == "t"){
        return ".32";
    }
    if (x == "u"){
        return ".33";
    }
    if (x == "v"){
        return "2..";
    }
    if (x == "w"){
        return "2.2";
    }
    if (x == "x"){
        return "2.3";
    }
    if (x == "y"){
        return "22.";
    }
    if (x == "z"){
        return "222";
    }
}

function translateToEnglish(x) {
    //basically the same as it was in python
    if (x == "223"){
        return "a";
    }
    if (x == "23."){
        return "b";
    }
    if (x == "232"){
        return "c";
    }
    if (x == "233"){
        return "d";
    }
    if (x == "3.."){
        return "e";
    }
    if (x == "3.2"){
        return "f";
    }
    if (x == "3.3"){
        return "g";
    }
    if (x == "32."){
        return "h";
    }
    if (x == "322"){
        return "i";
    }
    if (x == "323"){
        return "j";
    }
    if (x == "33."){
        return "k";
    }
    if (x == "332"){
        return "l";
    }
    if (x == "333"){
        return "m";
    }
    if (x == "..2"){
        return "n";
    }
    if (x == "..3"){
        return "o";
    }
    if (x == ".2."){
        return "p";
    }
    if (x == ".22"){
        return "q";
    }
    if (x == ".23"){
        return "r";
    }
    if (x == ".3."){
        return "s";
    }
    if (x == ".32"){
        return "t";
    }
    if (x == ".33"){
        return "u";
    }
    if (x == "2.."){
        return "v";
    }
    if (x == "2.2"){
        return "w";
    }
    if (x == "2.3"){
        return "x";
    }
    if (x == "22."){
        return "y";
    }
    if (x == "222"){
        return "z";
    }
}