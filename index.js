// TODO: Include packages needed for this application
const package1 = require('./package.json');
const package2 = require('./package-lock.json');
const fs = require('fs');
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
var projecttitle;
var projectDescription;
var questions = ["what was your motivation for making this application?","why did you build this project?","what problem does it solve?","what did you learn?"];

var userResponse;

var dataText;



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    dataText = "Hello world."

    fs.writeFile('README.md', dataText, (err) => {
 
        // In case of a error throw err.
        if (err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();

for (i = 0; i < questions.length; i++)
inquirer.prompt([
    {
        name: `Answer${i}`,
        message: questions[i],
        type: 'input'
    }])
    .then(function(answer){
        userResponse = answer;
        console.log(userResponse);
    });