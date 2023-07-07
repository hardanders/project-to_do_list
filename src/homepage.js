import {  Display } from "./display";

var toDoArray = [];
var projectArray = [];

var Homepage = {
    createDiv: function () {
        return document.createElement('div');
    },
    loadPage: function () {
        //Header shell
        const header = this.createDiv();
        const pageHeadL = this.createDiv();
        const pageHeadR = this.createDiv();
        pageHeadL.classList.add('main-head');
        pageHeadR.classList.add('second-head');
        pageHeadR.innerHTML = 'TO-DO LIST';
        header.classList.add('header');
        header.append(pageHeadL, pageHeadR);
        document.body.append(header);

        // Task and Project Buttons
        const taskBtn = document.createElement('button');
        taskBtn.classList.add('btn-task')
        taskBtn.textContent = "NEW TASK";
        taskBtn.addEventListener('click', function () {
            Display.addFormToScreen('task')
        });
        const projectBtn = document.createElement('button');
        projectBtn.classList.add('btn-project');
        projectBtn.textContent = "NEW PROJECT";
        projectBtn.addEventListener('click', function () {
            Display.addFormToScreen('project')
        });
        pageHeadL.append(taskBtn, projectBtn);

        //Content Shell
        const mainCon = this.createDiv();
        mainCon.classList.add('main-content');

        const projectContainer = this.createDiv();
        projectContainer.classList.add('project-container');
        projectContainer.textContent = 'PROJECTS';
        const innerProjectContainer = this.createDiv();
        innerProjectContainer.classList.add('inner-project-container');
        projectContainer.append(innerProjectContainer);

        const taskContainter = this.createDiv();
        taskContainter.classList.add('task-container');
        taskContainter.textContent = 'TASKS';
        const innerTaskContainer = this.createDiv();
        innerTaskContainer.classList.add('inner-task-container');
        taskContainter.append(innerTaskContainer);

        mainCon.append(projectContainer, taskContainter);
        document.body.append(mainCon);
    },
};

export default Homepage;
export {
    toDoArray,
    projectArray,
}