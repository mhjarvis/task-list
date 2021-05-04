let projects = [];

class MyProjects {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}

let test1 = new MyProjects("Shopping List", ["Takek out the Trash"]);
let test2 = new MyProjects("Homework", ["Math", "Spelling"]);
let test3 = new MyProjects("WorkOut", ["Biceps", "Triceps"]);

projects.push(test1);
projects.push(test2);
projects.push(test3);

/* Display individual projects in the side-bar */
function displayProjects() {
    
    for(let i = 0; i < projects.length; i++) {

        const projectContainer = document.getElementById("project-container");
        
        /* Create a button for each individual project */
        const button = document.createElement('button');
        let projectName = projects[i].title;
        button.className = "project-titles";
        button.id = projectName;
        button.innerHTML = projectName;
        projectContainer.appendChild(button);
        
        console.log(projects[i].title);
    }
}


function test() {
    displayProjects();
}

export { test }