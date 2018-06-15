const passcorrect = "063018";
let pass = false;
while (pass != true) {
    let guess = prompt("Give me the password: ");

    if (guess === passcorrect) {
        pass = true;
    };
};