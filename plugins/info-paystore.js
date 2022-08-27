let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:*   ${sh}k/grup (1 minggu)
┊⫹⫺ *Normal:*  ${sn}k/grup (1 bulan)
┊⫹⫺ *Standar:* ${ss}k/grup (2 bulan)
┊⫹⫺ *Pro:* ${sp}k/grup (4 bulan)                                                      
┊⫹⫺ *Vip:* ${sv}k/grup (12 bulan)
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:*   ${ph}k (1 minggu)
┊⫹⫺ *Normal:*  ${pn}k (1 bulan)
┊⫹⫺ *Standar:* ${pp}k (4 bulan)
┊⫹⫺ *Pro:* ${pv}k (8 bulan)                                               
┊⫹⫺ *Vip:* ${ppm}k (12 bulan)
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa:* [${ppulsa}]
• *Dana:* [${pdana}]
• *QRIS:* [${psaweria}]

–––––– *🐾 Kebijakan* ––––––
🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

–––––– *🐾 Perhatian* ––––––
⚠️ Jika melakukan pemesanan, tapi tidak melakukan pembayaran akan kena sanksi yaitu di *block*

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 bulan)' },
	{title: "🔖 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (2 bulan)' },
	{title: "🔖 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (4 bulan)' },
	{title: "🔖 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "🌟 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (4 bulan)' },
	{title: "🌟 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (8 bulan)' },
	{title: "🌟 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (12 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
