/* FUNCTIONS */

// This function is used to capture the license of the license badge that the user has passed through from their input and render the badge, if any were passed in
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else {
    return `[!${license}](${renderLicenseLink(license)})`;
  }
}

// This function is used to render the link for the license that the user has passed in through their input, if any were passed in
function renderLicenseLink(license) {
  switch (license) {
    case "None":
      return "";
    case "Apache License 2.0":
      return "http://www.apache.org/licenses/";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/";
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
  }
}

// Creates a section for the license badge to be applied in the README.md file, if any were passed in
function renderLicenseSection(license) {
  if (license == "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  }
}

// This function is used to create a README.md file with this same format for the newly created README.md files used with running this code in node
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Description

  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributoring)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Contributing
  
 ${data.contributing}
  
  ## License
  
  This project is licensed under the ${data.license}
  
  ## Badges
  
  ${renderLicenseSection(data.license)}

  ## Questions
  
  * [Github](https://github.com/${data.account})
  * For any more questions, reach me at my [email](${data.email})
  
  ## Contributing
  
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  
  ## Test
  
  ${data.test}
`;
}

/* EXEPORTING MODULE */

// Used to give data to the index.js file to create a README.md file with the user input
module.exports = generateMarkdown;
