/* Hold all newly created Class objects */
let projects = [];

/* Class blueprint for all projects and their tasks */
class MyProjects {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}

/* Testing use only - delete */
let test1 = new MyProjects("Chores");
let test2 = new MyProjects("Homework", ["Math", "Spelling"]);
let test3 = new MyProjects("WorkOut", ["Biceps", "Triceps"]);

projects.push(test1);
projects.push(test2);
projects.push(test3);


/***************************************************************************************************
 *                                  Side-panel / Project functions                                 *
****************************************************************************************************/

/* Set intiital projecte selection */
let currentProject = 0;

/* Display individual projects in the side-bar */
function displayProjects() {

    clearThisDiv("project-container");

    for(let i = 0; i < projects.length; i++) {

        const getProjectContainer = document.getElementById("project-container");
        
        /* Create a button for each individual project */
        const createProjectButton = document.createElement('button');
        createProjectButton.className = "project-buttons";
        createProjectButton.id = "project-buttons-id" + i;
        createProjectButton.innerHTML = projects[i].title;
        getProjectContainer.appendChild(createProjectButton);
        
        /* Create delete button for individual projects */
        const getProjectID = document.getElementById("project-buttons-id" + i);
        const createDeleteProjectButton = document.createElement('button');
        createDeleteProjectButton.className = "delete-project-button";
        createDeleteProjectButton.id = "delete-project-button-id" + i;
        createDeleteProjectButton.innerHTML = "x";
        getProjectID.appendChild(createDeleteProjectButton);

        /* Event listener to delete projects */
        document.getElementById("delete-project-button-id" + i).addEventListener("click",
            function() {
                deleteThisProject(i);
            });
    }   
    displayTasks();                                 // display tasks for the active project
};

/* Function delete a project from the projects array */
function deleteThisProject(i) {
    projects.splice(i, 1);
    clearThisDiv("project-container");
    displayProjects();
};


/***************************************************************************************************
 *                                      Main Task List Functions                                   *
****************************************************************************************************/

//     let projectName = projects[currentProject].title;
//     let currentProjectTasks = projects[currentProject].tasks;

//     for(let i = 0; i < currentProjectTasks.length; i++) {

//         createDivForTaskElements(projectName, currentProjectTasks[i]);

//         const taskDiv = document.getElementById(projectName + "-" + currentProjectTasks[i]);

//         /* Create paragraph for each task */
//         const div = document.createElement('div');
//         let title = currentProjectTasks[i];
//         div.className = "tasks";
//         div.innerHTML = title;
//         taskDiv.appendChild(div);

//         /* Create delete button for each task */
//         const getTaskContainer = document.getElementById(projectName + "-" + currentProjectTasks[i]);
//         const deleteTaskButton = document.createElement('button');
//         deleteTaskButton.className = "delete-task-button";
//         deleteTaskButton.id = projectName + "TaskID" + i;
//         deleteTaskButton.innerHTML = "x";
//         getTaskContainer.appendChild(deleteTaskButton);

//         /* Event listener for task delete button */
//         document.getElementById(projectName + "TaskID" + i).addEventListener("click",
//         function() {
//             deleteTask(currentProject, i);
//         })
//     };
// };




/* Function to display all tasks for the applicable project */
function displayTasks() {

    if((projects.length) == 0) {    
        alert("Projects array is empty, please create a new project");  // testfor empty array causing
        return;                                                         // undefined issues exit loop
    }

    clearThisDiv("main");

    let taskLength = projects[currentProject].tasks.length;

    for(let i = 0; i < taskLength; i++) {

        createDivContainer(i);

        let taskTitle = projects[currentProject].tasks[i].title;
        let taskDescription = projects[currentProject].tasks[i].description;
        let taskDueDate = projects[currentProject].tasks[i].dueDate;
        let taskpriority = projects[currentProject].tasks[i].priority;

        addParagraphElement(taskTitle, i, "task-titles", "task-titles-id-");
    };
};

/***************************************************************************************************
 *                                      Task Creation Elements                                     *
****************************************************************************************************/

function createDivContainer(i) {
    const getMain = document.getElementById('main');

    const newDiv = document.createElement('div');
    newDiv.className = "task-container";
    newDiv.id = "task-id-" + i;
    getMain.appendChild(newDiv);
}

function addParagraphElement(text, counter, className, idName) {
    const getDivContainer = document.getElementById('task-id-' + counter);

    const newParagraph = document.createElement('p');
    newParagraph.className = className;
    newParagraph.id = idName + counter;
    newParagraph.innerHTML = text;
    getDivContainer.appendChild(newParagraph);
}








// function createDivForTaskElements(name, task) {

//     const main = document.getElementById('main');

//     /* Create a new div for each task */
//     const div = document.createElement('div');
//     div.className = "task-container";
//     div.id = name + "-" + task; 
//     main.appendChild(div);
// }



























/* Function that clears out dom elements */
function clearThisDiv(el) {
    let projectDiv = document.getElementById(el);
    projectDiv.innerHTML = "";
}

/* Function pushes new project to the projects array */
function addTaskToProject(task) {
    projects[currentProject].tasks.push(task);
}

/* Function to initialize the page */
function initializeProjects() {
    displayProjects();
};

export { displayProjects, initializeProjects, addTaskToProject }



// /********************OLD CODE - DELETE ******************************/


// /* Hold all newly created Class objects */
// let projects = [];

// /* Class blueprint for all projects and their tasks */
// class MyProjects {
//     constructor(title, tasks = []) {
//         this.title = title;
//         this.tasks = tasks;
//     }
// }

// /* Testing use only - delete */
// let test1 = new MyProjects("Shopping List", ["Takek out the Trash", "Wash Dishes", "Eat", "Sleep", "Drink Something"]);
// let test2 = new MyProjects("Homework", ["Math", "Spelling"]);
// let test3 = new MyProjects("WorkOut", ["Biceps", "Triceps"]);

// projects.push(test1);
// projects.push(test2);
// projects.push(test3);

// /* Set intiital project */
// let currentProject = 0;

// /* Display individual projects in the side-bar */
// function displayProjects() {
    
//     for(let i = 0; i < projects.length; i++) {

//         const getProjectContainer = document.getElementById("project-container");
        
//         /* Create a button for each individual project */
//         const createProjectButton = document.createElement('button');
//         let projectName = projects[i].title;
//         createProjectButton.className = "project-buttons";
//         createProjectButton.id = "project" + i;
//         createProjectButton.innerHTML = projectName;
//         getProjectContainer.appendChild(createProjectButton);
        
//         /* Create delete button for individual projects */
//         const getProjectID = document.getElementById("project" + i);
//         const createDeleteProjectButton = document.createElement('button');
        
//         createDeleteProjectButton.className = "delete-project-button";
//         createDeleteProjectButton.id = "project" + i + "-delete";
//         createDeleteProjectButton.innerHTML = "x";
//         getProjectID.appendChild(createDeleteProjectButton);

//         /* Event listner to delete project */
//         document.getElementById("project" + i + "-delete").addEventListener("click",
//         function() {
//             deleteProject(projectName);
//         });

//         /* Event listner for each project button */
//         document.getElementById("project" + i).addEventListener("click",
//         function() {
//             selectDifferentProject(i);
//         })
//     };
// };

// function displayTasks() {

//     let projectName = projects[currentProject].title;
//     let currentProjectTasks = projects[currentProject].tasks;

//     for(let i = 0; i < currentProjectTasks.length; i++) {

//         createDivForTaskElements(projectName, currentProjectTasks[i]);

//         const taskDiv = document.getElementById(projectName + "-" + currentProjectTasks[i]);

//         /* Create paragraph for each task */
//         const div = document.createElement('div');
//         let title = currentProjectTasks[i];
//         div.className = "tasks";
//         div.innerHTML = title;
//         taskDiv.appendChild(div);

//         /* Create delete button for each task */
//         const getTaskContainer = document.getElementById(projectName + "-" + currentProjectTasks[i]);
//         const deleteTaskButton = document.createElement('button');
//         deleteTaskButton.className = "delete-task-button";
//         deleteTaskButton.id = projectName + "TaskID" + i;
//         deleteTaskButton.innerHTML = "x";
//         getTaskContainer.appendChild(deleteTaskButton);

//         /* Event listener for task delete button */
//         document.getElementById(projectName + "TaskID" + i).addEventListener("click",
//         function() {
//             deleteTask(currentProject, i);
//         })
//     };
// };

// /***************************************************************************************************
//  *                                  Side-panel / Project functions                                 *
// ****************************************************************************************************/

// /* Function for switching and displaying projects */
// function selectDifferentProject(selectThisProject) {

//     let getMainSection = document.getElementById('main');       // clear out tasks for this project
//     getMainSection.innerHTML = "";

//     currentProject = selectThisProject;                         // reset global var to this project
//     displayTasks();                                             // update tasks on screen
// }

// /* Function to delete individual projects */
// function deleteProject(title) {
//     projects = projects.filter(function(el) {
//         return el.title != title;
//     });
//     rebuildProjects();                                                  // rebuild updated projects and task
// };                                                                        // display

// /* Function to rebuild the side container with current projects */
// function rebuildProjects() {
//     let emptySideBar = document.getElementById('project-container');    // clear out side bar
//     emptySideBar.innerHTML = "";
//     displayProjects();                                                  // display current projects
// }

/***************************************************************************************************
 *                                      Main Task List Functions                                   *
****************************************************************************************************/


// /* Function for delete individual tasks from each project object */
// function deleteTask(projectIndexNumber, taskIndexToDelete) {

//     projects[projectIndexNumber].tasks.splice(taskIndexToDelete, 1);    // delete task from project array

//     let tasksView = document.getElementById('main');                    // clear task view
//     tasksView.innerHTML = "";
//     displayTasks();                                                     // update and display tasks
 
// }



// function initializeProjects() {
//     displayProjects();
//     displayTasks();
// }

// export { initializeProjects }