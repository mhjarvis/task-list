let projects = [];

class MyProjects {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}

let test1 = new MyProjects("Shopping List", ["Takek out the Trash"]);
projects.push(test1);

function displayProjects() {
    
    for(let i = 0; i < projects.length; i++) {

        const projectDiv = document.getElementsByClassName("project-container");
        const button = document.createElement('button');
        
        console.log(projects[i].title);
    }
}


function test() {
    displayProjects();
}

export { test }