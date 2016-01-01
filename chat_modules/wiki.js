var client = require("../methods");
var request = require("request");

client.chat.on("message", function(ev, msg) {
	var match = msg.match(/\.wiki (.+)/);
	if (match) {
		client.startTyping(ev);
		request("https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&namespace=0&redirects=resolve&format=json&search=" + match[1], function(error, response, body) {
			var res = JSON.parse(body);
			var link = res[3][0];
			var summary = res[2][0];
			var linkbuilder = new client.Client.MessageBuilder();
			var segments;
			if(summary.match(/.+may refer to:/))
				segments = linkbuilder.link("[Ambiguous]", link).toSegments();
			else segments = linkbuilder.text(summary).text(" ").link("[full]", link).toSegments();

			if(summary) client.replySegments(ev, segments);
			else client.replyMessage(ev, "no results found");

			client.stopTyping(ev);
		});
	}
});
