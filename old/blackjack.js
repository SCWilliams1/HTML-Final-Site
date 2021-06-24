function B_init(){
	P_Pts = 0; 
	D_Pts = 0;
}
function blackjack_start(){
	//initialize variables
	Pdraw = 0; Ddraw = 0;  points = 0;
	// Get initial draws			
	Pdraw = Math.floor(Math.random() * 9 + 2);
	Pdraw += Math.floor(Math.random() * 9 + 2);
	
	Ddraw = Math.floor(Math.random() * 9 + 2); 
	Ddraw += Math.floor(Math.random() * 9 + 2);
	
	//fill HTML page
	document.getElementById("playerhand").innerHTML = (Pdraw);
	document.getElementById("dealerhand").innerHTML = ("??");
	document.getElementById("hitme").disabled = false;
	document.getElementById("bet").disabled = false;
	document.getElementById("battle").disabled = true;
}
function game_loop(){
	// Get Player init option
	if(Pdraw <= 21){
		Pdraw += Math.floor(Math.random() * 9 + 2);
		document.getElementById("playerhand").innerHTML = (Pdraw);
		if (Pdraw > 21){game_winner(Pdraw,Ddraw);}
	}else{
		game_winner(Pdraw,Ddraw);
	}
}
function winner(pd,dd){
	//Round Winner
	var w = (1*(pd > 21)) + (2*(dd > 21));//determine winner
	var r = 0;
	points = 0;//determine points given
	if (pd == dd)//bust or tie
	{
		points = 0;
		r = 0;
	}else{
		if(w != 3){
			if(w != 0)//Auto win state
			{
				points = dd*(w == 1) + pd*(w == 2);
				r = 10*(w == 2) - 10*(w == 1);
			}else{//Comp state (neither are over 21);
				if(pd > dd){//w
					points = pd;
					r = 10;
				}else{//lose
					points = dd;
					r = -10;
				}
			}
		}else{
			points = 0;
			r = 0;
		}
	}
	return r;
}

function game_winner(){
	var win = winner(Pdraw,Ddraw);
	document.getElementById("playerhand").innerHTML = (Pdraw);
	document.getElementById("dealerhand").innerHTML = (Ddraw);
	
	if (win == 0){document.getElementById("winner").innerHTML = ("You Tie");}
	if (win > 0){document.getElementById("winner").innerHTML = ("You Win!");}
	if (win < 0){document.getElementById("winner").innerHTML = ("You Lose");}
	
	P_Pts += points*(win == 10);
	D_Pts += points*(win == -10);
	points = 0;
	document.getElementById("Ppts").innerHTML = (P_Pts);
	document.getElementById("Dpts").innerHTML = (D_Pts);
	
	document.getElementById("hitme").disabled = true;
	document.getElementById("bet").disabled = true;
	document.getElementById("battle").disabled = false;
	if(P_Pts > 200 || D_Pts > 200){
		alert("Good game! Resetting now")
		window.location.reload();
	}
}