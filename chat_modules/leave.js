var client = require("../methods");
var email = require("../config").email;

client.chat.on("message", function(ev, msg) {
	if (msg == ".leave") {
		client.replyMessage(ev, "Goodbye! Add me back anytime by entering " + email);
		client.leaveChat(ev);
	}
});
