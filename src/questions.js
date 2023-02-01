const validateEmail = require("./utilities.js");
const githubUsernameRegex = require('github-username-regex');
 
//const questionModule = require("./src/questions.js");
var chalk = require('chalk');

const managerQuestions = [
    {
        //first questions is instructions
        type: 'confirm',
        message: '------------------------------\n' +
        'Welcome to the Team Generator\n' +
        '--------------------------------\n' +
        'Use `npm run reset` to reset the dist/ folder.\n' +
        'Are you ready to build your team?',
        name: 'welcome',

    },
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: name => {
          if (name) {
              return true;
          } else {
              console.log(chalk.red("Please provide a manager's name!"));
              return false;
          }
        }
      },
      {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: id => {
            //console.log(typeof managerId);
          if (id && /^[0-9]+$/.test(id)) {
              return true;
          } else {
            console.log(chalk.red("\nPlease provide a valid manager's id. It must be numeric."));
            return false;
          }
        }
      },
      {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: email => {
          if (email && validateEmail(email)) {
            //TO DO - validation for email
              return true;
          } else {
              console.log(chalk.red("\nPlease provide a valid manager's email!"));

              return false;
          }
        }
      },
      {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'number',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: number => {
          //if (managerNumber && !isNaN(managerNumber)) {
          if(number && /^[0-9]+$/.test(number)) {
              return true;
          } else {
              console.log(chalk.red("\nPlease provide a manager's office number. It must be numeric."));
              return false;
          }
        }
      },
    ];

    const questions = [
    {
        message : "What type of team member would you like to add?",
        type : 'list',
        //uses variable created above from license.js
        choices :["Engineer", "Intern", "None - I'm finished"],
        name : "role",
        //when: (answers) => answers.welcome === true,
        //default: "The MIT License",
      },

        {
            type: 'input',
            message: (answers) => `What is your ${answers.role}'s name?`,
           // message: `What is your ${role}'s name?`,
            name: 'name',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role !=="None - I'm finished", 
            //this question is mandatory
           validate: name => {
              if (name) {
                  return true;
              } else {
                  console.log(chalk.red(`\nPlease provide a name!`));
                  return false;
              }
            }
          },
          {
            type: 'input',
            //message: `What is your ${role}'s id?`,
            message: (answers) => `What is your ${answers.role}'s id?`,
            name: 'id',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role !=="None - I'm finished", 
            //this question is mandatory
            validate:id => {
              if (id && /^[0-9]+$/.test(id)) {
                  return true;
              } else {
                  console.log(chalk.red(`\nPlease provide a valid id. It must be numeric.`));
                  return false;
              }
            }
          },
          {
            type: 'input',
            //message: `What is your ${roleType}'s email?`,
            message: (answers) => `What is your ${answers.role}'s email?`,
            name: 'email',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role !=="None - I'm finished", 
            //this question is mandatory
            validate: email => {
              if (email && validateEmail(email)) {
                  return true;
              } else {
                  console.log(chalk.red(`\nPlease provide a valid email.`));
                  return false;
              }
            }
          },
          /*
          {
            type: 'input',
            //message: `What is your ${roleType}'s office number?`,
            message: (answers) => `What is your ${answers.role}'s office number?`,
            name: 'number',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role === "Manager",  
            //this question is mandatory
           validate: number => {
              if (number & /^[0-9]+$/.test(number)) {
                  return true;
              } else {
                  console.log(chalk.red(`\nPlease provide a valid office number. It must be numeric.`));
                  return false;
              }
            }
          },
          */
          {
            type: 'input',
            //message: `What is your ${roleType}'s office number?`,
            message: (answers) => `What is your ${answers.role}'s github username?`,
            name: 'github',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role === "Engineer",  
            //this question is mandatory
           validate: github => {
              if (githubUsernameRegex.test(github)) {
                  return true;
              } else {
                  console.log(chalk.red(`\nPlease provide a valid github username.`));
                  return false;
              }
            }
          },
          {
            type: 'input',
            //message: `What is your ${roleType}'s office number?`,
            message: (answers) => `What is your ${answers.role}'s school?`,
            name: 'school',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role === "Intern",  
            //this question is mandatory
           validate: school => {
              if (school) {
                  return true;
              } else {
                  console.log(chalk.red(`\nPlease provide a valid school.`));
                  return false;
              }
            }
          },
    ]

    module.exports = {
        managerQuestions : managerQuestions,
        questions : questions,
    }
   
