module.exports = {
	name: `$`,
	nonPrefixed: true,
	code: async(ctx) => {
		if (ctx.isOwner() == false) return ctx.react(ctx.id, "😨");
		const { execSync } = require('child_process')
		try {
			let output = await execSync(ctx.args.join(' '))
			ctx.reply({text: `${output}`})
		} catch(err) {
			ctx.reply({text: `${err}`})
		}
		
	}
}