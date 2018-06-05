//array for first reel
var array = ["assets/images/plum.png", "assets/images/watermelon.png", "assets/images/redseven.png", "assets/images/lemon.png", "assets/images/cherry.png", "assets/images/bell.png"];
//array for second reel
var array1 = ["assets/images/plum.png", "assets/images/watermelon.png", "assets/images/redseven.png", "assets/images/lemon.png", "assets/images/cherry.png", "assets/images/bell.png"];
//array for third reel
var array2 = ["assets/images/plum.png", "assets/images/watermelon.png", "assets/images/redseven.png", "assets/images/lemon.png", "assets/images/cherry.png", "assets/images/bell.png"];

var i = 0;  //variable for reel 1 array index
var x = 0;  //variable for reel 2 array index
var z = 0;  //variable for reel 3 array index

var tcredit = 10;   //variable for total credits
var bet = 0;    //variable for the current bet
var tbet = 0;   //variable for total bets placed

var spinner1 = false;   //variable for reel1 spin state
var spinner2 = false;   //variable for reel2 spin state
var spinner3 = false;   //variable for reel3 spin state

var won = 0;    //variable for currently won amount

var wincount = 0;   //variable for number of wins
var losecount = 0;  //variable for number of loses
var totalcount = 0; //variable for total games played

var timer;      //variable to set reel interval eneble
var betstat = false;    //variable for checking the bet placement


//spin first reel
function spinReels1() {
    //check spinning status
    if (spinner1 === false) {
        //get image by reel id
        document.getElementById("imgReel").src = array[i];
        //increment index
        i++;
        if (i == 6) { //set index back to 0 if index exceeds array length
            i = 0;
        }
    }
}

//spin second reel
function spinReels2() {
    //check spinning status
    if (spinner2 === false) {
        //get image by reel id
        document.getElementById("imgReel1").src = array1[x];
        //increment index
        x++;
        if (x == 6) { //set index back to 0 if index exceeds array length
            x = 0;
        }
    }
}

//spin third reel
function spinReels3() {
    //check spinning status
    if (spinner3 === false) {
        //get image by reel id
        document.getElementById("imgReel2").src = array2[z];
        //increment index
        z++;
        if (z == 6) { //set index back to 0 if index exceeds array length
            z = 0;
        }
    }
}

function spin() { //function for spinning reels

    //check for a bet
    if(betstat){
        //set the current won amount to 0
        won = 0;
        //set credits won label to it's current state
        document.getElementById("creditwon").innerHTML ="Credits won : "+won;
        //set credits current bet label to it's current state
        document.getElementById("betlbl").innerHTML ="Current bet : "+bet;
        //enable max bet button
        document.getElementById("maxbtn").disabled = false;

        spinner1 = false; //set spinner state for reel 1 as spinning
        spinner2 = false; //set spinner state for reel 2 as spinning
        spinner3 = false; //set spinner state for reel 3 as spinning

        shuffle(array); //shuffle first array
        shuffle(array1); //shuffle second array
        shuffle(array2); //shuffle third array

        //set all 3 reels spinning interval
        timer = setInterval("spinReels1(); spinReels2(); spinReels3()", 100);

    }else{ //if no bets have placed
        //print a message to the player
        document.getElementById("betlbl").innerHTML ="Current bet : Place a bet to play";
    }


}

function shuffle(inputArray) { //shuffling the array

        var j, x, i; //local variables for indexes

        for (i = inputArray.length - 1; i > 0; i--) {   //looping for the array length
            j = Math.floor(Math.random() * (i + 1));    //get randoms
            x = inputArray[i];  //set to array
            inputArray[i] = inputArray[j];  //set to array
            inputArray[j] = x;  //set to array

        }

        return inputArray; //return parameter
}



function stop1(){   //first reel clicked
    spinner1 = true;    //set reel 1 spinner state as stopped
    reelstopcheck();    //check spin stats all-together
}

function stop2(){   //second reel clicked
    spinner2 = true;    //set reel 2 spinner state as stopped
    reelstopcheck();    //check spin stats all-together
}

function stop3(){   //third reel clicked
    spinner3 = true;    //set reel 3 spinner state as stopped
    reelstopcheck();    //check spin stats all-together
}

function reelstopcheck(){
    //chech if all reels stopped spinning
    if (spinner1 === true && spinner2 === true && spinner3 === true) {
        varify(); //call verification method
        value();    //call value method
    }
}

function value() {  //assigning relevant values


    var reel1val = 0; //variable for reel 1 value
    var reel2val = 0; //variable for reel 2 value
    var reel3val = 0; //variable for reel 3 value

    var reel1 = document.getElementById("imgReel").src;  //get reel 1 image src
    var reel2 = document.getElementById("imgReel1").src;    //get reel 2 image src
    var reel3 = document.getElementById("imgReel2").src;    //get reel 3 image src


    if(reel1 == "http://localhost:9000/assets/images/plum.png"){
        //set reel 1 value for plum
        reel1val = 4
    }else if(reel1 == "http://localhost:9000/assets/images/watermelon.png"){
        //set reel 1 value for watermelon
        reel1val = 5;
    }else if(reel1 == "http://localhost:9000/assets/images/redseven.png"){
        //set reel 1 value for red seven
        reel1val = 7;
    }else if(reel1 == "http://localhost:9000/assets/images/lemon.png"){
        //set reel 1 value for lemon
        reel1val = 3;
    }else if(reel1 == "http://localhost:9000/assets/images/cherry.png"){
        //set reel 1 value for cherry
        reel1val = 2;
    }else if(reel1 == "http://localhost:9000/assets/images/bell.png"){
        //set reel 1 value for bell
        reel1val = 6;
    }

    if(reel2 == "http://localhost:9000/assets/images/plum.png"){
        //set reel 2 value for plum
        reel2val = 4
    }else if(reel2 == "http://localhost:9000/assets/images/watermelon.png"){
        //set reel 2 value for watermelon
        reel2val = 5;
    }else if(reel2 == "http://localhost:9000/assets/images/redseven.png"){
        //set reel 2 value for red seven
        reel2val = 7;
    }else if(reel2 == "http://localhost:9000/assets/images/lemon.png"){
        //set reel 2 value for lemon
        reel2val = 3;
    }else if(reel2 == "http://localhost:9000/assets/images/cherry.png"){
        //set reel 2 value for cherry
        reel2val = 2;
    }else if(reel2 == "http://localhost:9000/assets/images/bell.png"){
        //set reel 2 value for bell
        reel2val = 6;
    }

    if(reel3 == "http://localhost:9000/assets/images/plum.png"){
        //set reel 3 value for plum
        reel3val = 4
    }else if(reel3 == "http://localhost:9000/assets/images/watermelon.png"){
        //set reel 3 value for watermelon
        reel3val = 5;
    }else if(reel3 == "http://localhost:9000/assets/images/redseven.png"){
        //set reel 3 value for red seven
        reel3val = 7;
    }else if(reel3 == "http://localhost:9000/assets/images/lemon.png"){
        //set reel 3 value for lemon
        reel3val = 3;
    }else if(reel3 == "http://localhost:9000/assets/images/cherry.png"){
        //set reel 3 value for cherry
        reel3val = 2;
    }else if(reel3 == "http://localhost:9000/assets/images/bell.png"){
        //set reel 3 value for bell
        reel3val = 6;
    }


    //call calculations method
    calculations(reel1val, reel2val, reel3val);

}


//function for calculations
function calculations(reel1val, reel2val, reel3val){

    //check for same images in 2 or more reels
    if (reel1val === reel2val || reel2val === reel3val || reel1val === reel3val) {
        alert("You won!!");     //won alert
        wincount++;     //increment number of wins

        //if all 3 reels are same
        if (reel1val === reel2val && reel2val === reel3val) {
           //calculate won credits
            won = (bet*reel1val*3);
            //calculate total credits remaining
            tcredit += won;

            //if two reels are same
        } else if (reel1val === reel2val) {
            //calculate won credits
            won = (bet*reel1val*2);
            //calculate total credits remaining
            tcredit += won;

            //if two reels are same
        } else if (reel2val === reel3val) {
            //calculate won credits
            won = (bet*reel2val*2);
            //calculate total credits remaining
            tcredit += won;

            //if two reels are same
        } else {
            //calculate won credits
            won = (bet*reel1val*2);
            //calculate total credits remaining
            tcredit += won;

        }


    } else {    //if no reels are same
        alert("You lost!!");    //lost alert
        losecount++;    //increment lose count
    }

    tbet += bet;    //calculate total bets placed
    bet = 0;    //set current bet to 0
    betstat = false;    //set bet state to false
    document.getElementById("creditlbl").innerHTML ="Total credits : "+tcredit; //set credit label
    document.getElementById("creditwon").innerHTML ="Credits won : "+won;   //set won label
}

function varify() { //verification
    if(spinner1 && spinner2 && spinner3){
        clearInterval(timer); //clear reel timer to stop the reels
    }
    
}


function addcoin(){ //function to add a coin
    tcredit++;  //increment total credits
    document.getElementById("creditlbl").innerHTML ="Total credits : "+tcredit; //set total credits label

}

function betone(){  //function to bet one
    betstat = true; //set bet state true
    tcredit--;  //remaining credits
    bet++;  //current bet
    document.getElementById("creditlbl").innerHTML ="Total credits : "+tcredit; //set total credits label
    document.getElementById("betlbl").innerHTML ="Current bet : "+bet;  //set current bet label

}

function betmax(){  //function to bet max
    betstat = true; //set bet state true
    tcredit-=3; //remaining credits
    bet+=3; //current bet
    document.getElementById("maxbtn").disabled = true;      //disable bet max button
    document.getElementById("creditlbl").innerHTML ="Total credits : "+tcredit; //set total credits label
    document.getElementById("betlbl").innerHTML ="Current bet : "+bet;  //set current bet label

}

function statistics() {
    //call statistics page in a new tab
    window.open("/statistics/" + wincount + "/" + losecount);
}





