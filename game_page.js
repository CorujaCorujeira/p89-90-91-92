
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	player1Score = 0;
	player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;



questionTurn = "player1";
answerTurn = "player2";

function check () {
	var getAnswer=document.getElementById("inputCheckBox").value;

	console.log("resposta em caixa baixa "+answer);

	if (answer==word) {
		if (answerTurn=="player1") {
			player1Score = player1Score+1;
			document.getElementById("player1Score").innerHTML=player1Score;
		}
		else{
			player2Score = player2Score+1;
			document.getElementById("player2Score").innerHTML=player2Score;
		}
	}

	if (questionTurn=="player1") {
		questionTurn="player2";
		document.getElementById("playerQuestion").innerHTML="turno de pergunta : "+ player2Name;
	}
	else{
		questionTurn="player1";
		document.getElementById("playerQuestion").innerHTML="turno de pergunta : "+ player1Name;
	}

	if (answerTurn=="player1") {
		answerTurn="player2";
		document.getElementById("playerAnswer").innerHTML="turno de resposta : "+ player2Name;
	}
	else{
		answerTurn="player1";
		document.getElementById("playerAnswer").innerHTML="turno de resposta : "+ player1Name;
	}

	document.getElementById("output").innerHTML="";
}

