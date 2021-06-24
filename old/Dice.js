function initDice(){
	gamepoints = [0,0];
	dice = [1,1,1,1];	
	document.getElementById("dice0").innerHTML = ("<img src ='images/12dice/dice_1.png' height = 100 />");
	document.getElementById("dice1").innerHTML = ("<img src ='images/12dice/dice_1.png' height = 100 />");
	document.getElementById("dice2").innerHTML = ("<img src ='images/12dice/die_1.png'  height = 100 />");
	document.getElementById("dice3").innerHTML = ("<img src ='images/12dice/die_1.png'  height = 100 />");
	document.getElementById("p1Points").innerHTML = ("<p>Total Points: " + gamepoints[0] + "</p>");
	document.getElementById("p2Points").innerHTML = ("<p>Total Points: " + gamepoints[1] + "</p>");
	document.getElementById("GameWin").innerHTML = ("No one yet");
	document.getElementById("roll_button").disabled = false;
}

function dice_roll(){
	//set up var
	var pts = [0,0];
	var d = [0,0,0,0];
	for (var i = 0; i < 4; i++) {
		d[i] = (Math.floor(Math.random() * 6)+1);
		
		//display
		if(i < 2){
			document.getElementById("dice" + i).innerHTML = ("<img src ='images/12dice/dice_" + d[i] + ".png' height = 100 />");
		}else{
			document.getElementById("dice" + i).innerHTML = ("<img src ='images/12dice/die_" + d[i] + ".png' height = 100 />");
		}
	}

	//calc
	pts[0] = d[0] + d[1];
	pts[1] = d[2] + d[3];
	
	
	//doubles calc
	var win = 0;
	if(pts[0] > pts[1]){
		if(d[0]==d[1]){pts[0] *= 2;}
		win = 1;
	}
	if(pts[0] < pts[1]){
		if(d[2]==d[3]){pts[1] *= 2;}
		win = -1;
	}
	
	///*
	//round winner
	document.getElementById("Winner").innerHTML = ("Winner: Tie, no points awarded.");//tie
	if(win > 0){document.getElementById("Winner").innerHTML = ("Winner: Player, "+ pts[0] +" points awarded!"); gamepoints[0] += pts[0];}//Pwin
	if(win < 0){document.getElementById("Winner").innerHTML = ("Winner: CPU, "+ pts[1]+" points awarded."); gamepoints[1] += pts[1];}//Cwin
	
	
	///game winner
	document.getElementById("p1Points").innerHTML = ("<p>Total Points: " + gamepoints[0] + "</p>");
	document.getElementById("p2Points").innerHTML = ("<p>Total Points: " + gamepoints[1] + "</p>");
	if(gamepoints[0] > 200 || gamepoints[1] > 200){
		//Win Game
		if(gamepoints[0] > 200){document.getElementById("GameWin").innerHTML = ("Game Winner: Player!");}
		if(gamepoints[1] > 200){document.getElementById("GameWin").innerHTML = ("Game Winner: CPU.");}
		
		//disable button
		document.getElementById("roll_button").disabled = true;
	}
	
 
	if (win == true){
		document.getElementById("result").innerHTML = ("You win!");
		document.getElementById("noose").innerHTML = ("<img src = '" + picture + "' />");
	}else{
		document.getElementById("result").innerHTML = ("not a winner yet");
		if (goodGuess == false){ 
			nooseCount = nooseCount + 1;
			document.getElementById("noose").innerHTML = ("<img src ='images/hangman" + nooseCount + ".gif' />");
		}	
	}
	//*/
}







