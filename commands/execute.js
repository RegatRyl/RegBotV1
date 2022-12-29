module.exports = {
	name: `$`,
	nonPrefixed: true,
	code: async(ctx) => {
		if (ctx.isOwner() == false) return ctx.react(ctx.id, "😨");
		if (ctx.args.join(" ").length < 1) return ctx.reply({text: `mana commandnya?`})
		const cps = require('child_process')
		let input = `${ctx.args.join('')}`
		try {
			let output = cps.execSync(`${input}`)
			ctx.reply({text: `${output}`})
		} catch(err) {
			ctx.reply({text: `${err}`})
		}
		
	}
}