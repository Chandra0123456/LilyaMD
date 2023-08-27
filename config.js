global.owner = ['6282163403132']  
global.mods = ['6282163403132'] 
global.prems = ['6282163403132']
global.nameowner = 'Ndyyy'
global.numberowner = '6282163403132' 
global.mail = 'chandssi00@gmail.com' 
global.gc = 'https://chat.whatsapp.com/KXHFeHF5ecFAMWOoZGbX3H'
global.instagram = 'https://instagram.com/'
global.wm = '©CW'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'CW'

//INI WAJIB DI ISI!//
global.btc = 'tMNbXw3t' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'nYMY9YvD'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'tMNbXw3t' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
