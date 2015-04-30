// Array to store answers in order to check for duplicates
var used = [];

// Generates the question
function generate_question() {
	// Hide the 'next question' button
	document.getElementById("continue").innerHTML = ""
	// Clear the answers array when a new question is generated
	used = [];
	// Pick a random number [0,10) to ask
	var num = Math.floor(Math.random()*10);
	// Add it to the used array
	used[used.length] = num;
	// Display the question using the numeral
	document.getElementById("question").innerHTML = "<p>What is " + num + " in Korean?</p>"
	// Place the correct answer at a random position
	var x = Math.floor(Math.random()*4+1)
	document.getElementById("answer" + x).innerHTML = "<p id='correct' onclick='show_result(1)'>" + converter(num) + "</p>";
	// Place randomly generated incorrect answers at random positions
	for (i = 1; i < 5; i++) {
		if (i!=x) {
			do {
				var y = Math.floor(Math.random()*10);
			} while (used.indexOf(y) > -1) // Make sure that answers don't duplicate
			used[used.length] = y;
			document.getElementById("answer" + i).innerHTML = "<p id='incorrect' onclick='show_result(0)'>" + converter(y) + "</p>";
		}
	}
}

// Show the result of the answer after being clicked
function show_result(ans){
	if(ans) {
		document.getElementById("result").innerHTML = "CORRECT! :)";
		document.getElementById("continue").innerHTML = "<button type='button' onclick='generate_question()'>Next question</button>"
	} else {
		document.getElementById("result").innerHTML = "INCORRECT! :(";
	}
}

function converter(num) {
	var korean_num = "";
	if (num > 100) {

	} else if (num > 10) {

	} else {
		korean_num += get_korean(num);
	}
	return korean_num;
}

function get_korean(num) {
	switch (num) {
		case 0:
			return "영"
			break;
		case 1:
			return "일"
			break;
		case 2:
			return "이"
			break;
		case 3:
			return "삼"
			break;
		case 4:
			return "사"
			break;
		case 5:
			return "오"
			break;
		case 6:
			return "육"
			break;
		case 7:
			return "칠"
			break;
		case 8:
			return "팔"
			break;
		case 9:
			return "구"
			break;
	}
}