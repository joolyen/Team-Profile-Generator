const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];

getManager();

function getManager() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Which manager would you like on this team?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
                default: () => {},
                validate: function (email) {
                    //adding email validation to the form
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the manager's office number?"
            },
        ]).then(answers => {
            
            //creating a new instance based off of the users responses and adding it to the array
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
            team.push(manager);
            addEmployee();
        })
}

function addEmployee() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "Would you like to add another person to this team?",
                choices: ["Engineer", "Intern", "No Thanks"]
            }
        ]).then(answers => {
            //using a switch statement to choose team members to add
            switch (answers.choice) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    createTeam();
            }
        })
}

function createEngineer() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the Engineer?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is your Engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your Engineer's email?",
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is your Engineer's GitHub username?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        team.push(engineer);
        addEmployee();
    })
}

function createIntern() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the Intern?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is your Intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intern's email?",
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your Intern's school?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        team.push(intern);
        addEmployee();
    })
}

function createTeam() {
    fs.writeFileSync(outputPath, render(team));
}
