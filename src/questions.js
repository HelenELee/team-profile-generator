//function used to validate email address
const validateEmail = require("./utilities.js");
//used to validate github name
const githubUsernameRegex = require('github-username-regex');
 //use chalk to colour messages/error messages
var chalk = require('chalk');

//initial instructions and questions to gather info on manager
const managerQuestions = [
    {
        //first questions is instructions
        type: 'confirm',
        message: chalk.blue('------------------------------\n' +
        'Welcome to the Team Generator\n' +
        '--------------------------------\n' +
        'Use `npm run reset` to reset the dist/ folder.\n' +
        'Are you ready to build your team?'),
        name: 'welcome',

    },
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
        //only ask next questions if user choses to continue after instructions were provided
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
           //check number provided
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
          //check its a number
          if(number && /^[0-9]+$/.test(number)) {
              return true;
          } else {
              console.log(chalk.red("\nPlease provide a manager's office number. It must be numeric."));
              return false;
          }
        }
      },
    ];

    //questions to gather info on all employees - except manager
    const questions = [
    {
        message : "What type of team member would you like to add?",
        type : 'list',
        choices :["Engineer", "Intern", "None - I'm finished"],
        name : "role",
      },

        {
            type: 'input',
            message: (answers) => `What is your ${answers.role}'s name?`,
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
            message: (answers) => `What is your ${answers.role}'s id?`,
            name: 'id',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role !=="None - I'm finished", 
            //this question is mandatory
            validate:id => {
              //check its a number
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
            message: (answers) => `What is your ${answers.role}'s email?`,
            name: 'email',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role !=="None - I'm finished", 
            //this question is mandatory
            validate: email => {
              //check valid email
              if (email && validateEmail(email)) {
                  return true;
              } else {
                  console.log(chalk.red(`\nPlease provide a valid email.`));
                  return false;
              }
            }
          },
          {
            type: 'input',
            message: (answers) => `What is your ${answers.role}'s github username?`,
            name: 'github',
            //only ask next questions if user chose to continue after instructions were provided
            when: (answers) => answers.role === "Engineer",  
            //this question is mandatory
           validate: github => {
            //check its a valid github account name
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

    //export so can be used in index.js with Inquirer
    module.exports = {
        managerQuestions : managerQuestions,
        questions : questions,
    }
   
