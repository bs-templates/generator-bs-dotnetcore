"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the well-made ${chalk.red(
          "generator-bs-dotnetcore"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "list",
        name: "project",
        message: "Select project type:",
        choices: [
          {
            name: "DDD - FullLIB",
            value: "DDDFLIB"
          },
          {
            name: "DDD - FullAPP",
            value: "DDDFAPP"
          },
          {
            name: "DDD - FullAPI",
            value: "DDDFAPI"
          },
          {
            name: "DDD - LiteLIB",
            value: "DDDFLIB"
          },
          {
            name: "DDD - LiteAPP",
            value: "DDDFAPP"
          },
          {
            name: "DDD - LiteAPI",
            value: "DDDFAPI"
          },
          {
            name: "CQRS - FullLIB",
            value: "CQRSFLIB"
          },
          {
            name: "CQRS - FullAPP",
            value: "CQRSFAPP"
          },
          {
            name: "CQRS - FullAPI",
            value: "CQRSFAPI"
          },
          {
            name: "CQRS - LiteLIB",
            value: "CQRSLLIB"
          },
          {
            name: "CQRS - LiteAPP",
            value: "CQRSLAPP"
          },
          {
            name: "CQRS - LiteAPI",
            value: "CQRSLAPI"
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.log("Project: ", this.props.project);

    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }

  install() {
    this.installDependencies();
  }
};
