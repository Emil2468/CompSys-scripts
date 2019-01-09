//There is no wrap around in case of overflow, as I can't tell for sure 
//if this is a thing here, or if it is only in UDP-checksum, I assume that there is none


//Splits string into 16-bit integers then sums it up and prints 1s compliment of that, meaning the negated version
//If string does not have even length, the last byte is 0
function checkSumString(str) {
    var sum = 0;
    for(var i = 0; i < str.length; i+=2) {
        var n1 = str.charCodeAt(i);

        //Set n2 to zero in case string is not any longer
        var n2 = 0;
        if(i + 1 < str.length) {
            n2 = str.charCodeAt(i+1);
        }
        //Shift n1 8 bits since this is most significant byte
        var n = (n1 << 8) + n2;
        if(i + 1 < str.length) {
            console.log(str[i] + str[i+1] + ":\t\t" + toBin(n,16));
        } else {
            //No more chars so just write null-char 
            console.log(str[i] + "\\0:\t\t" + toBin(n,16));
        }
        
        sum += n;
    
    }
    console.log("___________________________________")
    //Use modulo 2^16 to make sure number is no longer than 16 bits
    console.log("Sum:\t\t" + toBin(sum % 65536, 16)); 

    //This is the checksum
    console.log("1s compliment:\t" + toBin(~sum % 65536, 16) + " (this is the checksum)");
    
}

//checkSumString("CHKSUM");


//Converts number to string of len bits, I use this to get correct amount of bits
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
