function getUserChoice(){
    var inputgiven=prompt("enter rock|paper|scissors:");
    inputgiven=inputgiven.toLowerCase();
    return inputgiven;
}

function getComputerChoice(){
    var randomnum=Math.floor(Math.random()*3);
    switch(randomnum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const determineWinner= (userchoice,computerchoice) =>{
    if(userchoice==computerchoice){
        console.log("match tie!!");
    }
    else if((userchoice=="rock" && computerchoice=="paper")||(userchoice=="paper" && computerchoice=="scissors")||(userchoice=="scissors" && computerchoice=="rock")){
        console.log("computer won");
    }
    else{
        console.log("user won");
    }
}
function playgame(){
    var userchoice=getUserChoice();
    var computerchoice=getComputerChoice();
    console.log("user:",userchoice,"computer:",computerchoice);
    determineWinner(userchoice,computerchoice);
    
}


console.log(playgame());