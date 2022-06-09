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
        choices: ['agpl-3.0', 'apache-2.0', 'gpl-3.0', 'mit', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run for user installation?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should the user input in order to run tests on the code?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know regarding the usage of this app',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about the contribution guidelines?',
    },
];




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses)=> {
        const markdown = generateMarkdown(inquirerResponses);
        console.log(markdown);
        // writeToFile('CreatedREADME.md', generateMarkdown(inquirerResponses));
        fs.writeFile('./generatedfiles/CreatedREADME.md', markdown, (err)=>
        err?console.log(err):console.log('README has been generated!'));
        
    });
}

// Function call to initialize app
init();
