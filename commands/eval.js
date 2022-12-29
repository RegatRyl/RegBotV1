module.exports = {
  name: ">",
  nonPrefixed: true,
  code: async (ctx) => {
    if (ctx.isOwner() == false) return ctx.react(ctx.id, "😨")
    if (ctx.args.join(" ").length < 1) return ctx.reply({text: `mana kodenya?`})
    try {
      var evaled = await eval(ctx.args.join(" "));
      ctx.reply({ text: require("util").inspect(evaled, { depth: 0 }) })
    } catch (err) {
      return ctx.reply({ text: `${err}!` });
  }
 }
}