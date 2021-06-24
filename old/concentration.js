var cellsA;
var cellsA1;
var cellsA2;
var cellsB;
var cellsB1;
var cellsB2;

function setup(){
	cellsA = new Array([document.getElementById("cell00"), document.getElementById("cell01"), document.getElementById("cell02"), document.getElementById("cell03"), document.getElementById("cell04"), document.getElementById("cell05"), document.getElementById("cell06"),  document.getElementById("cell07")]);
	cellsA1 = new Array([document.getElementById("hide00"), document.getElementById("hide01"), document.getElementById("hide02"), document.getElementById("hide03"), document.getElementById("hide04"), document.getElementById("hide05"), document.getElementById("hide06"), document.getElementById("hide07")]);
	cellsA2 = new Array([document.getElementById("match00"), document.getElementById("match01"), document.getElementById("match02"), document.getElementById("match03"), document.getElementById("match04"), document.getElementById("match05"), document.getElementById("match06"), document.getElementById("match07")]);
	cellsB = new Array([document.getElementById("cell10"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell17")]);
	cellsB1 = new Array([document.getElementById("hide10"), document.getElementById("hide11"), document.getElementById("hide12"), document.getElementById("hide13"), document.getElementById("hide14"), document.getElementById("hide15"), document.getElementById("hide16"), document.getElementById("hide17")]);  
	cellsB2 = new Array([document.getElementById("match10"), document.getElementById("match11"), document.getElementById("match12"), document.getElementById("match13"), document.getElementById("match14"), document.getElementById("match15"), document.getElementById("match16"), document.getElementById("match17")]);  

	pic_setA();
	pic_setB();
	document.getElementsByClassName('hide')[0].style.visibility = 'hidden';
	document.getElementsByClassName('hide')[1].style.visibility = 'hidden';
	document.getElementsByClassName('hide')[2].style.visibility = 'hidden';
	document.getElementsByClassName('hide')[3].style.visibility = 'hidden';
	document.getElementsByClassName('hide')[4].style.visibility = 'hidden';
	document.getElementsByClassName('hide')[5].style.visibility = 'hidden';
	document.getElementsByClassName('hide')[6].style.visibility = 'hidden';
	document.getElementsByClassName('hide')[7].style.visibility = 'hidden';
}



hdn_num1 = "";
hdn_num2 = "";
ct = 0;
match_check = "";
card1 = "";
card2 = "";  
score = 0;

function getImageA(hideA, cellA){
   hdn_num1= document.getElementById(hideA).innerHTML;
   card1 = cellA;
}

function getImageB(hideB, chkMatch, cellB){
   hdn_num2= document.getElementById(hideB).innerHTML;
   match_check = document.getElementById(chkMatch).innerHTML;
   card2 = cellB;
   compare();
}

function compare(){ 
    if (hdn_num1 === hdn_num2){
      document.getElementById(card1).innerHTML = match_check;
      document.getElementById(card2).innerHTML = match_check;
      ct++;
    }else{ 
      score++;
      document.getElementById("score").innerHTML = score;
    }
	end_game();
}

function end_game(){
    if (ct === 8 || score > 20){
        var endIt = document.createElement("H3");
        if (score <= 7){
			alert("Good Job!");
        }else{
          alert("Try again.");
        }
		window.location.reload();
    }
}

function pic_setA(){
  var pics = new Array();
  var randomLoc;
  var temp;
  for (var i = 0; i <= 8; i++){
    pics[i] = i;
  }
  for (i = 0; i < 8; i++){
    randomLoc = Math.floor(Math.random()* 8);
    temp = pics[i];
    pics[i] = pics[randomLoc];
    pics[randomLoc] = temp;
  }
  i = 0;
  for (var rows = 0; rows < 1; rows++){
    for (var cols = 0; cols < 8; cols++){
      cellsA[rows][cols].innerHTML = "<img src=\"images/cardback.jpg\" alt=\" Card\" onclick=\"this.src='images/8dice/dice_" + (pics[i] +1) + ".png'\" width=\"75\" height=\"75\" onMouseOut=\"this.src='images/cardback.jpg'\" border=\"0px\" width=\"75px\" height=\"75px\">";
      cellsA1[rows][cols].innerHTML = (pics[i] + 1);
      cellsA2[rows][cols].innerHTML = "<img src='images/8dice/dice_" + (pics[i] +1) + ".png'\" width=\"75\" height=\"75\">";      
      ++i;
    }
  }
}
function pic_setB()
{
  var pics = new Array();
  var randomLoc;
  var temp;
  for (var i = 0; i <= 8; i++)
    pics[i] = i;
  for (i = 0; i < 8; i++){
    randomLoc = Math.floor(Math.random()* 8);
    temp = pics[i];
    pics[i] = pics[randomLoc];
    pics[randomLoc] = temp;
  }
  i = 0;
  for (var rows = 0; rows < 1; rows++){
    for (var cols = 0; cols < 8; cols++){
        cellsB[rows][cols].innerHTML = "<img src=\"images/cardback.jpg\" alt=\"Card\" onclick=\"this.src='images/8dice/dice_" + (pics[i] +1) + ".png'\" width=\"75\" height=\"75\" onMouseOut=\"this.src='images/cardback.jpg'\" border=\"0px\" width=\"75px\" height=\"75px\">";
        cellsB1[rows][cols].innerHTML = pics[i] + 1;
        cellsB2[rows][cols].innerHTML = "<img src='images/8dice/dice_" + (pics[i] +1) + ".png'\" width=\"75\" height=\"75\">";        
      ++i;
    }
  }
}