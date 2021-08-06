module.exports.config = {
    name: "nịt",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Loi",
    description: "Bot sẽ chửi lại nếu có người chửi nó - Mod lại từ noprefix",
    commandCategory: "general",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cainit.gif")) request("https://video.xx.fbcdn.net/v/t42.3356-2/185711327_4053373351378311_4051309412749426604_n.mp4/video-1626757728.mp4?_nc_cat=105&ccb=1-3&_nc_sid=060d78&_nc_ohc=hYt58x1H6kAAX_mjPkx&vabr=287274&_nc_ht=video.xx&oh=320be9f964384d8668a481a94c74af9c&oe=60F7A18F&dl=1").pipe(fs.createWriteStream(dirMaterial + "ngu.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies, Users, args, utils, global, client }) => {
    const fs = require("fs");
    let dt = await api.getUserInfo(event.senderID);
    let name = dt[event.senderID].name;
    var msg = {
        body: `có cái nịt nhé ${name}`,
        attachment: fs.createReadStream(__dirname + `/noprefix/ngu.jpg`)
    }
    if (event.body.toLowerCase() == "cái nịt") {
        return api.sendMessage(msg, event.threadID, event.messageID);
    }
};
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
    return api.sendMessage("cái nịt", event.threadID)
}
