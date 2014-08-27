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
		[125, 200, 50],
		[200, 200, 100]
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