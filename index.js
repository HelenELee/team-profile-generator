// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//get access to questions array
const questionModule = require("./src/questions.js");
const {managerQuestions, questions } = require("./src/questions.js");
/*
const managerQuestions = questionModule.managerQuestions;
const questions = questionModule.questions;*/
let teamArray = [];

//add manager details to the team Array
function addManager(mgrObj) {
    delete mgrObj.welcome;


}

function getTeamMembers() {
    inquirer
    .prompt(questions) //questions is the array of questions, pass to inquirer
    .then((response) => {
        console.log(response);

    })
}

// function to initialize app
function init() {
    inquirer
  .prompt(managerQuestions) //questions is the array of questions, pass to inquirer
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    if (response.welcome === true) {
        getTeamMembers();
    } else {
        console.log("Goodbye!");
    }
    
    
  })
}

init();