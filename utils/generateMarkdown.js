/* FUNCTIONS */

// This function is used to capture the license of the license badge that the user has passed through from their input and render the badge, if any were passed in
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}

// This function is used to render the link for the license that the user has passed in through their input, if any were passed in
function renderLicenseLink(license) {
  if (!license) {
    return ``;
  } else if (license === 'ISC') {
    return `https://choosealicense.com/licenses/isc/`
  } else if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`
  } else if (license === 'GNU GPL v3') {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  }
}

// Creates a section for the license badge to be applied in the README.md file, if any were passed in
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `This project is under the the ${license} license.`
  }
}

// This function is used to create a README.md file with this same format for the newly created README.md files used with running this code in node
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  * [Github](https://github.com/${data.account})
  * I am reachable at ${data.email} for any additonal questions you may have.
  
`;
}

/* EXEPORTING MODULE */

// Used to give data to the index.js file to create a README.md file with the user input
module.exports = generateMarkdown;
