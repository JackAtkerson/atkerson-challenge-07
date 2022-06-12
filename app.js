const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./utils/generateReadMe.js");

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
            name: "github",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address: "
        },
        {
            type: "input",
            name: "repo",
            message: "Enter the name of your GitHub repo: "
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
            message: "Describe any necessary steps needed for installation of your project: "
        },
        {
            type: "input",
            name: "usage",
            message: "Describe what your project is used for: "
        },
        {
            type: "input",
            name: "contributions",
            message: "Who contributed to making this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Provide any tests written, if applicable: "
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
            ]
        },
        {
            type: "input",
            name: "questions",
            message: ""
        }
       
    ]);
};

async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadMe(answers);

        await writeFileAsync("./dist/README.md", generateContent);
        console.log('Successfully saved to README.md');
    } catch(err) {
            console.log(err);
        }
};

init();