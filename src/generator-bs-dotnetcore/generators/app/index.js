"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const constants = {
  projectTypes: {
    DDDFLIB: "DDDFLIB",
    DDDFAPP: "DDDFAPP",
    DDDFAPI: "DDDFAPI",
    DDDLLIB: "DDDLLIB",
    DDDLAPP: "DDDLAPP",
    DDDLAPI: "DDDLAPI",
    CQRSFLIB: "CQRSFLIB",
    CQRSFAPP: "CQRSFAPP",
    CQRSFAPI: "CQRSFAPI",
    CQRSLLIB: "CQRSLLIB",
    CQRSLAPP: "CQRSLAPP",
    CQRSLAPI: "CQRSLAPI"
  },
  codeChunkTypes: {
    ADDPROJECT: "ADDPROJECT",
    ADDCONTEXT: "ADDCONTEXT",
    ADDENTITYFLOW: "ADDENTITYFLOW"
  }
};
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
        name: "projectType",
        message: "Select project type:",
        choices: [
          {
            name: "DDD - FullLIB",
            value: constants.projectTypes.DDDFLIB
          },
          {
            name: "DDD - FullAPP",
            value: constants.projectTypes.DDDFAPP
          },
          {
            name: "DDD - FullAPI",
            value: constants.projectTypes.DDDFAPI
          },
          {
            name: "DDD - LiteLIB",
            value: constants.projectTypes.DDDLLIB
          },
          {
            name: "DDD - LiteAPP",
            value: constants.projectTypes.DDDLAPP
          },
          {
            name: "DDD - LiteAPI",
            value: constants.projectTypes.DDDLAPI
          },
          {
            name: "CQRS - FullLIB",
            value: constants.projectTypes.CQRSFLIB
          },
          {
            name: "CQRS - FullAPP",
            value: constants.projectTypes.CQRSFAPP
          },
          {
            name: "CQRS - FullAPI",
            value: constants.projectTypes.CQRSFAPI
          },
          {
            name: "CQRS - LiteLIB",
            value: constants.projectTypes.CQRSLLIB
          },
          {
            name: "CQRS - LiteAPP",
            value: constants.projectTypes.CQRSLAPP
          },
          {
            name: "CQRS - LiteAPI",
            value: constants.projectTypes.CQRSLAPI
          }
        ]
      },
      {
        type: "list",
        name: "codeChunkType",
        message: "Select code chunk type:",
        choices: [
          {
            name: "Add project",
            value: constants.codeChunkTypes.ADDPROJECT
          },
          {
            name: "Add context",
            value: constants.codeChunkTypes.ADDCONTEXT
          },
          {
            name: "Add entity flow",
            value: constants.codeChunkTypes.ADDENTITYFLOW
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  addProject() {
    if (this.props.codeChunkType === constants.codeChunkTypes.ADDPROJECT) {
      this.log("This method adds a project code chunk.");
    }
  }

  addContext() {
    if (this.props.codeChunkType === constants.codeChunkTypes.ADDCONTEXT) {
      this.log("This method adds a context code chunk.");
    }
  }

  addEntityFlow() {
    if (this.props.codeChunkType === constants.codeChunkTypes.ADDENTITYFLOW) {
      this.log("This method adds a entity flow code chunk.");
    }
  }

  writing() {
    this.log("Project type: ", this.props.projectType);

    this.log("Code chunk: ", this.props.codeChunkType);

    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }

  install() {
    this.installDependencies();
  }
};
