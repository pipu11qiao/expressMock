//-->> Created by pipu on 2017/5/8.
var host = "192.168.1.106"; // your ip
var port = 3000; // server port
var baseURL = "http://" + host + ":" + port;

$.ajax({
	url: baseURL + '/api/seller',
	contentType: 'application/json;charset=utf-8',
	success: function(data) {
		console.log(data);
	}
});