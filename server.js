//imports and requires
require("console.table")
const mysql = require('mysql2');
const inquirer = require('inquirer')

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employeetracker_db'
  })
db.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to the database.`)
  callDepartments()
  callRoles()
  callManagers() 
  callEmployees()
  startmenu()
})

let mainQuestion = [{
  type: "list",
  message: "What would you like to do?",
  name: "choice",
  choices: ["View All Employees",
    "Add Employee",
    "Update Employee Role",
    "View All Roles",
    "Add Role",
    "View All Departments",
    "Add Department",
    "Quit"]
}]

let departmentQuestion = [{
  type: "input",
  message: "What is this new department called?",
  name: "DeptName"
}]

let deptArr =[]
function callDepartments(){
  db.query('SELECT * FROM department;', function (err, data){
    //Array loop for departments.
    for (let i = 0; i < data.length; i++) {
      let objects = data[i];
      deptArr.push(objects.name)
    }
  })
}

let roleQuestions = [
  {
    type: "input",
    message: "What is this new role called?",
    name: "RoleName"
  }, {
    type: "input",
    message: "What is the new role's salary?",
    name: "RoleSalary"
  }, {
    type: "list",
    message: "What department is this role in?",
    name: "RoleDept",
    choices: deptArr
  }
]

let rolesArr = []
function callRoles(){
  db.query('SELECT * FROM role', function(err, data){
    //Array loop of roles.
    for (let i = 0; i < data.length; i++) {
      let objects = data[i];
      rolesArr.push(objects.title)
    }
  })
}

let managerArr = []
function callManagers(){
  db.query('SELECT CONCAT(employee.first_name," ", employee.last_name) AS fullName FROM employee WHERE manager_id IS NULL;', function(err, data){
    for (let i = 0; i < array.length; i++) {
      let objects = data[i];
      managerArr.push(objects.fullName)
    }
  })
}

let employeeQuestions = [
  {
    type: "input",
    message: "What is the new employee's first name?",
    name: "firstName"
  }, {
    type: "input",
    message: "What is the new employee's last name?",
    name: "lastName"
  }, {
    type: "list",
    message: "What is their role?",
    name: "empRole",
    choices: rolesArr
  }, {
    type: "list",
    message: "Who is their manager?",
    name: "empManager",
    choices: managerArr
  }
]
let employeeArr = []
function callEmployees() {
  db.query('SELECT employee.first_name AS Name FROM employee;', function(err, data){
    if(err)throw err;
    for (let i = 0; i < array.length; i++) {
      let Empobjects = data[i];
      employeeArr.push(Empobjects.Name)
    }
  })
}

let updateEmployeeQuestions = [
  {
    type: "list",
    message: "Which employee are you updating?",
    name: "UpdateE",
    choices: employeeArr
  },{
    type: "list",
    message: "What is their new role?",
    name: "newRole",
    choices: rolesArr
  }
]

function startmenu(){
  inquirer.prompt(mainQuestion)
  .then(function(response){
    switch(response.choice){
      case "View All Employees":
        viewAllEmployees()
        break;
      case "Add Employee":
        addEmployee()
        break;
      case "Update Employee Role":
        updateEmployeeRole()
        break;
      case "View All Roles":
        viewAllRoles()
        break;
        case "Add Role":
          addRole()
          break;
      case "View All Departments":
        viewAllDepts()
        break;
      case "Add Department":
        addDept()
        break;
      default:
        db.end()
        process.exit(0)
    }
  })
}

function viewAllEmployees(){
  db.query('SELECT employee.first_name as Fname, employee.last_name AS Lname, roles.title AS Role, employee.id, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN employee manager ON manager.id = employee.manager_id JOIN roles ON roles.id = employee.roles_id;', function(err,data){
    if(err)throw err
    console.table(data)
    startmenu()
  })
};

function viewAllRoles(){
  db.query('SELECT department.department_name, role.title, role.salary FROM role JOIN department ON role.department_id = department_id;', function(err,data){
    if(err)throw err
    console.table(data)
    startmenu()
  })
};

function viewAllDepts(){
  db.query('SELECT * FROM department;', function(err,data){
    if(err)throw err
    console.table(data)
    startmenu()
  })
};

function addDept(){
  inquirer.prompt(departmentQuestion)
  .then(function(response){
    db.query('INSERT INTO department (department_name) VALUES (?);',
    response.DeptName,
     function(err,data){
      if(err)throw err
      startmenu()
    })
  })
}

function addRole() {
  callDepartments()
  inquirer.prompt(roleQuestions)
  .then(function(response) {
    let deptID = deptArr.indexOf(response.RoleDept) + 1;
    db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?);',
    [resonse.RoleName,
     response.RoleSalary,
     deptID],
      function(err,data){
        if(err)throw err
        startmenu()
      })
  })
}

function addEmployee() {
  callRoles()
  callManagers()
  inquirer.prompt(employeeQuestions)
  .then(function (response) {
    let roleID = rolesArr.indexOf(response.empRole) + 1;
    let managerID = managerArr.indexOf(response.empManager) +1
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);'
    [response.firstName,
     response.lastName,
     roleID,
     managerID],
      function(err,data){
        if(err)throw err
        startmenu()
    })
  })
}

function updateEmployeeRole() {
  callRoles()
  callEmployees()
  inquirer.prompt(updateEmployeeQuestions)
  .then(function(resonse){
    console.log(resonse.newRole)
    console.log(resonse.UpdateE)
    let roleID = rolesArr.indexOf(resonse.newRole) + 1;
    console.log(roleID)
    db.query(`UPDATE employee SET role_id = ${roleID} WHERE employee.first_name = '${response.UpdateE}'`, function
    (err, data){
      if(err)throw err
      startmenu()
    })
  })
}