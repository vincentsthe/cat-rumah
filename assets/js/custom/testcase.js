define([], function() {
	var tc = [];
	var currentTC;

	/**
		0 = kelingking,
		1 = telunjuk,
		2 = ibu jari,
	*/
	var answer = [
		[],
		[500, 250, 250],
		[123.4567, 765.4321, 111.1112]
	];

	var testcase = {
		init: function(numTC) {
			currentTC = numTC;
		},
		getAnswer: function() {
			return answer[currentTC];
		},
		getColor: function(index) {
			return answer[currentTC][index];
		},
	};

	return testcase;
});