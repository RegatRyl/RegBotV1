module.exports = {
	name: 'menu',
	aliases: ['help', 'allmenu'],
	code: async(ctx) => {
		const timeZone = require('moment-timezone')
		        const hours = timeZone().tz('Asia/Jakarta').format('HH:mm:ss')
        if(hours < "23:59:00"){
        var sayyingTime = 'Selamat Malam 🌃'
}
        if(hours < "19:00:00"){
        var sayyingTime = 'Selamat Petang 🌆'
}
        if(hours < "18:00:00"){
        var sayyingTime = 'Selamat Sore 🌅'
}
        if(hours < "15:00:00"){
        var sayyingTime = 'Selamat Siang 🏙'
}
        if(hours < "10:00:00"){
        var sayyingTime = 'Selamat Pagi 🌄'
}
        if(hours < "05:00:00"){
        var sayyingTime = 'Selamat Subuh 🌉'
}
        if(hours < "03:00:00"){
        var sayyingTime = 'Selamat Tengah Malam 🌌'
    }
        let men = `  *Reg-Bot*

  :) halo ${ctx.pushName} ${sayyingTime}

*> ! Prefix/Key Perintah: .*
*> Library: @mengkodingan/ckptw*
*> Github Owner: github.com/RegadSLY*

*Menu Utama*
> menu

*Menu Downloader*
> ytmp4

*Menu Games*
> tebakgambar

*Menu Converter*
> sticker
`
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 99999,status: 200, surface: 200, message: `Halo ${ctx.pushName}`, orderTitle: 'RegatSA', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
ctx.sendMessage(ctx.id, {text: men}, { quoted: ftroli })
	}
}