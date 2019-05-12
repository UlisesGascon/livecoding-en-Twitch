'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const pkg = require("../../package.json")

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Bienvenid@s a ${chalk.red('generator-estreamercoders-project')}!`)
    );



    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: "Cómo se llama el proyecto?"
    }, {
      type: "input",
      name: "appDescription",
      message: "Qué hace tu proyecto?"
    }, 
      {
        type: 'list',
        name: 'project',
        message: 'Qué quieres hacer?',
        choices: [{
          name: "🤔 Típico proyecto backend con Express",
          value: "node"
        },{
          name: "😏 Front con todo montado (gulp y cosas )",
          value: "front"
        }, {
          name: "👹 Proyecto CLI (Vorpal)",
          value: "cli"
        }, {
          name: "🤖 Proyecto Scraping (puppeteer)",
          value: "scraping"
        }]
      }, {
        type: 'confirm',
        name: 'otherAnswer',
        message: 'Otra pregunta?',
        when: answers => answers.project === "node",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      //console.log("RESPUESTAS:", this.props)
    });
  }

  writing() {
    
    const templateData = {
      appname: this.props.appName,
      appdescription: this.props.appDescription,
      date: new Date().toISOString().split('T')[0],
      name: pkg.name,
      version: pkg.version
    };
    
    
    if(this.props.project === "cli") {
      const folder = "tpl-cli"
      this.fs.copyTpl(
        this.templatePath(`${folder}/_package.json`),
        this.destinationPath('package.json'),
        templateData
      );   
      this.fs.copyTpl(
        this.templatePath(`${folder}/cli.js`),
        this.destinationPath('cli.js'),
        templateData
      ); 

      this.fs.copy(
        this.templatePath(`${folder}/logo.js`),
        this.destinationPath('logo.js')
      ); 

      this.fs.copy(
        this.templatePath(`${folder}/cli.test.js`),
        this.destinationPath('__tests__/cli.test.js')
      ); 
    
    } else if (this.props.project === "front") {
      
      this.composeWith(require.resolve('generator-webapp/app', {"skip-welcome-message": true}));
    
      
    } else if (this.props.project === "scraping") {

      const folder = "tpl-scrap"
      this.fs.copy(
        this.templatePath(`${folder}/machine.js`),
        this.destinationPath('machine.js')
      ); 

      this.fs.copy(
        this.templatePath(`${folder}/_package.json`),
        this.destinationPath('package.json')
      ); 
      
    } else {
      this.fs.copy(
        this.templatePath('dummyfile.txt'),
        this.destinationPath('dummyfile.txt')
      );      
    }
  }

  install() {
    this.installDependencies({
      bower:false
    });
  }
};
