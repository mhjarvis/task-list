import { addTaskToProject, displayProjects } from './projects'

/* Class blueprint for creating Tasks */
class Tasks {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

/* Function that creates tasks from form and adds to current project */
function createTaskAndPush(title, description, dueDate, priority) {
    let newTask = new Tasks(title, description, dueDate, priority);
    addTaskToProject(newTask);
    displayProjects();
}

/* Function that displays all tasks from current project */



/* Testing only; delete before deploy */
function testing() {
    createTaskAndPush("POOOOOOOOOOOP", "Poop a lot", "soon", "low");
}

export { testing }