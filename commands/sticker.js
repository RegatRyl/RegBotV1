const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const fs = require('fs');
const { Quoted } = require(`../lib/myfuncs.js`)

module.exports = {
	name: 'sticker',
	aliases: 's',
	code: async(ctx) => {
		const pack = `${ctx.pushName}`
	let path = `./tmp/${ctx.msg.messageTimestamp}.webp`
	let img = ctx.msg.message.imageMessage
	let isq = Quoted(ctx)

	if(isq.isQuoted && isq.type === 'imageMessage') {
		img = isq.data.viaType;
	}

	if(img) {
		if(img.url === "https://web.whatsapp.net") {
		    img['url'] = 'https://mmg.whatsapp.net' + img.directPath
		}

		const stream = await require('@adiwajshing/baileys').downloadContentFromMessage(img, 'image');

	    let buffer = Buffer.from([]);
	    for await (const chunk of stream) {
	      buffer = Buffer.concat([buffer, chunk]);
	    }
        let author = `RGB`
	    await fs.writeFileSync(path, buffer);
		const s = new Sticker(path, {
		    pack,
		    author,
		    type: StickerTypes.FULL,
		    categories: ['🤩', '🎉'],
		    id: '12345',
		    quality: 50,
		})

		await ctx.reply(await s.toMessage());
		fs.unlinkSync(path)
	} else {
		ctx({text: 'Pakai command sticker ini di caption sebuah image atau kamu dapat me-reply imagenya!'})
	}
	
}
}