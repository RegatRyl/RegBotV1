exports.Quoted = (ctx) => {
	let i = ctx.msg.message.extendedTextMessage? ctx.msg.message.extendedTextMessage.contextInfo.quotedMessage? true : false : false;
	let type = i? require('@adiwajshing/baileys').getContentType(ctx.msg.message.extendedTextMessage.contextInfo.quotedMessage) : null
	let data = {
		isQuoted: i,
		type,
		data: {
			viaType: i? ctx.msg.message.extendedTextMessage.contextInfo.quotedMessage[type] : null,
			normal: i? ctx.msg.message.extendedTextMessage.contextInfo.quotedMessage : null
		},
	}

	return data;
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}