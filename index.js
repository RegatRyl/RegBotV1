const { Client, CommandHandler } = require("@mengkodingan/ckptw");
const path = require("path");
const bot = new Client({
  name: "RGB",
  prefix: ".",
  owners: '6281455037288',
  autoRead: true,
});

bot.ev.once('ready', (m) => {
  console.log(`ready at ${m.user.id}`);
});

process.on('uncaughtException', function (err) {
  console.error(err);
});

const cmdHandler = new CommandHandler(bot, `${path.resolve()}/commands/`);
cmdHandler.load();

bot.command({
  name: `reload`,
  code: async(ctx) => {
    if (ctx.isOwner() == false) return ctx.react(ctx.id, "😨")
    try { 
    ctx.reply({text: `done`})
    cmdHandler.load() 
  } catch(err) {
    ctx.reply({text: `${err}`})
  }
  }
})

bot.launch();