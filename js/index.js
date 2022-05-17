let randomAnswer1 = Math.floor(Math.random() * 3) + 1;
let randomAnswer2 = Math.floor(Math.random() * 3) + 1;
let correct1 = false;
let correct2 = false;
let correct3 = false;

const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");

function crossRiver(string) {
	switch (randomAnswer1) {
		case 1:
			randomAnswer1 = "boat";
			break;
		case 2:
			randomAnswer1 = "floaty";
			break;
		case 3:
			randomAnswer1 = "tree";
			break;
		default:
			console.log("no correct answer!");
	}

	if (randomAnswer1 == string) {
		correct1 = true;
		alert("next level!");
	} else {
		alert("wrong answer!");
	}

	// hide level 1; show level 2
	if (correct1 && !correct2) {
		level1.classList.add("hideLevel");
		level2.classList.remove("hideLevel");
	}
}

// hide level2 while user still in level 1
if (!correct1 && !correct2) {
	level2.classList.add("hideLevel");
}
function findKey(string) {
	switch (randomAnswer2) {
		case 1:
			randomAnswer2 = "tree";
			break;
		case 2:
			randomAnswer2 = "mailBox";
			break;
		case 3:
			randomAnswer2 = "shed";
			break;
		default:
			console.log("no correct answer!");
	}

	if (randomAnswer2 == string) {
		correct2 = true;
		alert("next level!");
	} else {
		alert("wrong answer!");
	}
	if (correct2 && !correct3) {
		level2.classList.add("hideLevel");
		level3.classList.remove("hideLevel");
		setTimeout(() => {
			eightRooms();
		}, 500);
	}
}

if (!correct2 && !correct3) {
	level3.classList.add("hideLevel");
}

function eightRooms() {
	let pickRoom = 0;
	let queenRoom = Math.floor(Math.random() * 8) + 1;
	while (pickRoom != queenRoom) {
		pickRoom = prompt("Please enter a room number between 1 to 8: ");
		pickRoom = Number(pickRoom);
		switch (pickRoom) {
			case 1:
				pickRoom == queenRoom ? null : alert("Troll is coming to you!!!!!!!");
				break;
			case 2:
				pickRoom == queenRoom ? null : alert("Bear is coming to you!!!!!");
				break;
			case 3:
				pickRoom == queenRoom ? null : alert("Owl is STARING at you!!!!!");
				break;
			case 4:
				pickRoom == queenRoom ? null : alert("There is open Lava pit!");
				break;
			case 5:
				pickRoom == queenRoom ? null : alert("Raccoon is coming to you!!!!");
				break;
			case 6:
				pickRoom == queenRoom ? null : alert("Wolf is coming to you!!!!");
				break;
			case 7:
				pickRoom == queenRoom ? null : alert("Snow White is laying there!!!!!");
				break;
			case 8:
				pickRoom == queenRoom ? null : alert("Endless PIT!!!!!!!!!!!!!!");
				break;
			default:
				alert("Please enter a valid number!!!!!!!");
		}
	}
	document.write("Congratulation! You found the Evil Queen!!!!");
}
