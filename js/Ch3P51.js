//Script to complete exercises like the P51 in chapter 3 network book

//prints the senders cwnd for each RTT. Assuming that if there are sent more
//than the link can contain both senders get data segment loss and assuming 
//that senders receive triple dub ACK then that happens. Therefor we dont need 
//the thresholds

//Segments sent by each sender pr. round
var cwnd_c1 = 15;
var cwnd_c2 = 10;
//Round trip time for each sender in ms
var rtt_c1 = 100;
var rtt_c2 = 100;
//speed of the link c1 and c2 uses in segments / sec
var link_speed = 30;
var maxTime = 2200;
var timeInc;
//Set incrementation of timer so we can simulate each round trip for each sender
if (rtt_c1 < rtt_c2) {
    timeInc = rtt_c1;
} else {
    timeInc = rtt_c2;
}
console.log("Time: " + 0 + "\t\tcwnd for c1: " + cwnd_c1 + "\tcwnd for c2: " + cwnd_c2);
//Notice that 3 isn't added when loss is detected, sicne the exercise doesn't
// say there should
for (var i = timeInc; i <= maxTime; i += timeInc) {
    //save old cwnd for c1 to use for computations later
    old_cwnd_c1 = cwnd_c1; 
    if (i % rtt_c1 == 0) {
        if (cwnd_c1 * 1000 / rtt_c1 + cwnd_c2 * 1000 / rtt_c2 > link_speed) {
            //Both experience loss, notice that there will not be added 3 as 
            //normaly, because the exercise I made this for didn't
            cwnd_c1 = parseInt(cwnd_c1 / 2);
            //Cannot go bellow 1
            if(cwnd_c1 < 1) {
                cwnd_c1 = 1;
            }
        } else {
            cwnd_c1++;
        }
    }
    if (i % rtt_c2 == 0) {
        if (old_cwnd_c1 * 1000 / rtt_c1 + cwnd_c2 * 1000 / rtt_c2 > link_speed) {
            //Both experience loss, notice that there will not be added 3 as
            //normaly, because the exercise I made this for didn't
            cwnd_c2 = parseInt(cwnd_c2 / 2);
            //Cannot go bellow 1
            if(cwnd_c2 < 1) {
                cwnd_c2 = 1;
            }
        } else {
            cwnd_c2++;
        }
    }
    console.log("Time: " + i + "\tcwnd for c1: " + cwnd_c1 +
         "\tcwnd for c2: " + cwnd_c2);
}
