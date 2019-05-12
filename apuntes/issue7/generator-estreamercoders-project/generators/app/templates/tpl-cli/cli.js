/*
 Esto fue generado automaticamente:
 - Fecha: <%= date %>
 - Generador: <%= name %>
 - Version: <%= version %>
*/

const vorpal = require('vorpal')()
const chalk = require('chalk')
const logo = require('./logo')
const log = console.log

log(chalk.white(logo))

vorpal
  .command('foo', 'Outputs "bar".')
  .action(function (args, callback) {
    this.log('bar')
    callback()
  })

vorpal
  .delimiter(chalk.white.bgRed.bold('😈 <%= appname %>$'))
  .show()
