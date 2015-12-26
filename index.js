var Client = require("hangupsjs");
var Q = require("q");
var events = require("events");
var fs = require("fs");

var client = new Client();
exports.client = client;
exports.Client = Client;
var chat = new events.EventEmitter();
chat.setMaxListeners(30);
exports.chat = chat;

fs.readdirSync(__dirname + "/chat_modules").forEach(function(file) {
	if (file.slice(-2) == "js") require("./chat_modules/" + file);
});

var creds = function() {
	return {
		auth: Client.authStdin
	};
};

//client.loglevel('debug');

var reconnect = function() {
	client.connect(creds).then(function() {});
};

client.on("chat_message", function(ev) {
	if (ev.chat_message.message_content.segment &&
		ev.self_event_state.user_id.gaia_id != ev.sender_id.gaia_id) {
		chat.emit("message", ev, ev.chat_message.message_content.segment[0].text);
	}
});

client.on("membership_change", function(ev) {
	if (ev.membership_change.type == "JOIN" && ev.membership_change.participant_ids[0].gaia_id == ev.self_event_state.user_id.gaia_id) {
		chat.emit("join", ev);
	}
});

client.on("connect_failed", function() {
	Q.Promise(function(rs) {
		setTimeout(rs, 3000);
	}).then(reconnect);
});

client.connect(creds).then(function() {
	console.log("signed in successfully");
}).done();
