//"use strict";
alert("Think you can beat me in this awesome classic Rock Paper Scissors game?! GAME ON!!!");

//While loop for player's replay confirmation
//Only "OK" or "Cancel" as option with "window.confirm()", no need to worry about keeping track of using input
var replay;
while (replay = window.confirm("Ready?!!")) { 
	
	//Declaring global variables
	//Assign user's input (string) to the variable "userChoice"
	var userChoice = prompt("Enter number [1] for Rock, [2] for Paper, or [3] for Scissors.", "#1, 2, or 3?");
	//Turn user input into an integer with parseInt(string, radix)
	userChoice = parseInt(userChoice, 10);
	//Generate random whole numbers from 1 to 3 as CPU's choice.
	// Math.random() generates a random real number x with 0 <= x < 1
	// Math.floor always rounds down to integers.
	// General format: var randomNumber = firstIndex + Math.floor( (lastIndex - firstIndex + 1) * Math.random() );
	var randNum = 1 + Math.floor(Math.random()*3);  
	//Assign randNum's value to the variable "cpuChoice"
	var cpuChoice = randNum;

	//Create a function to compare user's vs. cpu's input
	function RPSGame(user, cpu) {

		//Assign the difference between user's vs cpu's values to the local variable "decision"
		var decision = user - cpu;
		//Swith on the different cases that "decision"'s value can take
		switch(decision) {
			//This is when user = 1(Rock) and cpu = 3 (Scissors)
			case -2:
				alert("I chose Scissors => Rock breaks Scissors => YOU WIN!!!");
				break;
			case -1: 
				//This is when user = 1 (Rock) and cpu = 2 (Paper)
				if (user === 1) {
				alert("I chose Paper => Paper covers Rock => I WIN!!!");
				} else {
				//This is when user = 2 (Paper) and cpu = 3 (Scissors)
				   alert("I chose Scissors => Scissors cuts Paper => I WIN!!!"); 
				}
				break;
			case 0: //This is when user = cpu
				if (user === 1) {
					user = "Rock";
				} else if (user === 2) {
					user = "Paper";
				} else {
					user = "Scissors";
				}
				alert("We both chose " + user +" => TIE!!!");
				break;
			case 1:
				//This is when user = 2(Paper) and cpu = 1 (Rock)
				if (user === 2) {
				alert("I chose Rock => Paper covers Rock => YOU WIN!!!");            
				} else {
				//This is when user = 3(Scissors) and cpu = 1 (Paper)
					alert("I chose Paper => Scissors cuts Paper => YOU WIN!!!"); 
				}
				break;
			//This is when user = 1(Scissors) and cpu = 1 (Rock)
			case 2:
				alert("I chose Rock => Rock breaks Scissors => I WIN!!!");
				break;
		}
	}    

	RPSGame(userChoice, cpuChoice);
}
alert("Play again soon!");