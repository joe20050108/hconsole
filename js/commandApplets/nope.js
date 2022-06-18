console.log("Tru Home2 Doubletree El Pueblo Lodge Embassy Suites Wangshu Inn Delaware Best Western Westinn Hampton Inn");

//reCrypt database nonsense
//we all know this means I am purposely being an asshole
const chars = [];
chars[0] = "a"
chars[1] = "b"
chars[2] = "c"
chars[3] = "d"
chars[4] = "e"
chars[5] = "f"
chars[6] = "g"
chars[7] = "h"
chars[8] = "i"
chars[9] = "j"
chars[10] = "k"
chars[11] = "l"
chars[12] = "m"
chars[13] = "n"
chars[14] = "o"
chars[15] = "p"
chars[16] = "q"
chars[17] = "r"
chars[18] = "s"
chars[19] = "t"
chars[20] = "u"
chars[21] = "v"
chars[22] = "w"
chars[23] = "x"
chars[24] = "y"
chars[25] = "z"

function hto() {
    if (input == "the") {
        if (param1 == "hunt") {
            displayError("##################################");
            displayWarning(
                chars[7] + chars[20] + " " + chars[19] +
                chars[0] + chars[14] + " is going to haunt you."
            );
            displayError("###################################");
            listWarning(
            chars[7] + chars[20] + " " + chars[19] +
            chars[0] + chars[14] + " is going to haunt you.")
        }
        else if (param1 == "food") {
            displayError("############################");
            displayWarning("The " +
            chars[4] + chars[12] + chars[4] + chars[17] +
            chars[6] + chars[4] + chars[13] + chars[2] + chars[24] + " food");
            displayError("############################");
            listWarning("The " +
            chars[4] + chars[12] + chars[4] + chars[17] +
            chars[6] + chars[4] + chars[13] + chars[2] + chars[24] + " food");
        }
        else {
            sendText(`"the" what? Come ON! SPEAK UP I AM DEAD SERIOUS!!`);
        }
    }
}