var client = require("../methods");

client.chat.on("join", function(ev) {
	client.replyMessage(ev, "Hello, I am Poly Bot, your chat assistant! Type .ref for more information, or .leave to make me leave!");
});
