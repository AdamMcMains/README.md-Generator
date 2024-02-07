const package1 = require('./package.json');
const package2 = require('./package-lock.json');
const fs = require('fs');
var inquirer = require('inquirer');

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
        type: 'list',
        name: "License",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Apache license 2.0", "MIT license", "Boost Software License 1.0", "The Unlicense"],
    }
];

var licenseOptions = 
    [
        "GNU AGPLv3", 
        "GNU GPLv3", 
        "GNU LGPLv3", 
        "Apache license 2.0", 
        "MIT license", 
        "Boost Software License 1.0", 
        "The Unlicense"
    ]

var projectTitle;

var bodyText;

var license;



function getAnswers(){
    return inquirer.prompt(questions).then((answers) => {
        if (answers.License){
            projectTitle = [answers.Title]
            bodyText = [answers.Motivation, answers.Inspiration, answers.Purpose, answers.Reflection]
            license = [answers.License]
            return
        }
        else{
            return getAnswers();
        }
    }); 
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    dataText = data;

    fs.writeFile(fileName, dataText, (err) => {

        if (err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();






getAnswers();
