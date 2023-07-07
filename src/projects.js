import { toDoArray, projectArray } from "./homepage.js";
import { Display } from "./display.js";

class Project {
    constructor(title, ...tasks) {
        this.title = title || `Project ${projectArray.length+1}`;
        this.tasks = tasks || 'No Tasks Selected';
        this.selected = false;
        Object.defineProperty(this, 'selected', {
            enumerable: false,
            writable: true,
        });
        projectArray.push(this);
    };
    findUnassignedTasks() {
        for (let toDo in toDoArray) {
            if (toDoArray[toDo].projectName == 'Unassigned') {
                this.tasks.push(toDoArray[toDo]);
            };
        };
    };
    addTask(taskToAdd) {
        let taskArray = toDoArray.slice(toDoArray.indexOf(taskToAdd), toDoArray.indexOf(taskToAdd)+1);
        taskArray.forEach(task => {
            task['projectName'] = `${this.title}`;
        });
        this.tasks.push(taskArray[0]);
    };
    prepareProjectDiv() {
        let projectDiv = document.createElement('button');
        projectDiv.classList.add(`newproject${projectArray.indexOf(this)}`);
        projectDiv.value = `${this.title}`;
        projectDiv.innerHTML = 
            `
            <div>PROJECT NAME: ${this.title}</div>
            <div>TASKS: ${this.tasks.length}</div>
            `
        projectDiv.addEventListener('click', function () {
            if (this.classList.contains('selected')) {
                return;
            } else {
                let projectNum = projectArray[this.classList[0].charAt(this.classList[0].length-1)];
                Display.toggleSelectedValue(Display.currentProject(), projectNum);
                let originalProjectDiv = document.querySelector('.selected');
                Display.toggleSelectedDiv(originalProjectDiv, this);
                Display.displayTasks(Display.currentProject());
            };
        });
        return projectDiv;
    };
};

export default Project;