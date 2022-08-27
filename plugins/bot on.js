let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak FM BOT tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(fmboton)$/i

handler.admin = true

export default handler
