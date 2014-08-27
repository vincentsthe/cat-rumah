define(['cat', 'd3', 'ryb'], function(cat, d3, ryb) {
	var getBarHeight = function() {
		var composition = cat.getCurrentComposition();
		var total = composition[0] + composition[1] + composition[2];

		return 300 * (total/1000);
	};

	var getBarY = function() {
		var composition = cat.getCurrentComposition();
		var total = composition[0] + composition[1] + composition[2];

		return 300 - (300 * (total/1000));
	};

	var getBarColor = function() {
		var composition = cat.getCurrentComposition();
		var total = composition[0] + composition[1] + composition[2];

		var red = composition[0] / total;
		var yellow = composition[1] / total;
		var blue = composition[2] / total;

		red = Math.floor(red*255);
		yellow = Math.floor(yellow*255);
		blue = parseInt(Math.floor(blue*255));

		redCode = red.toString(16);
		if(redCode.length == 1) {
			redCode = "0" + redCode;
		}
		yellowCode = yellow.toString(16);
		if(yellowCode.length == 1) {
			yellowCode = "0" + yellowCode;
		}
		blueCode = blue.toString(16);
		if(blueCode.length == 1) {
			blueCode = "0" + blueCode;
		}

		return "#" + ryb.mix('#' + redCode + yellowCode + blueCode, {result: "rgb"});
		return str;
	};

	var drawer = {
		update: function() {
			var composition = cat.getCurrentComposition();

			$("#red-indicator").html(" " + composition[0]);
			$("#yellow-indicator").html(" " + composition[1]);
			$("#blue-indicator").html(" " + composition[2]);

			d3.select("#cat").transition()
					.attr("height", getBarHeight())
					.attr("y", getBarY())
					.style("fill", getBarColor());
		},
	};

	return drawer;
});