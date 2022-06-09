// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'agpl-3.0'){
    return `![badge](https://img.shields.io/badge/license-agpl_3.0-orange)`
  } else if (license === 'apache-2.0'){
    `![badge](https://img.shields.io/badge/license-apache_2.0}-red)`
  } else if (license === 'gpl-3.0'){
    return `![badge](https://img.shields.io/badge/license-gpl_3.0-lightblue)`
  } else if (license === 'mit'){
    return `![badge](https://img.shields.io/badge/license-mit-blue)`
  } else {
  return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `https://choosealicense.com/licenses/${license}`
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return "## License"
    
    "This application is covered under the license linked below:"
    `${renderLicenseLink(license)}`;
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
* [Installation Instructions](#installation)
* [Usage Information](#usage-information)
* [Contribution](#contribution)
* [Testing](#Testing)
* [Questions](#Questions)

## Installation Instructions

In order to run the following app, please use the following code to install necessary pieces:
${data.installation}

## Usage Information

${data.usage}

${renderLicenseSection(data.license)}

## Contribution

${data.contribution}

## Testing

In order to run tests on the following app, please use the command:

${data.test}

## Questions

If you have any further questions please contact: ${data.email}

Don't be afraid to check out more of my work! [My Github](https://github.com/${data.username}/)

`;
}

module.exports = generateMarkdown;
