//JavaScript-C24.2.0 (SpiderMonkey)





function crc(generator, message) {
    var message_original = message; //retain old M

    var i = 0;
    var offset = generator.length; //get G length

    for (n = 0; n < offset-1; n++) { //Append G length -1 zeros to M 
        //(G = length of generator)
        message += "0";
    }
    console.log("M  : "+message);
    while (i <= message.length - offset) {
        //Continue until we find a one in the message
        if (message[i] == "1") {
            var temp = "";
            for (g = 0; g < generator.length; g++) {
                //Some char xor-ing
                if (message[i+g] == "0" && generator[g] == "0") {
                    temp += '0';
                }
                else if (message[i+g] == "0" && generator[g] == "1") {
                    temp += '1';
                }
                else if (message[i+g] == "1" && generator[g] == "0") {
                    temp += '1';
                }
                else if (message[i+g] == "1" && generator[g] == "1") {
                    temp += '0';
                }
            }
            //Fill string with some amount of spaces
            var spaces = ""; 
            for (var z = 0; z < i; z++) { spaces += ' '; }
            
            console.log("G:   "+spaces + generator); 
            console.log("temp:"+spaces + temp);
            console.log("________________");
            //Add intermediate result to message
            message = message.substring(0, i) + temp + 
                message.substring(i+offset, message.length); 
            console.log("M  : "+message);
        }
        i++;
    }
    console.log("\n\ntemp: "+temp);

    //gets the last (offset - 1) chars of message = R
    var R = message.substring(message.length - (offset - 1)); 
    console.log("R: " + R);
    //message concated with R
    console.log("M&R: " + message_original +" "+ R);
}

var generator = "1001";
var message = "101110";
//Example:
//crc(generator, message); //Should give R = 011 see page 478