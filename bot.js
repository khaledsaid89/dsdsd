const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602408892219260948")
setInterval(function() {
channel.send(`Fuck Mostfa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);