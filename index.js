const package1 = require('./package.json');
const package2 = require('./package-lock.json');
const fs = require('fs');
var inquirer = require('inquirer');

var newLine = "\n";
var readmeSections = ["Title","Description","Installation", "Usage", "Credits", "License", "Badges", "Features", "How To Contribute", "Tests", "Questions"];

const questions = [
    {
        type: 'input',
        name: "Title",
        message: "What is the Title of your Project?"
    },
    {
        type: 'input',
        name: "Motivation",
        message: "what was your motivation for starting this project?",
        
    },
    {
        type: 'input',
        name: "Inspiration",
        message: "why did you build this project?",
    },
    {
        type: 'input',
        name: "Purpose",
        message: "what problem does it solve?",
    
    },
    {
        type: 'input',
        name: "Reflection",
        message: "what did you learn?",
    },
    {
        type: 'input',
        name: "Installation",
        message: "Enter any Installation instructions if needed"
    },
    {
        type: 'input',
        name: "Usage",
        message: "Provide instructions and examples for use"
    },
    {
        type: 'input',
        name: "Credits",
        message: "List any collaborators if they exist, as well as any third party assets used"
    },
    {
        type: 'input',
        name: "Features",
        message:"if your project has alot of features, list them now"
    },
    {
        type: 'input',
        name: "Contributions",
        message: "Describe your contribution guidelines if any"
    },
    {
        type: 'input',
        name: "Tests",
        message: "highlight any unit tests a user might be able to try"
    },
    {
        type: 'input',
        name: "Github",
        message: "Enter your github user name so that users may reach out for questions"
    },
    {
        type: 'input',
        name: "Contact",
        message: "please enter your email in case a user may want to contact you directly"
    },
    {
        type: 'list',
        name: "License",
        message: "choose a software license that fits your project",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Apache license 2.0", "MIT license", "Boost Software License 1.0", "The Unlicense"],
    },
];

async function getAnswers(){
    return inquirer.prompt(questions).then((answers) => {
        if (answers.License){
            return {
                projectTitle: `${answers.Title}`,

                motivation: `${answers.Motivation}`, 

                inspiration: `${answers.Inspiration}`, 

                purpose: `${answers.Purpose}`, 

                reflection: `${answers.Reflection}`,

                installation: `${answers.Installation}`,

                usage: `${answers.Usage}`,

                credits: `${answers.Credits}`,

                features: `${answers.Features}`,

                contributions: `${answers.Contributions}`,

                tests: `${answers.Tests}`,

                gitHub: `${answers.Github}`,

                email: `${answers.Contact}`,

                license: `${answers.License}`,
            }
        }
        else{
            return getAnswers();
        }
    }); 
};


function appendSections(file, information, sections){
    if (sections == "Title"){
        writeToFile(file,"# " + information.projectTitle);
    }
    else if(sections == "Description"){
        addToFile(file, information.motivation)
        addToFile(file, information.inspiration)
        addToFile(file, information.purpose)
        addToFile(file, information.reflection)
    }
    else if(sections =="Installation"){
        addToFile(file, information.installation)
    }
    else if(sections =="Usage"){
        addToFile(file, information.usage)
    }
    else if(sections =="Credits"){
        addToFile(file, information.credits)
    }
    else if(sections =="License"){
        addToFile(file, information.license)
    }
    else if(sections =="Features"){
        addToFile(file, information.features)
    }
    else if(sections =="How To Contribute"){
        addToFile(file, information.contributions)
    }
    else if(sections =="Tests"){
        addToFile(file, information.tests)
    }
    else if(sections =="Questions"){
        addToFile(file, information.github)
        addToFile(file, information.email)
    }
    else{
        return;
    }
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    dataText = data;
    fs.writeFileSync(fileName, dataText + newLine + newLine, (err) => {
        if (err) throw err;
    });
}

function addToFile(fileName, data){
    dataText = data;
    fs.appendFileSync(fileName, dataText +  newLine, (err) => {
        if (err) throw err;
    });

    return;
}

// TODO: Create a function to initialize app
async function init(file){
    let information = await getAnswers();

    for (const sections of readmeSections){ 

        addToFile(file, "## " + sections  + newLine);  
        
        appendSections(file, information, sections);

}
}

// Function call to initialize app
init("README.md")



