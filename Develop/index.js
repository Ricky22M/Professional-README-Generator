// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your new project?',
        name: 'Project Title',
    },
    {
        type: 'input',
        message: 'Give the description to your new project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'How will this projected be installed?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What will this project be used for?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Who are the contributors to this project',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'How can you run your code to test the functionality of your code?',
        name: 'Test',
    },
    {
        type: 'checkbox',
        message: 'What license was used?',
        name: 'License(s)',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
    },
    {
        type: 'input',
        message: 'Please enter GitHub username',
        name: 'Account',
    },
    {
        type: 'input',
        message: 'What email can you be reached at?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
