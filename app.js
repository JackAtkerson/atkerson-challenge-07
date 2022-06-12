const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Enter your project's name: ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a valid project name.")
                }
                return true;
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a valid project description.")
                }
                return true;
            }
        },
        {
            type: "input",
            name: "installation",
            message: ,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("")
                }
                return true;
            }
        },
        {
            type: "input",
            name: "usage",
            message: ,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("")
                }
                return true;
            }
        },
        {
            type: "input",
            name: "contributing",
            message: ,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("")
                }
                return true;
            }
        },
        {
            type: "input",
            name: "tests",
            message: ,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("")
                }
                return true;
            }
        },
    ]);
}