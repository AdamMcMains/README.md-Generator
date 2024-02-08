
function renderLicenseBadge(license) {
  let licenseType = license
  let licenseLink = ""
  if(licenseType == "GNU AGPL v3"){
    licenseLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    return licenseLink
  }
  else if(licenseType == "GNU GPL v3") {
    licenseLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    return licenseLink
  }
  else if(licenseType == "GNU LGPL v3") {
    licenseLink = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    return licenseLink
  }
  else if(licenseType == "Apache License 2.0") {
    licenseLink =  `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return licenseLink
  }
  else if(licenseType == "MIT License") {
    licenseLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return licenseLink
  }
  else if(licenseType == "Boost Software License 1.0") {
    licenseLink = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    return licenseLink
  }
  else if(licenseType == "The Unlicense") {
    licenseLink = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    return licenseLink
  }
  else{
    licenseLink = ""
    return licenseLink
  }

}

function renderLicenseLink(license) {
  let licenseType = license
  let licenseLink = ""
  if(licenseType == "GNU AGPL v3"){
    licenseLink = `(https://www.gnu.org/licenses/agpl-3.0)`
    return licenseLink
  }
  else if(licenseType == "GNU GPL v3") {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
    return licenseLink
  }
  else if(licenseType == "GNU LGPL v3") {
    licenseLink = `(https://www.gnu.org/licenses/lgpl-3.0)`
    return licenseLink
  }
  else if(licenseType == "Apache License 2.0") {
    licenseLink =  `(https://opensource.org/licenses/Apache-2.0)`
    return licenseLink
  }
  else if(licenseType == "MIT License") {
    licenseLink = `(https://opensource.org/licenses/MIT)`
    return licenseLink
  }
  else if(licenseType == "Boost Software License 1.0") {
    licenseLink = `(https://www.boost.org/LICENSE_1_0.txt)`
    return licenseLink
  }
  else if(licenseType == "The Unlicense") {
    licenseLink = `(http://unlicense.org/)`
    return licenseLink
  }
  else{
    licenseLink = ""
    return licenseLink
  }
}

function renderLicenseSection(license) {}

function generateMarkdown(information) {
  return {
    badge: `${renderLicenseBadge(information)}`,
    link: `${renderLicenseLink(information)}`
    
    }
}

module.exports = generateMarkdown;
