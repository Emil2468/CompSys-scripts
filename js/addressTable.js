//Use this if you want to translate multiple addresses at once, use cache.js if 
//you only want to translate one address.
//The hope is that this makes cache exercises easier as you can look at all
//the address translations at once


//Inputs:
//B: Size of each block in bytes
//E: Lines per set
//C: Size of cache in bytes
//m: number of bits in address
//addresses: array of addresses needed to be translated
//base: base to print, set index, tag and offset in (number between 2 and 36)
//Prints a table showing translation of each address
function translateAddresses(B, E, C, m, addresses, base) {
    var b = log2(B)
    var S = C / (B * E);
    var s = log2(S);
    var t = m - (s + b);
    var headLine = "Address (HEX)\tBits (BIN)"
    //insert correct amount of tabs to make room for all bits
    for(var i = 0; i < parseInt(m / 4) - 2; i++) {
        headLine += "\t";
    }
    headLine += "Set\t\tTag\t\tOffset";
    console.log(headLine);
    
    
    for(var i = 0; i < addresses.length; i++) {
        var str = "";
        //Shift away the block offset and use bit mask to isolate index
        var setIndex = (addresses[i] >>> b) & bitMask(s)
        //Shift away block offset and index, the only thing left is the tag
        var tag = (addresses[i] >>> (b+s));
        //Use bit mask to remove bits more significant than those used to the
        //block offset
        var blockOffset = addresses[i] & bitMask(b);

        str += addresses[i].toString(16) + "\t\t";
        str += toBin(addresses[i], m) + "\t";
        //Insert extra tab in case of many bits
        if(m >= 24) {
            str += "\t";
        }
        str += setIndex.toString(base) + "\t\t";
        str += tag.toString(base) + "\t\t";
        str += blockOffset.toString(base);
        console.log(str);
    }
}

//Converts number to string of len bits, I use this to get correct length
function toBin(num, len) {
    var res = "";
    var temp = 0;
    for (var i = len - 1; i >= 0; i--) {
        temp = num & parseInt(Math.pow(2, i));
        if (temp == 0) {
            res += "0";
        } else {
            res += "1";
        }
        if (i % 4 == 0) {
            res += " ";
        }
    }
    return res;
}

//Returns a number with p ones as least significant bits, rest is zeros
function bitMask(p) {

    var mask = 0;
    for (var i = 0; i < p; i++) {
        mask += Math.pow(2, i);
    }
    return parseInt(mask);
}

//Since IE does not support Math.log2 use this
function log2(x){
    return Math.log(x)/Math.log(2);
}

//Examples below:

//Prints information in binary
// translateAddresses(64, 2, 2048, 20, 
//[0xA000, 0xF020, 0xFF00, 0xFF0C, 0x0018,0xF0A4, 0xF004], 2);

//Prints information in hex
//translateAddresses(64, 2, 2048, 20, 
//[0xA000, 0xF020, 0xFF00, 0xFF0C, 0x0018,0xF0A4, 0xF004], 16);