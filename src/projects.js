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
let test1 = new MyProjects("Shopping List", ["Takek out the Trash", "Wash Dishes"]);
let test2 = new MyProjects("Homework", ["Math", "Spelling"]);
let test3 = new MyProjects("WorkOut", ["Biceps", "Triceps"]);

projects.push(test1);
projects.push(test2);
projects.push(test3);

/* Set intiital project */
let currentProject = projects[0];

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
        deleteButton.id = projectName + "delete";
        deleteButton.innerHTML = "x";
        getProjectID.appendChild(deleteButton);

        /* Add event listner to delete project */
        document.getElementById(projectName + "delete").addEventListener("click",
        function() {
            deleteProject(projectName);
        });

        document.getElementById(projectName).addEventListener("click",
        function() {
            selectDiffProject(projects[i]);
        })
    };
};

function selectDiffProject(selectThisProject) {

    /* Clear out the main div */
    let getMainSection = document.getElementById('main');
    getMainSection.innerHTML = "";

    /* Set global variable to current project */
    currentProject = selectThisProject;

    /* Display tasks for new project */
    displayTasks();
}

function displayTasks() {

    let projectName = currentProject.title;
    let currentProjectTasks = currentProject.tasks;

    for(let i = 0; i < currentProjectTasks.length; i++) {

        createTaskDiv(projectName, currentProjectTasks[i]);

        const taskDiv = document.getElementById(projectName + "-" + currentProjectTasks[i]);

        /* Create div for each task */
        const div = document.createElement('div');
        let title = currentProjectTasks[i];
        div.className = "tasks";
        div.innerHTML = title;
        taskDiv.appendChild(div);
    };
};

function createTaskDiv(name, task) {

    const main = document.getElementById('main');

    /* Create div for each task */
    const div = document.createElement('div');
    div.className = "task-box";
    div.id = name + "-" + task; 
    main.appendChild(div);
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
    displayTasks();
}












export { test }