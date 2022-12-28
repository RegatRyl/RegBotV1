module.exports = {
	name: 'ytmp4',
	code: async(ctx) => {
		const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
		if (ctx.args.join('').length < 1) return ctx.reply({text: 'usage: .ytmp4 (link video)'})
		let url = ctx.args.join('')
	    let yt = await youtubedl(`${url}`).catch(async () => await youtubedlv2(`${url}`))
	    let dl_url = await yt.video['240p'].download()
	    ctx.sendVideo(ctx.id, dl_url, `${yt}`)
    }
}