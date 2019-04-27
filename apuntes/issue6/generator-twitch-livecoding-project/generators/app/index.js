'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the finest ${chalk.red('generator-twitch-livecoding-project')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Esto es una pregunta ... demo?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html')
    );

    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );

    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );

  }

  install() {
    this.installDependencies({bower:false});
  }
};
