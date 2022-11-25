const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require("fs")
const inquirer = require('inquirer');


const promptManager = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members to add"],
        name: "menuSelect"
    }
]


const addEngineer = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub Username?",
        name: "gitHub"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members to add"],
        name: "menuSelect"
    }
];

const addIntern = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your intern's school name?",
        name: "school"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members to add"],
        name: "menuSelect"
    }
]

function engineerStart() {
    console.log("added engineer");
    inquirer.prompt(addEngineer).then((Response) => {
        console.log(Response);
        const engineer = new Engineer(
            Response.name,
            Response.id,
            Response.email,
            "Engineer",
            Response.gitHub
        );
        let madEngineer = generateEngineer(engineer);
        fs.appendFile("./dist/team.html", madEngineer, (err) => {
            err ? console.error(err) : console.log("engineer was appeneded");
        });
        console.log(engineer);
        if (Response.menuSelect === "Engineer") {
            engineerStart();
        } else if (Response.menuSelect === "Intern") {
            internStart();
        } else {
            return;
        }
    })
}
function generateEngineer(data) {
    return `
        <div class="bg-light text-center p-3 m-3 rounded">
                <h2>${data.name}</h2>
                <h3>${data.className}</h3>
                <p>ID:${data.id}</p>
                <a href="mailto: ${data.email}"
                  >Email:${data.email}</a
                >
                <br>
                <a href="https://github.com/${data.gitHub}" target="_blank">GitHub:${data.gitHub}</a>
                </div>`;
}
function internStart() {
    console.log("You have added an intern");
    inquirer.prompt(addIntern).then((Response) => {
        console.log(Response);
        const intern = new Intern(
            Response.name,
            Response.id,
            Response.email,
            "Intern",
            Response.school
        );
        let madeIntern = generateIntern(intern);
        fs.appendFile("./dist/team.html", madeIntern, (err) => {
            err ? console.error(err) : console.log("intern was appended");
        });
        console.log(intern);
        if (Response.menuSelect === "Engineer") {
            engineerStart();
        } else if (Response.menuSelect === "Intern") {
            internStart();
        } else {
            return;
        }
    });
}
function generateIntern(data) {
    return `<div class="bg-light text-center p-3 m-3 rounded">
      <h2>${data.name}</h2>
      <h3>${data.className}</h3>
      <p>ID:${data.id}</p>
      <a href="mailto: ${data.email}"
        >Email:${data.email}</a
      >
      <p>School:${data.school}</p>
      </div>`;
}
//this will create and html file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, (err) => {
        err ? console.error(err) : console.log("success!");
    });
}
//this will actually generate and and spit out the html so it can be appended.
function generateHTML(data) {
    return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-secondary">
    <h1 class="text-center bg-primary p-3">My Team</h1>
    <div class= "d-flex justify-content-center">
    <div class = "row">
    <main id="main">
      
      <div class="bg-light text-center p-3 m-3 rounded">
            <h2>${data.name}</h2>
            <h3>${data.className}</h3>
            <p>ID:${data.id}</p>
            <a href="mailto: ${data.email}"
              >Email:${data.email}</a
            >
            <p>Office#:${data.officeNumber}</p>
            </div>
    </main>
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
}
//this will ask the user questoins about the manager and append data to an html file
function init() {
    inquirer.prompt(promptManager).then((Response) => {
        const manager = new Manager(
            Response.managerName,
            Response.managerId,
            Response.managerEmail,
            "Manager",
            Response.managerOffice
        );
        console.log(manager);
        let madeHTML = generateHTML(manager);
        writeToFile("team.html", madeHTML);

        if (Response.menuSelect === "Engineer") {
            engineerStart();
        } else if (Response.menuSelect === "Intern") {
            internStart();
        } else {
            return;
        }
    });
}
//When index.js is run, this kickstart the program
init();