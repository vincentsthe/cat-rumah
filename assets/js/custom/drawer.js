define(['cat', 'd3'], function(cat, d3) {
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

		var red = 1;
		var green = 1;
		var blue = 1;

		green -= composition[0]/total;
		blue -= composition[0]/total;

		blue -= composition[1]/total;

		red -= composition[2]/total;
		green -= composition[2]/total;

		red = Math.floor(Math.max(0, red)*255);
		green = Math.floor(Math.max(0, green)*255);
		blue = Math.floor(Math.max(0, blue)*255);

		var str = "rgb(" + red + ", " + green + ", " + blue + ")";

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