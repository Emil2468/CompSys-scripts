//Script to give information on an address when using specific cache
//I believe that the names comply with the book as seen on page 653
var address = 0x0004; //Change this to fit exercise
//Size of each block in bytes
var B = 64; //Change this to fit exercise
//Number of lines pr. set
var E = 2; //Change this to fit exercise
//Size of cache in bytes
var C = 2048; //Change this to fit exercise

//number of bits in address
var m = 16; //Change this to fit exercise

//Prints info on a given address with given cache attributes
function translateAddress(B, E, C, m, address) {
    var b = log2(B);
    var S = C / (B * E);
    var s = log2(S);
    var t = m - (s + b);
    //Dont know if this is needed, but here you go you spoiled brat
    var bits = toBin(address, m);
    console.log("Bits in address: " + bits);

    //Use bit mask to remove bits more significant than those used to the block offset
    var blockOffset = address & bitMask(b);
    console.log("Block offset (HEX): " + blockOffset.toString(16));

    //Shift away the block offset and use bit mask to isolate index
    var setIndex = (address >>> b) & bitMask(s)
    console.log("Set index (HEX): " + setIndex.toString(16));

    //Shift away block offset and index, the only thing left is the tag
    var tag = (address >>> (b+s));
    console.log("Cache tag (HEX): " + tag.toString(16));
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