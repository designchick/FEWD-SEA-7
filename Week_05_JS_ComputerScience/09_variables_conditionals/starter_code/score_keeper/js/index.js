$(document).ready(function() {
	var score = 0;
	// add 5
	var add5 = function() {
		score += 5;
		$("#result").html(score);
	}

	$("#add5").click(add5);
	// add 10
	var add10 = function() {
		score += 10;
		$("#result").html(score);
	}

		$("#add10").click(add10);
	// minus -1
	var sub1 = function() {
		score += -1;
		$("#result").html(score);
	}

		$("#sub1").click(sub1);
});