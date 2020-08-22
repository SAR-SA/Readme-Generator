var inquirer = require('inquirer');
const fs = require('fs');

const questions = [

    {
        type: "input",
        name: "title",
        message: "Title of the project"
    },
    {
        type: "input",
        name: "badge",
        message: "input badge code"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project"
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
    {
        type: "input",
        name: "github",
        message: "Enter your github profile information"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    },
]
console.clear();

inquirer
    .prompt(questions).then(response => {

        fs.writeFile('README.md', ("# " + response.title),
            // callback function that is called after writing file is done
            function(err) { 
                if (err) throw err;
                // if no error
                console.log("Data is written to file successfully.")
            });

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

        const toc = `## Table of Contents\n- [Description](#descriptionGo)\n- [Installation Instructions](#installGo)\n- [Usage](#usageGo)\n- [How to Contribute](#contriGo)\n- [Authors](#authorGo)\n- [How to Run Tests](#testsGo)\n- [Contact Information](#contactGo)

        `
        fs.appendFileSync("README.md", toc, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ('\n' + "## Description\n<a id=\"descriptionGo\"></a>" + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", '\n' + ("## Installation Instructions\n<a id=\"installGo\"></a>" + '\n' + response.installation) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Usage\n<a id=\"usageGo\"></a>" + '\n' + response.usage) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## License\n<a id=\"licenseGo\"></a>" + '\n' + response.license) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Contribution Guidelines\n<a id=\"contriGo\"></a>" + '\n' + response.contributing) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
        
        fs.appendFileSync("README.md", ("## Authors\n<a id=\"authorGo\"></a>" + '\n' + response.authors) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Tests\n<a id=\"testsGo\"></a>" + '\n' + response.tests) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Questions\n<a id=\"contactGo\"></a>" + '\n' + "Refer to github or send email with any questions:\n" + '\n' + response.github + '\n' + response.email) + '\n', function(err) {
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