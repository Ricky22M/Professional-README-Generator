/* DEFINED ALL CONST VARIABLES */

// These const variables are used to get and use information from the npm installations
const inquirer = require('inquirer');
const fs = require('fs');
// This const varaible is used to display the information from this JS page on to the "generateMarkDown" JS creating a connection between the two
const generateMarkdown = require('./utils/generateMarkdown');

// Used to ask the user questions to help generate a professional README.md file
const questions = [
    // Asks for Title
    {
        type: 'input',
        message: 'What is the name of your new project?',
        name: 'title',
    },
    // Asks for Description
    {
        type: 'input',
        message: 'Give the description to your new project?',
        name: 'description',
    },
    // Asks for Installation
    {
        type: 'input',
        message: 'How will this project be installed?',
        name: 'installation',
    },
    // Asks for Usage
    {
        type: 'input',
        message: 'What will this project be used for?',
        name: 'usage',
    },
    // Asks for Contributors
    {
        type: 'input',
        message: 'Who are the contributors to this project',
        name: 'contributing',
    },
    // Asks for Test
    {
        type: 'input',
        message: 'How can you run your code to test the functionality of your code?',
        name: 'test',
    },
    // Asks for License
    {
        type: 'checkbox',
        message: 'What license was used?',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
    },
    // Asks for GitHub
    {
        type: 'input',
        message: 'Please enter GitHub username',
        name: 'account',
    },
    // Asks for Email
    {
        type: 'input',
        message: 'What email can you be reached at?',
        name: 'email',
    },
];

/* DEFINED FUNCTIONS */

// This function is used to create a README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('README.md file successfully created!');
    });
}

// This function is used to give the user questions, then create the README.md file based off of the user input
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        writeToFile('./README.md', generateMarkdown(res));
    });
}

/* CALLING FUNCTION */

// Function call to initialize app
init();
