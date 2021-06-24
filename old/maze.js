var spot;
var shift;

//var pic = ["<img src = 'images/dice_1.png' height = 50>","<img src = 'images/dice_2.png' height = 50>","<img src = 'images/dice_3.png' height = 50>"]//pics
var pic = ["0","-","1"]//pics

//for some reason pictures don't switch properly, functionality is the same though???

function setup()
{
	spot = new Array([document.getElementById("cell00"),
	document.getElementById("cell01"),
	document.getElementById("cell02"), 
	document.getElementById("cell03")], 
	[document.getElementById("cell10"), 
	document.getElementById("cell11"), 
	document.getElementById("cell12"), 
	document.getElementById("cell13")], 
	[document.getElementById("cell20"), 
	document.getElementById("cell21"),
	document.getElementById("cell22"), 
	document.getElementById("cell23")], 
	[document.getElementById("cell30"), 
	document.getElementById("cell31"), 
	document.getElementById("cell32"), 
	document.getElementById("cell33")]);
	
	place_pics(); 
}

function place_pics() // really placing pictures
{
	//
	spot[0][0].innerHTML = pic[0];//start
	spot[0][1].innerHTML = pic[1];
	spot[0][2].innerHTML = pic[1];
	spot[0][3].innerHTML = pic[1];
	//
	spot[1][0].innerHTML = pic[1];
	spot[1][1].innerHTML = pic[1];
	spot[1][2].innerHTML = pic[1];
	spot[1][3].innerHTML = pic[1];
	//
	spot[2][0].innerHTML = pic[1];
	spot[2][1].innerHTML = pic[1];
	spot[2][2].innerHTML = pic[1];
	spot[2][3].innerHTML = pic[1];
	//
	spot[3][0].innerHTML = pic[1];
	spot[3][1].innerHTML = pic[1];
	spot[3][2].innerHTML = pic[1];
	spot[3][3].innerHTML = pic[2];//goal
}

//estadlish pitfall locations between 1 and 5 (not including 5)
var pit = [Math.floor((Math.random() * 5) + 1), Math.floor((Math.random() * 5) + 1), Math.floor((Math.random() * 5) + 0)];
		
function doClick(R,C)
{
	var u = R - 1;//UP
	var d = R + 1;//DOWN
	var l = C - 1;//LEFT
	var r = C + 1;//RIGHT
	var dead = false;
	
	//kill planes
	if(!dead){
		if (spot[R][C] == spot[0][pit[0]]){
			spot[R][C] = alert("DEAD");
			dead = true;
			play_again();
		}else if(spot[R][C] == spot[1][pit[1]]){
			spot[R][C] = alert("DEAD");
			dead = true;
			play_again();
		}else if(spot[R][C] == spot[2][pit[2]]){
			spot[R][C] = alert("DEAD");
			dead = true;
			play_again();
		}else if(spot[R][C] == spot[3][pit[2]]){
			spot[R][C] = alert("DEAD");
			dead = true;
			play_again();
		}
	}
	if(!dead){
		if(u != -1 && spot[u][C].innerHTML == pic[0]){
			swap(spot[R][C], spot[u][C]);//swap
		}else if(r != 4 && spot[R][r].innerHTML == pic[0]){
			swap(spot[R][C], spot[R][r]);
		}else if (l != -1 && spot[R][l].innerHTML == pic[0]){
			swap(spot[R][C], spot[R][l]);
		}else if(d != 4 && spot[d][C].innerHTML == pic[0]){
			swap(spot[R][C], spot[d][C]);
		}else{}//illegal
	}
	checkWinner();
}

function swap(x1,x2)
{
	shift = true;
	x1.innerHTML = x2.innerHTML;
	x2.innerHTML = pic[1];
}

function checkWinner()
{
	if (spot[3][3].innerHTML == pic[0]){
		alert("Congratulations! You won!");
		play_again();
	}
}
function play_again(){
	if (window.prompt("Play again?", "yes")){
		setup();
	}
}