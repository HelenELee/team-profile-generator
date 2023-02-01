// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//get access to questions array
const questionModule = require("./src/questions.js");
const fillInTemplate = require("./src/template.js");
const {managerQuestions, questions } = require("./src/questions.js");
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const fileName = "index.html";

let teamArray = [];

function generateHTML(team){
    let teamTemplate = '';
    for (let i=0; i<team.length-1; i++) {
        console.log(team[i].role);
        teamTemplate += team[i].createHTML();
    }
    return fillInTemplate(teamTemplate);
}

// function to write data to file
function createFile(fileName, text) {
    fs.writeFile(fileName, text, (err) =>
      err ? console.error(err) : console.log(`Your Team Profile file called "${fileName}" has been created!`)
      )
  }

function getTeamMembers() {
    inquirer
    .prompt(questions) //questions is the array of questions, pass to inquirer
    .then((response) => {
        //console.log(response);
        let employee;
        if (response.role !== "None - I'm finished") {
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
            teamArray.push(employee);
            getTeamMembers();
        } else {
            //push last object to array
            teamArray.push(employee);
            return generateHTML(teamArray);
        }

    })
    .then((response) => {
        createFile(fileName, response);
    })
    .catch(function(error) {
        console.log("Goodbye!"); //catch any errors and exit gracefully
    })
    
}

// function to initialize app
function init() {
    inquirer
  .prompt(managerQuestions) //questions is the array of questions, pass to inquirer
  
  .then((response) => {
    if (response.welcome === true) {
        let mgr = new Manager(response.name, response.id, response.email, response.number);
        teamArray.push(mgr);
        getTeamMembers();
    } else {
         //user chose not to continue so exit
        return Promise.reject('Exit');
        console.log("Goodbye!");
    }
  })
  
  .catch(function(error) {
    console.log("Goodbye!"); //catch any errors and exit gracefully
})
  
}

init();