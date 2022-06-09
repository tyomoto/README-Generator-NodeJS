// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please include a short description on your project and what it does.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license will you use for your project?',
        choices: ['APACHE 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'installation-instructions',
        message: 'What command should be run for user installation?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'What command should the user input in order to run tests on the code?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage-information',
        message: 'What does the user need to know regarding the usage of this app',
    },
    {
        type: 'input',
        name: 'contribution-guidelines',
        message: 'What does the user need to know about the contribution guidelines?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(.)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses)=> {
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        console.log('README has been generated!');
    })
}

// Function call to initialize app
init();
