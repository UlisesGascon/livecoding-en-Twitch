// http://patorjk.com/software/taag/#p=testall&f=Block&t=Hello!
const os = require('os')
const pkg = require('./package.json')
const title = `

   ▄█    █▄       ▄████████  ▄█        ▄█       
  ███    ███     ███    ███ ███       ███       
  ███    ███     ███    █▀  ███       ███       
 ▄███▄▄▄▄███▄▄  ▄███▄▄▄     ███       ███       
▀▀███▀▀▀▀███▀  ▀▀███▀▀▀     ███       ███       
  ███    ███     ███    █▄  ███       ███       
  ███    ███     ███    ███ ███▌    ▄ ███▌    ▄ 
  ███    █▀      ██████████ █████▄▄██ █████▄▄██ 
                            ▀         ▀         
-----------------------------------------------
- Arch: ${os.arch()}
- ${pkg.name} Version: ${pkg.version}
-----------------------------------------------
`

module.exports = title
