module.exports.config = {

    name: "tdn",

    version: "1.0.1",

    hasPermssion: 0,

    credits: "code mode",

    description: "tdn",

    commandCategory: "noprefix",

    usages: "",

    cooldowns: 0

};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "tdn") ? api.sendMessage("kêu admin bot làm gì vậy ạ :D", event.threadID, () => api.sendMessage("❌kêu tiếng nữa ăn kich", event.threadID)) : '';

module.exports.run = () => {}
