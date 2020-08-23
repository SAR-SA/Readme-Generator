var inquirer = require('inquirer');
const fs = require('fs');


//Questions for Readme
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
        message: "Enter your github profile "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    },
]
console.clear();


//Write file and append file
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

        const toc = `## Table of Contents\n- [Description](#descriptiongo)\n- [Installation Instructions](#installgo)\n- [Usage](#usagego)\n- [How to Contribute](#contrigo)\n- [Authors](#authorgo)\n- [How to Run Tests](#testsgo)\n- [Questions](#contactgo)
        `
        fs.appendFileSync("README.md", toc, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ('\n' + "## Description<a id='descriptiongo'></a>\n" + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", '\n' + ("## Installation Instructions<a id=\"installgo\"></a>\n" + '\n' + response.installation) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Usage<a id=\"usagego\"></a>\n" + '\n' + response.usage) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## License<a id=\"licensego\"></a>\n" + '\n' + response.license) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Contribution Guidelines<a id=\"contrigo\"></a>\n" + '\n' + response.contributing) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
        
        fs.appendFileSync("README.md", ("## Authors<a id=\"authorgo\"></a>\n" + '\n' + response.authors) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Tests<a id=\"testsgo\"></a>\n" + '\n' + response.tests) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });

        fs.appendFileSync("README.md", ("## Questions<a id=\"contactgo\"></a>\n" + '\n' + "Refer to github or send email with any questions:\n" + '\n' + response.github + '\n' + '\n' + response.email) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    });
