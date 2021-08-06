const fs = require("fs");
module.exports.config = {
	name: "đừng dùng huhu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "System",
	usages: "@tdn",
    cooldowns: 1, 
};

module.exports.event = async ({ event, api, Currencies,Users, args, utils }) => {
if (event.body.indexOf("@Dung")==0 || (event.body.indexOf("@Dung")==0)) {
		return api.sendMessage(`Tag BOT có gì hông :3` , event.threadID, event.messageID)
		}
};


module.exports.run = async ({ event, api, Currencies, args, utils }) => {






	}
