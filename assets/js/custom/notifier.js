define(['testcase'], function(testcase) {
	lock = false;

	var notifier = {
		createAlert: function(message) {
			if(!lock) {
				lock = true;
				var overlay = document.createElement("div");
				overlay.setAttribute("id", "overlay");
				document.body.appendChild(overlay);

				var notifBox = document.createElement("div");
				notifBox.setAttribute("id", "notif-box");
				overlay.appendChild(notifBox);

				var notifContent = document.createElement("div");
				notifContent.setAttribute("id", "notif-content");
				notifBox.appendChild(notifContent);

				var button = document.createElement("button");
				button.setAttribute("class", "btn btn-warning");
				button.setAttribute("id", "notif-button");
				notifBox.appendChild(button);

				$("#notif-button").html("OK");

				$("#notif-content").html(message);

				$("#overlay").click(function() {
					$("#overlay").remove();
					lock = false;
				});
			}
		},
		createText: function(message) {
			if(!lock) {
				lock = true;
				var overlay = document.createElement("div");
				overlay.setAttribute("id", "overlay");
				document.body.appendChild(overlay);

				var notifBox = document.createElement("div");
				notifBox.setAttribute("id", "notif-box");
				overlay.appendChild(notifBox);

				var notifContent = document.createElement("div");
				notifContent.setAttribute("id", "notif-text");
				notifBox.appendChild(notifContent);

				var button = document.createElement("button");
				button.setAttribute("class", "btn btn-warning");
				button.setAttribute("id", "notif-button");
				notifBox.appendChild(button);

				$("#notif-button").html("OK");

				$("#notif-text").html(message);

				$("#overlay").click(function() {
					$("#overlay").remove();
					lock = false;
				});
			}
		},
	};

	return notifier;
});