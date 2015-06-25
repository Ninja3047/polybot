var client = require("../methods");
var request = require("request");
var iconv = require('iconv-lite');
var cheerio = require("cheerio");


client.chat.on("message", function(ev, msg) {
	var match = msg.match(/\.t (.+)/);
	if (msg.indexOf(".t") === 0 && msg.length > 3) {
		client.startTyping(ev);
		var query = msg.substring(3);
		console.log(query);
		request.encoding = 'UTF-8'
		request("https://translate.google.com/?text=" + encodeURI(query), function(error, response, body) {
			if (!error) {
				var $ = cheerio.load(body);
				var translated = $("#result_box").text();
				console.log(translated)
				client.replyMessage(ev, translated);
			} else {
				client.replyMessage(ev, "error");
			}
			client.stopTyping(ev);
		});
	}
});
