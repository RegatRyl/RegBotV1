module.exports = {
	name: "siapakahaku",
	code: async(ctx) => {
		var con = true
		let sa = await require(`@bochilteam/scraper`).siapakahaku()
		let col = ctx.MessageCollector({ time: 40000 }); // in milliseconds
ctx.reply({ text: `SIAPAKAH AKU : RGB\n\n Soal: ${sa.soal}\n Jika Menyerah Ketik *Nyerah*\n Games akan berakhir dalam 40 detik.` });

col.on("collect", (m) => {
    if(m.content == sa.jawaban) {
    	con = false
    	ctx.reply({text: `${m.pushName} telah berhasil menjawab!. \n Jawabannya ${sa.jawaban}`})
    	col.stop()
    } else if(m.content == 'Nyerah') { 
    	ctx.reply({text: `yah nyerah :( jawabannya ${sa.jawaban}\n Soal berakhir!`}) 
        con = false
        col.stop()}
    });

col.on("end", (collector, r) => {
    if (con == true) {
    	ctx.reply({text: `*tidak ada yang berhasil menjawab :(*\n jawabannya ${sa.jawaban}\n`})
    	con = false
    } else { console.log(" ")}
});
}
	}