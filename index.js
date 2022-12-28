const { Client, CommandHandler } = require("github:mengkodingan/ckptw");
const path = require("path");
const bot = new Client({
  name: "RGB",
  prefix: ".",
  authFolder = "./sync",
  owners: '6281455037288',
  autoRead: true,
});

bot.ev.once('ready', (m) => {
  console.log(`ready at ${m.user.id}`);
  bot.whats.sendMessage(`6281455037288@s.whatsapp.net`, {text: `bot online!`})
});

process.on('uncaughtException', function (err) {
  console.error(err);
  bot.whats.sendMessage(`6281455037288@s.whatsapp.net`, {text: `${err}`});
});

const cmdHandler = new CommandHandler(bot, `${path.resolve()}/commands/`);
cmdHandler.load();

bot.command({
  name: `reload`,
  code: async(ctx) => {
    if (ctx.isOwner() == false) return ctx.react(ctx.id, "😨")
    try { 
    ctx.reply({text: `wait.............................`});
    cmdHandler.load() 
  } catch(err) {
    ctx.reply({text: `${err}`})
  }
  }
})

bot.launch();
