define(['testcase'], function(testcase) {
	var isi = [0, 0, 0];

	var getW = function() {
		var index;
		do {
			index = Math.floor(Math.random() * 3);
		} while(isi[index] == 0);
		var k = testcase.getColor(index) / isi[index];

		return Math.abs(k*isi[0] - testcase.getColor(0)) + Math.abs(k*isi[1] - testcase.getColor(1)) + Math.abs(k*isi[2] - testcase.getColor(2));
	};

	var cat = {
		init: function() {
			isi = [0, 0, 0];
		},
		fill: function(index, quantity) {
			isi[index] += quantity;
		},
		getScore: function() {
			return Math.max(0, 100 - 4*Math.sqrt(getW()));
		},
		getCurrentComposition: function() {
			return isi;
		},
		getTotal: function() {
			return isi[0] + isi[1] + isi[2];
		},
	};

	return cat;
});