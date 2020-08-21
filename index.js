var inquirer = require('inquirer');
const fs = require('fs');

const questions = [

    {
        type: "input",
        name: "badge",
        message: "input badge code"
    },
    {
        type: "input",
        name: "title",
        message: "Title of the project"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of you project"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Description"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose License Type",
        choices: [
            "MIT License",
            "Apache License",
            "GPL License",
            "Public Domain (Unlicensed)",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Rules for Contribution",
    },
    {
        type: "input",
        name: "authors",
        message: "Who are the authors for this project"
    },
    {
        type: "input",
        name: "tests",
        message: "Run tests here"
    },
]
console.clear();

inquirer
    .prompt(questions).then(response => {

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ('\n' + response.badge) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- ' + response.toc.split(", ").join('\n' + '- ')) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Installation Instructions" + '\n' + response.installation) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Usage" + '\n' + response.usage) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("READEME.md", ("## License" + '\n' + response.license) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });



    });

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {type: "input", name: "title", message: "Readme Title?"},
//     {type: "input", name: "description", message: "What is the Description of the Program?"}
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//     console.log(answers.title);
//     console.log(answers.description);
//     fs.writeFile('readme.md',answers.title,
//     // callback function that is called after writing file is done
//     function(err) { 
//         if (err) throw err;
//         // if no error
//         console.log("Data is written to file successfully.")
//     });
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });