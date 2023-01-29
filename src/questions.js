const managerQuestions = [
    {
        //first questions is instructions
        type: 'confirm',
        message: '------------------------------\n' +
        'Welcome to the Team Generator\n' +
        '--------------------------------\n' +
        'Use `npm run reset` to reset the dist/ folder.\n' +
        'Are you ready to build yur team?',
        name: 'welcome',

    },
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'manager',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: proj => {
          if (proj) {
              return true;
          } else {
              console.log("Please provide a manager's name!");
              return false;
          }
        }
      },
      {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: proj => {
          if (proj) {
              return true;
          } else {
              console.log("Please provide a manager's id!");
              return false;
          }
        }
      },
      {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: proj => {
          if (proj) {
            //TO DO - validation for email
              return true;
          } else {
              console.log("Please provide a manager's email!");
              return false;
          }
        }
      },
      {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerNumber',
        //only ask next questions if user chose to continue after instructions were provided
        when: (answers) => answers.welcome === true, 
        //this question is mandatory
        validate: proj => {
          if (proj) {
              return true;
          } else {
              console.log("Please provide a manager's office number!");
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
            //when: (answers) => answers.welcome === true, 
            //this question is mandatory
           /* validate: proj => {
              if (proj) {
                  return true;
              } else {
                  console.log("Please provide a manager's name!");
                  return false;
              }
            }*/
          },
          {
            type: 'input',
            //message: `What is your ${role}'s id?`,
            message: (answers) => `What is your ${answers.role}'s id?`,
            name: 'id',
            //only ask next questions if user chose to continue after instructions were provided
            //when: (answers) => answers.welcome === true, 
            //this question is mandatory
           /* validate: proj => {
              if (proj) {
                  return true;
              } else {
                  console.log("Please provide a manager's name!");
                  return false;
              }
            }*/
          },
          {
            type: 'input',
            //message: `What is your ${roleType}'s email?`,
            message: (answers) => `What is your ${answers.role}'s email?`,
            name: 'email',
            //only ask next questions if user chose to continue after instructions were provided
            //when: (answers) => answers.welcome === true, 
            //this question is mandatory
           /* validate: proj => {
              if (proj) {
                  return true;
              } else {
                  console.log("Please provide a manager's name!");
                  return false;
              }
            }*/
          },
          {
            type: 'input',
            //message: `What is your ${roleType}'s office number?`,
            message: (answers) => `What is your ${answers.role}'s office number?`,
            name: 'number',
            //only ask next questions if user chose to continue after instructions were provided
            //when: (answers) => answers.welcome === true, 
            //this question is mandatory
           /* validate: proj => {
              if (proj) {
                  return true;
              } else {
                  console.log("Please provide a manager's name!");
                  return false;
              }
            }*/
          },
    ]

    module.exports = {
        managerQuestions : managerQuestions,
        questions : questions,
    }
   
