// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// console.log(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [
  // Repo Name from Github
  {
    type: "input",
    name: "title",
    message: "Please, enter the repo name from GitHub.",
  },

  // Description of Project
  {
    type: "input",
    name: "projectDescription",
    message: "Enter detailed description of project.",
  },

  // How to Install Project
  {
    type: "input",
    name: "Install",
    message: "Explain how one would install the web application.",
  },

  // Project Use
  {
    type: "input",
    name: "properUsage",
    message: "Instruction and examples of it being used.",
  },

  // License
  {
    type: "list",
    name: "licenseSelection",
    message: "Select appropiate license for this project.",
    choices: [
      "none",
      "Apache License v2.0",
      "MIT License",
      "GNU General Public License v3.0",
      "Unlicense",
      
    ],
  },

  // OpenSource Outlet
  {
    type: "input",
    name: "openSource",
    message: "Demonstrate how other users could contribute to your project",
  },

  // Testing
  {
    type: "input",
    name: "tests",
    message: "Portray project tests and show how to test",
  },

  // username for Github
  {
    type: "input",
    name: "username",
    message: "Please, enter GitHub username",
  },

  // Email
  {
    type: "input",
    name: "email",
    message: "Please, enter email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Your Readme Markdown manifested.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    var templateData = generateMarkdown(data);
    writeToFile("README.md", templateData);
  });
}

// Function call to initialize app
init();
