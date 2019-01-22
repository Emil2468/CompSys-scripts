//Couldn't find a good description of this, so I assume two things:
//1) the message is padded with zeros if length is not divisible by 4
//2) That there won't be exercises with this in the exam since we haven't used
// it much in the course

//checkSumString('CHKSUM');

function checkSumString(str) {
    var sums = [];
    for (var i = 0; i < 4; i++) {
        sums[i] = 0;
    }
    var res = "";
    for (var i = 0; i < str.length; i++) {
        if (i % 4 == 0) {
            console.log(res);
            res = "";
        }
        res += str.charCodeAt(i).toString(16) + "   ";

        sums[i % 4] = (sums[i % 4] + str.charCodeAt(i)) % 0xff;
    }
    //Since the last line won't be printed in the loop, print it here
    console.log(res);
    console.log("__________________")
    res = "";
    for (var i = 0; i < 4; i++) {
        res += sums[i].toString(16) + "   ";

    }
    console.log(res);

}


//Returns the n'th byte from num, 0th being the least significant byte
function extractByte(n, num) {
    var mask = 0;
    for (var i = n * 8; i < (n + 1) * 8; i++) {
        //Add 8 bits set to one in correct position
        mask += parseInt(Math.pow(2, i));
    }
    //bitwise and to set all other bytes to 0
    //then shift so we only have one relevant byte
    return (mask & num) >> (n * 8);
}
