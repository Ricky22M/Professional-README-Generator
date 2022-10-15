// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your new project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give the description to your new project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How will this projected be installed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What will this project be used for?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are the contributors to this project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How can you run your code to test the functionality of your code?',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'What license was used?',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
    },
    {
        type: 'input',
        message: 'Please enter GitHub username',
        name: 'account',
    },
    {
        type: 'input',
        message: 'What email can you be reached at?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('README.md file successfully created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        writeToFile('./README.md', generateMarkdown(res));
    });
}

// Function call to initialize app
init();
