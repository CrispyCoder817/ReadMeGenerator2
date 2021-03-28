// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if  (license.licenseSelection == 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else if (license.licenseSelection == 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
} else if (license.licenseSelection == 'Apache License v2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} else if (license.licenseSelection == 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-green.svg)](https://unlicense.org/)`
} else {
    return '';
};
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if  (license.license === 'MIT License') {
      return `[MIT License link](https://www.mit.edu/~amini/LICENSE.md)`;
  } else if (license.license === 'GNU General Public License v3.0') {
      return `[GNU General Public License v3.0 link](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (license.license === 'Apache License v2.0') {
      return `[Apache License v2.0 link](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license.license === 'Unlicense') {
      return `[Unlicense link](https://unlicense.org/)`;
  } else {
      return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.projectDescription}
  ${renderLicenseBadge(data.licenseSelection)}
  ## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
  ## Install
  ${data.Install}
  ## Usage
  ${data.properUsage}
  ## License
  ${renderLicenseBadge(data.licenseSelection)}
  ## Contributing
  ${data.openSource}
  ## Tests
  ${data.tests}
  ## Questions
  If you'd like to connect with the developer about ${data.title} further email them at ${data.email} 
  gitHub at @${data.username}
`;
}

module.exports = generateMarkdown;
// if picked license then choose corresponding badge mit