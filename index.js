// Include packages needed for this application
const inquirer = require('inquirer');
//use chalk to colour message/error messages
var chalk = require('chalk');
//file write
const fs = require('fs');
//get access to questions array
const questionModule = require("./src/questions.js");
//get function that returns the main Template Literal used for creating index.html
const fillInTemplate = require("./src/template.js");
//get arrays of questions used by inquirer
const {managerQuestions, questions } = require("./src/questions.js");
//get classes
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
//name of HTML file that will be created
const FILENAME = "index.html";
//used to hold array of employees created from data input by user
let teamArray = [];

//generate the "section" of HTML for each type of employee
function generateEmployeeHTML(empType) {
    //extraline will hold either github, school or office number depending on type of employee
    let extraLine = '';
    let icon = "far fa-address-card fa-sm";
    switch (empType.getRole()) {
        case "Engineer":
            extraLine = `<tr class="border_bottom"><td class="table-row"><h5>Github: <a href="https://github.com/${empType.getGithub()}" target="_blank">${empType.getGithub()}</a></h5></td></tr>`;
            icon = "fa-solid fa-glasses fa-sm";
            break;
        case "Intern":
            extraLine = `<tr class="border_bottom"><td class="table-row"><h5>School: ${empType.getSchool()}</h5></td></tr>`;
            icon = "fas fa-graduation-cap fa-sm";
            break;
        case "Manager":
            extraLine = `<tr class="border_bottom"><td class="table-row"><h5>Office Number: ${empType.getOfficeNumber()}</h5></td></tr>`;
            icon = "fas fa-coffee fa-sm";
            break;
        default:
            break;
    }
    //template used to create "section" in HTML for each employee type
    //add extra line depending on type of employee
    const empTemplate = `
            <section class="person-card">
                <div class="card-header"><h3>${empType.getName()}</h3>
                <i class="${icon}"></i> <h4>${empType.getRole()}</h4>
                </div>
                <div class="card-body">
                    <table class="person-table">
                        <tr class="border_bottom"><td class="table-row"><h5>ID: ${empType.getId()}</h5></td></tr>
                        <tr class="border_bottom"><td class="table-row"><h5>Email: <a href=mailto:"${empType.getEmail()}">${empType.getEmail()}</a></h5></td></tr>
                        ${extraLine}
                    </table>
                </div>
            </section>\n`
    return empTemplate;
}

//get HTML for all emplyoyees and plug it into the main HTML template
//main template retrieved from src/template.js
function generateHTML(team){
    let teamTemplate = '';
    for (let i=0; i<team.length-1; i++) {
        teamTemplate += generateEmployeeHTML(team[i]);
    }
    //plug above HTML into main template
    return fillInTemplate(teamTemplate);
}

// function to write data to file
function createFile(fileName, text) {
    fs.writeFile(fileName, text, (err) =>
      err ? console.error(err) : console.log(chalk.blue(`Your Team Profile file called "${fileName}" has been created!`))
      )
  }

//get details of each employee using Inquirer, create correct Class and add to array for processing later
function getTeamMembers() {
    inquirer
    .prompt(questions) //questions is the array of questions, passed to inquirer
    .then((response) => {
        
        let employee;
        //check user has not finished
        if (response.role !== "None - I'm finished") {
            //create correct class based on employee role - found in response
            switch (response.role) {
                case "Engineer":
                    employee = new Engineer(response.name, response.id, response.email, response.github);
                    break;
                case "Intern":
                    employee = new Intern(response.name, response.id, response.email, response.school);
                    break;
                default:
                    employee = new Employee(response.name, response.id, response.email);
                    break;
            }
            //push new class object to array - used to generate HTML for each employee
            teamArray.push(employee);
            //if user not finished inputting team members get next one - recurse
            getTeamMembers();
        } else {
            //push last object class to array - usr now finished entering team members
            teamArray.push(employee);
            return generateHTML(teamArray);
        }

    })
    .then((response) => {
        createFile(FILENAME, response); //actually create HTML file
    })
    .catch(function(error) {
        console.log("Goodbye!"); //catch any errors and exit gracefully
    })
    
}

// function to initialize app
function init() {
    inquirer
  .prompt(managerQuestions) //questions is the array of questions, passed to inquirer
  
  .then((response) => {
    if (response.welcome === true) {
        //get Manager details, push details to array and get details of other team members
        let mgr = new Manager(response.name, response.id, response.email, response.number);
        teamArray.push(mgr);
        getTeamMembers();
    } else {
         //user chose not to continue so exit
        return Promise.reject('Exit');
        console.log(chalk.blue("Goodbye!"));
    }
  })
  
  .catch(function(error) {
    console.log(chalk.blue("Goodbye!")); //catch any errors and exit gracefully
})
  
}
//start application
init();