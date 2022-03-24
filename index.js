// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = () => {
return inquirer.prompt([ 
    {
        type: 'checkbox',
        message: 'What would you like to do?',
        name: 'Employee Tracker',
        choices: [
          new inquirer.Separator('### Select ###'),
          {
           name: 'View All Employees',
          }, {
           name: 'Add Employee',
          }, {
           name: 'Update Employee Role',
          }, {
           name: 'View All Roles',
          }, {
           name: 'Add Role',
          }, {
           name: 'View All Departments',
          }, {
            name: 'Add Department',
          }, {
            name: 'QUIT',
          } ],
    }, {
    type: 'input',
    name: 'Add Department',
    message: 'What is the name of the department?'
    }, {
    type: 'input',
    name: 'Add Role',
    message: 'What is the name of the role?'
    }, {
    type: 'input',
    name: 'Role Salary',
    message: 'What is the salary of the role?'
    }, {
        type: 'checkbox',
        message: 'What department does the role belong to?',
        name: 'Department of Role',
        choices: [
          new inquirer.Separator('### Select ###'),
          {
           name: 'Warehouse',
          }, {
           name: 'Production',
          }, {
           name: 'Design',
          }, {
           name: 'Developing',
          } ],
    }, {
    type: 'input',
    name: 'Employee First Name',
    message: 'What is the employee\'s first name?'
    }, {
    type: 'input',
    name: 'Employee Last Name',
    message: 'What is the employee\'s last name?'
    }, {
    type: 'input',
    name: 'Employee Last Name',
    message: 'What is the employee\'s last name?'
    }, {
    type: 'checkbox',
    message: 'What is the employee\'s role?',
    name: 'Employee Role',
    choices: [
        new inquirer.Separator('### Select ###'),
        {
        name: 'Full Stack',
        }, {
        name: 'Front End Developer',
        }, {
        name: 'Back End Developer',
        }, {
        name: 'Graphic Designer',
        }, {
        name: 'UI Designer',
        } ],
    }, {
    type: 'checkbox',
    message: 'What is the employee\'s role?',
    name: 'Employee Role',
    choices: [
        new inquirer.Separator('### Select ###'),
        {
        name: 'None',
        }, {
        name: 'Butch Cassidy',
        }, {
        name: 'Bill Hickok',
        }, {
        name: 'Buddy Crane',
        }, {
        name: 'Doc Holiday',
        }, {
        name: 'Jesse James',
        } ],
        }, {
    type: 'checkbox',
    message: 'What employee\'s role do you want to update?',
    name: 'Update Employee',
    choices: [
        new inquirer.Separator('### Select ###'),
        {
        name: 'Butch Cassidy',
        }, {
        name: 'Bill Hickok',
        }, {
        name: 'Buddy Crane',
        }, {
        name: 'Doc Holiday',
        }, {
        name: 'Jesse James',
        } ],
        }, {
    type: 'checkbox',
    message: 'What role do you want to assign the selected employee?',
    name: 'Employee New Role',
    choices: [
        new inquirer.Separator('### Select ###'),
        {
        name: 'Full Stack',
        }, {
        name: 'Front End Developer',
        }, {
        name: 'Back End Developer',
        }, {
        name: 'Graphic Designer',
        }, {
        name: 'UI Designer',
        } ],
        },
])}

// Function to write README file
const createFolder = () => {
  let dir = 'new-readme'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
};
const init = () => {
  createFolder()
  questions()
  .then((answers) =>
  //The fs passes the two text-related functions through, with getLicenseBadge passing through readmeText.
   fs.writeFileSync(`./new-readme/README.md`, generateMarkdown(answers)))
  .then(() => console.log('Your README has been created'))
  .catch((err) => console.error(err))
};

// Function call to initialize app
init();
    
