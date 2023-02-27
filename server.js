const { appendFile } = require("fs");
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");
const dotenv = require("dotenv");
const sequelize = require("sequelize");

let roles;
let departments;
let managers;
let employees;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "employee_db",
});

function displayMenu() {}

function displayMenu() {
  const options = [
    "Add department",
    "Add role",
    "Add employee",
    "View departments",
    "View roles",
    "View employees",
    "Update employee role",
    "Quit",
  ];
  inquirer
    .prompt({
      type: "list",
      choices: options,
      message: "What would you like to do?",
      name: "option",
    })
    .then(({ option }) => {
      console.log(`You entered: ${option}`);
      switch (option) {
        case "Add department":
          department();
          break;
        case "Add role":
          Role();
          break;
        case "Add employee":
          Employee();
          break;
        case "View departments":
          Department();
          break;
        case "View roles":
          Roles();
          break;
        case "View employees":
          Employees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          quit();
      }
    })
    .catch((err) => {
      throw err;
    });
}

const department = () => {
  // Code for adding a department
};

const Role = () => {
  // Code for adding a role
};

const Employee = () => {
  // Code for adding an employee
};

const Department = () => {
  // Code for viewing departments
};

const Roles = () => {
  // Code for viewing roles
};

const Employees = () => {
  // Code for viewing employees
};

function quit() {
  // Code for quitting the application
}

function promptDepartment() {
  return inquirer
    .prompt({
      type: "input",
      message: "What is the name of the department?",
      name: "deptName",
    })
    .then(({ deptName }) => deptName)
    .catch((err) => {
      console.error(err);
    });
}

function addDepartment(deptName) {
  return connection
    .query("INSERT INTO department (name) VALUES (?)", [deptName])
    .then((res) => {
      console.table(res);
      displayMenu();
    })
    .catch((err) => {
      console.error(err);
    });
}

function promptRole() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salaryTotal",
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptID",
      },
    ])
    .then(({ roleName, salaryTotal, deptID }) => {
      return { roleName, salaryTotal, deptID };
    })
    .catch((err) => {
      console.error(err);
    });
}

function addRole(roleName, salaryTotal, deptID) {
  return connection
    .query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [
      roleName,
      salaryTotal,
      deptID,
    ])
    .then((res) => {
      console.table(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function addDepartmentHandler() {
  promptDepartment()
    .then((deptName) => addDepartment(deptName))
    .then(() => displayMenu())
    .catch((err) => {
      console.error(err);
    });
}

function addRoleHandler() {
  promptRole()
    .then(({ roleName, salaryTotal, deptID }) => {
      return addRole(roleName, salaryTotal, deptID);
    })
    .then(() => displayMenu())
    .catch((err) => {
      console.error(err);
    });
}

function promptEmployee() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "eeFirstName",
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "eeLastName",
        name: "eeLastName",
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID",
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID",
      },
    ])
    .then((answers) => {
      return answers;
    })
    .catch((err) => {
      console.error(err);
    });
}
function addEmployee(FirstName, LastName, roleID, managerID) {
  return connection
    .query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [FirstName, LastName, roleID, managerID]
    )
    .then((res) => {
      console.table(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function promptEmployeeUpdate() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "Update",
      },
      {
        type: "input",
        message: "What do you want to update to?",
        name: "updateRole",
      },
    ])
    .then((answers) => {
      return answers;
    })
    .catch((err) => {
      console.error(err);
    });
}

function updateEmployee(Update, updateRole) {
  return connection
    .query("UPDATE employee SET role_id=? WHERE first_name= ?", [
      updateRole,
      Update,
    ])
    .then((res) => {
      console.table(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function addEmployeeHandler() {
  promptEmployee()
    .then(({ FirstName, LastName, roleID, managerID }) => {
      return addEmployee(FirstName, LastName, roleID, managerID);
    })
    .then(() => {
      return displayMenu();
    })
    .catch((err) => {
      console.error(err);
    });
}

function updateEmployeeHandler() {
  promptEmployeeUpdate()
    .then(({ Update, updateRole }) => {
      return updateEmployee(Update, updateRole);
    })
    .then(() => {
      return displayMenu();
    })
    .catch((err) => {
      console.error(err);
    });
}

function view(table) {
  return connection
    .query(`SELECT * FROM ${table}`)
    .then((res) => {
      console.table(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .then(() => {
      return displayMenu();
    });
}

function viewDepartment() {
  return view("department");
}

function viewRoles() {
  return view("role");
}

function viewEmployees() {
  return view("employee");
}

function quit() {
  connection.end();
  process.exit();
}

// Call the main menu function to start the application
displayMenu();
