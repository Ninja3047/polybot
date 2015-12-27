var imageSend = require("../lib/imageSend");

var client = require("../methods");

var config = require("../config");
var giphy = require("giphy-api")(config.giphy);

client.chat.on("message", function(ev, msg) {
	var match = msg.match(/\.gif (\(([0-9]+)\) )?(.+)/);
	if (match) {
		client.startTyping(ev);
		var query = {
			index: match[2] - 1,
			str: match[3]
		};
		giphy.search(query.str, function(err, res) {
			if (res.data.length > 0 && !err) {
				if((query.index === undefined) || !res.data[query.index]) query.index = Math.floor(Math.random() * res.data.length);
				var gif = "https://media.giphy.com/media/" + res.data[query.index].id + "/giphy.gif";
				imageSend(gif, ev);
			} else {
				client.replyMessage(ev, "No relevant gifs found.");
				client.stopTyping(ev);
			}
		});
	}
});
