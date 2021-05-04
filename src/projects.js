/* Hold all project and their tasks */
let projects = [];

/* Class blueprint for all projects and their tasks */
class MyProjects {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}

/* Testing use only - delete */
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
        
        /* Create delete button for individual projects */
        const getProjectID = document.getElementById(projectName);
        const deleteButton = document.createElement('button');
        let deleteButtonName = projectName + "-delete";
        deleteButton.className = "delete-project-button";
        deleteButton.id = projectName;
        deleteButton.innerHTML = "x";
        getProjectID.appendChild(deleteButton);

        /* Add event listner to delete project */
        document.getElementById(projectName).addEventListener("click",
        function() {
            deleteProject(projectName);
        });
    }
}

/* Delete individual projects */
function deleteProject(title) {
    projects = projects.filter(function(el) {
        return el.title != title;
    });
    rebuild();
};

/* Rebuild the side container with current projects */
function rebuild() {
    let emptySideBar = document.getElementById('project-container');
    emptySideBar.innerHTML = "";
    displayProjects();
}


function test() {
    displayProjects();
}

export { test }