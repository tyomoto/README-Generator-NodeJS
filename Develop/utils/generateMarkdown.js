// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![![badge](https://img.shields.io/badge/license-${license}-lightblue)]`
  } else {
  return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license}](https://choosealicense.com/licenses/${license})`
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## [License](#table-of-contents)
    
    This application is covered under the license linked below:
    ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
${renderLicenseLink(data.license)}
* [Contribution Guidelines](#contribution-guidelines)
* [Testing] (#test-instructions)
* [Questions] (#questions)

## Installation Instructions

In order to run the following app, please use the following code to install necessary pieces:
${data.installation-instuctions}

## Usage Information

${data.usage}

${renderLicenseSection}

## [Contribution Guidelines]

${data.contribution-guidelines}

## Testing

In order to run tests on the following app, please use the command:

${data.test-instructions}

## Questions

If you have any further questions please contact: ${data.email}

Don't be afraid to check out more of my work! [My Github](https://github.com/${data.username}/)

`;
}

module.exports = generateMarkdown;
