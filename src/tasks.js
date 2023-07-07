import { toDoArray } from "./homepage.js";

class Task {
    constructor(title, description, dueDate, priority, projectName) {
        this.title = title || "Default";
        this.description = description || '';
        this.dueDate = dueDate || '';
        this.priority = priority || "Standard";
        this.projectName = projectName || "Unassigned";
        Object.defineProperty(this, 'projectName', {
            enumerable: false,
            writable: true,
        });
        toDoArray.push(this);
    };
    prepareTaskDiv() {
        let toDoDiv = document.createElement('div');
        toDoDiv.classList.add(`newtask${toDoArray.indexOf(this)}`);
        for (let [key, value] of Object.entries(this)) {
            toDoDiv.innerHTML += 
                `
                <div>${key.toUpperCase()}: ${value}</div>
                `
        };
        return toDoDiv;
    };
};

export default Task;