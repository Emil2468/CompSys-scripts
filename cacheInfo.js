//Script to give information on an address when using specific cache
//I believe that the names comply with the book as seen on page 653
var address = 0x0004; //Change this to fit exercise
//Size of each block in bytes
var B = 64; //Change this to fit exercise
//Number of lines pr. set
var E = 2; //Change this to fit exercise
//Size of cache in bytes
var C = 2048; //Change this to fit exercise

//Number of bits in address
var m = 16; //Change this to fit exercise

//Prints how many bits are used for different things for cache with given attributes
//B: Block size
//E: Number of lines pr. set
//C: Capacity of cache
//m: number of bits in address
function cacheInfo(B, E, C, m) {
    var b = log2(B);
    var S = C / (B * E);
    var s = log2(S);
    var t = m - (s + b);

    console.log("Number of sets: " + S);
    console.log("Number of bits in block offset: " + b);
    console.log("Number of bits in set index: " + s);
    console.log("Number of bits in tag: " + t);
}

//Since IE does not support Math.log2 use this
function log2(x){
    return Math.log(x)/Math.log(2);
}