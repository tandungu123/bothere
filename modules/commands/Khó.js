const fs = require("fs");
module.exports.config = {
	name: "tddh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdn", 
	description: "System",
	commandCategory: "System",
	usages: "tddh",
    cooldowns: 1, 
};

module.exports.event = async ({ event, api, Currencies,Users, args, utils }) => {
if (event.body.indexOf("tddh")==0 || (event.body.indexOf("tddh")==0)) {
		return api.sendMessage(`Kêu Tao Làm Con Mẹ Gì` , event.threadID, event.messageID);
		}
};


module.exports.run = async ({ event, api, Currencies, args, utils }) => {






	}
