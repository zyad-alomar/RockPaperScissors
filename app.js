


let log = console.log;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let humanScore = 0;
let computerScore = 0;
let humanChoice = 0;
let computerchoice1 = 0;
let s1 = document.getElementById("score1");
let s2 = document.getElementById("score2");

let s3 = 0;
let s4 = 0;




let w = document.getElementById("GameOver");
let GameOver = document.createElement("h1");

let vs = document.getElementById("vs");



let Amaudio = document.getElementById("AMaudio");

function getComputerChoice() {
    computerchoice1 = Math.floor(Math.random() * 3) + 1;
}

rock.addEventListener("click", () => {
    humanChoice = 1;
    scores(humanChoice);
});

paper.addEventListener("click", () => {
    humanChoice = 2;
    scores(humanChoice);
});

scissors.addEventListener("click", () => {
    humanChoice = 3;
    scores(humanChoice);
});

function scores(humanChoice) {
    getComputerChoice();
    if (humanChoice == 1 && computerchoice1 == 3) { humanScore += 1;
        s3 +=1;
        s1.textContent = s3;
        vs.innerHTML = "Rock vs Scissors";
     }
    else if (humanChoice == 2 && computerchoice1 == 1) { humanScore += 1;
        s3+=1;
        s1.textContent = s3;
        vs.innerHTML = "Paper vs Rock";
     }
    else if (humanChoice == 3 && computerchoice1 == 2) { humanScore += 1; 
        s3+=1;
        s1.textContent = s3;
        vs.innerHTML = "Scissors vs Paper";
    }
    else if (computerchoice1 == 1 && humanChoice == 3) { computerScore += 1;
        s4+=1;
        s2.textContent = s4;
        vs.innerHTML = "Scissors vs Rock";
     }
    else if (computerchoice1 == 2 && humanChoice == 1) { computerScore += 1;
        s4+=1;
        s2.textContent = s4;
        vs.innerHTML = "Rock vs Paper";
     }
    else if (computerchoice1 == 3 && humanChoice == 2) { computerScore += 1;
        s4+=1;
        s2.textContent = s4;
        vs.innerHTML = "Paper vs Scissors";
     }
     else if (computerchoice1 == 1 && humanChoice == 1) {
        vs.innerHTML = "Rock vs Rock";
     }

     else if (computerchoice1 == 2 && humanChoice == 2) {
        vs.innerHTML = "Paper vs Paper";
     }

     else if (computerchoice1 == 3 && humanChoice == 3) {
        vs.innerHTML = "Scissors vs Scissors";
     }


    if (humanScore == 3) {
        log("Human wins!");
        humanScore += 8;
        computerScore+=8;
        let GameOverer = document.createTextNode("YOU WIN");
        GameOver.appendChild(GameOverer);
        w.appendChild(GameOver);
        Amaudio.innerHTML = '<audio controls><source src="AMhate.mpeg" type="audio/mpeg">Your browser does not support the audio element.</audio>';


    } else if (computerScore == 3) {
        log("Computer wins!");
        humanScore += 8;
        computerScore+=8;
let GameOverer = document.createTextNode("YOU LOST");
GameOver.appendChild(GameOverer);
w.appendChild(GameOver);



    }

}