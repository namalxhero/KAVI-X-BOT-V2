const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~ewA1hYQJ#smsr89O8fz7rZfOLHuVbKcS0kzwWIK4qVx2VkDZj2HQ"
global.mongodburi = process.env.MONGODB_URI || "mongodb+srv://wanahac344:4H11Ip35dqZCGJg7@cluster0.3blbqc1.mongodb.net/nipuna-0757253212?retryWrites=true&w=majority&appName=Cluster0"
global.botname = process.env.BOTNAME || "NIPUNA-MD"
global.ownernumber = process.env.OWNERNUMBER || "94772915479"
global.ownername = process.env.OWNERNAME || "NIPUNA"
global.packname = process.env.PACKNAME || "KAVI-X MD"
global.author = process.env.AUTHOR || "Cyber Kavi"

global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.botlogo = process.env.BOTLOGO || "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix03.png"

global.port = process.env.PORT || 3000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
