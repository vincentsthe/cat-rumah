define(['jquery', 'testcase', 'notifier', 'textarea', 'cat', 'drawer'], 
	function($, testcase, notifier, textarea, cat, drawer) {
	
	$(document).ready(function() {
		var done;
		var currentTC;
		var lock;
		var active;
		
		var setActive = function(index) {
			active = index;
			$("#red").removeClass("active");
			$("#yellow").removeClass("active");
			$("#blue").removeClass("active");

			if(index == 0) {
				$("#red").addClass("active");
			} else if(index == 1) {
				$("#yellow").addClass("active");
			} else if(index == 2) {
				$("#blue").addClass("active");
			}
		};

		var init = function(numTC) {
			currentTC = numTC;
			testcase.init(currentTC);
			textarea.reset();
			cat.init();
			drawer.update();
			setActive(-1);
		};

		init(1);

		$("#reset").click(function() {
			init(currentTC);
		});

		$("#play").click(function() {
			init($("#testcase").val());
		});

		$("#red").click(function() {
			setActive(0);
		});

		$("#yellow").click(function() {
			setActive(1);
		});

		$("#blue").click(function() {
			setActive(2);
		});

		$("#volume").keyup(function(e) {
			if(e.keyCode == 13) {
				var input = $("#volume").val();
				if(!isNaN(parseFloat(input))) {
					if(active != -1) {
						cat.fill(active, parseFloat(input));
						drawer.update();

						var warna;
						if(warna == 0) {
							warna = "MERAH";
						} else if(warna == 1) {
							warna = "KUNING";
						} else {
							warna = "BIRU";
						}

						textarea.insertLeft("TAMBAH " + warna + " " + parseFloat(input));
						textarea.insertRight("" + cat.getScore().toFixed(4));
					} else {
						notifier.createAlert("Pilih Warna");
					}
				} else {
					notifier.createAlert("Masukan tidak valid.");
				}
				$("#volume").val("");
			}
		});
	});

});