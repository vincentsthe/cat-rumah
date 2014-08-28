define(['testcase'], function(testcase) {
	var message = {
		help: function() {

			var str = "<p>Scroll down to read help in English</p><br>=================================================<br><p>Bahasa Indonesia</p>=================================================<br><p>Klik pada salah satu kotak warna di bawah lalu isi volume yang ingin ditambah dan tekan enter untuk menambahkan cat. Anda akan diberitahu nilai kemiripan setiap penambahan cat.</p><br><p>Untuk mengganti subtask yang ingin dimainkan, pilih subtask yang ingin dimainkan pada menu dropdown subtask dan klik tombol 'play'. Untuk Mengulang game klik tombol 'reset'.</p>=================================================<br><p>English</p>=================================================<br><p>Click on one of the color box below and then fill the amount of volume and press enter to add the paint. You will be told the similiarity point every paint addition.</p><br><p>To change the subtask played, choose the subtask you want to play in subtask dropdown menu and click 'play'. To reset the game, click on 'reset' button</p>";

			return str;
		},
		about: function() {
			var str = "<p>This game is created for the visualisation purpose of Olimpiade Sains Nasional (OSN) 2014 purpose.</p>&#169; 2014 TOKI";

			return str;
		},
	};

	return message;
});