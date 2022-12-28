exports.Quoted = (ctx) => {
	let i = ctx.msg.message.extendedTextMessage? d.msg.message.extendedTextMessage.contextInfo.quotedMessage? true : false : false;
	let type = i? require('@adiwajshing/baileys').getContentType(d.msg.message.extendedTextMessage.contextInfo.quotedMessage) : null
	let data = {
		isQuoted: i,
		type,
		data: {
			viaType: i? d.msg.message.extendedTextMessage.contextInfo.quotedMessage[type] : null,
			normal: i? d.msg.message.extendedTextMessage.contextInfo.quotedMessage : null
		},
	}

	return data;
}