function generateReadMe(answers) {
    return`
<h1>${answers.projectName}</h1>

## Description
${answers.description}

## Table of Contents
- [Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contributions](#contributions)
-[Tests](#tests)
-[License](#license)
-[Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contrubutions}

## Tests
${answers.tests}

##License
${answers.license}

## Questions
${answers.questions}
    `;
}