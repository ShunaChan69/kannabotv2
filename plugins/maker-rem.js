import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ɴᴀᴍᴀᴍᴜ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://ziy.herokuapp.com/api/maker/rem?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'neko.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <nama>')
handler.tags = ['maker']
handler.command = /^(logorem)$/i
handler.limit = true

export default handler
