global.owner = ['6283897390164']  
global.mods = ['62'] 
global.prems = ['62']
global.nameowner = 'Npnpc'
global.numberowner = '6283897390164' 
global.mail = 'neastooid@gmail.com' 
global.gc = 'https://chat.whatsapp.com/FD1WHwwYrpqHKJ6quUglfS'
global.instagram = 'https://instagram.com/yusupk'
global.wm = '©Npnpc'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'LilyaMD'

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
