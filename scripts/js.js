
$("#answer1").click(function(){
    alert('I got a click');
});
function generate_question() {
	var num = Math.floor(Math.random()*10);
	document.getElementById("question").innerHTML = "<strong>What is " + num + " in Korean?</strong>"
	var x = Math.floor(Math.random()*4+1)
	document.getElementById("answer" + x).innerHTML = "<p id='correct' onclick='show_result(1)'>" + converter(num) + "</p>";
	for (i = 1; i < 5; i++) {
		if (i!=x) {
			var y = Math.floor(Math.random()*10);
			document.getElementById("answer" + i).innerHTML = "<p id='incorrect' onclick='show_result(0)'>" + converter(y) + "</p>";
		}
	}
}

function show_result(ans){
	if(ans) {
		document.getElementById("result").innerHTML = "CORRECT! :)";
	} else {
		document.getElementById("result").innerHTML = "INCORRECT! :(";
	}
}

function converter(num) {
	if (num > 10) {

	} else {
		return get_korean(num);
	}
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