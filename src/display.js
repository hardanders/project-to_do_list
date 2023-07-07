import Task from "./tasks";
import Project from "./projects";
import FormControls from "./formcontrols";
import { toDoArray, projectArray } from "./homepage";


var Display = {
    taskCon: function () {
        return document.querySelector('.inner-task-container');
    },
    projectCon: function () {
        return document.querySelector('.inner-project-container');
    },
    clearTasks: function () {
        let innerTask = document.querySelector('.inner-task-container');
        if (!!(innerTask)) {
            innerTask.innerHTML = '';
        } else {
            return;
        };
    },
    currentProject: function () {
        for(let pa=0;pa<projectArray.length;pa++) {
            let prArr = projectArray
            if (prArr[pa].selected == true){
                return projectArray[pa];
            };
        };
    },
    displayTasks: function (useProject) {
        Display.clearTasks();
        let projectTasks = useProject.tasks;
        for (let i=0;i<projectTasks.length;i++) {
            Display.taskCon().append(projectTasks[i].prepareTaskDiv())
        };
    },
    addNewTask: function () {
        let newTaskDiv = toDoArray[toDoArray.length-1];
        Display.taskCon().append(newTaskDiv.prepareTaskDiv());
    },
    removeFormFromScreen: function () {
        let parent = event.currentTarget.parentElement;
        parent.parentElement.remove();
    },
    addFormToScreen: function (whichForm) {
        if (!!(Display.checkForm() && whichForm == 'task')) {
            document.body.append(FormControls.populateTaskForm());
            FormControls.addFormListener();
        } else if (!!(Display.checkForm() && whichForm == 'project')) {
            document.body.append(FormControls.populateProjectForm());
            FormControls.dropdown();
            FormControls.addProjectListener();
        };
    },
    checkForm: function () {
        let isProjectForm = document.getElementById('project-form-container');
        let isTaskForm = document.getElementById('task-form-container');
        if ((isProjectForm == null) && (isTaskForm == null)) {
            return true;
        } else {
            return false;
        };
    },
    displayProjects: function () {
        for (let p=0;p<=projectArray.length-1;p++) {
            Display.projectCon().append(projectArray[p].prepareProjectDiv());
            if (projectArray[p].selected == true) {
                let thisProjectDiv = document.querySelector(`.newproject${p}`)
                thisProjectDiv.classList.add('selected');
            };
        };
    },
    addNewProject: function () {
        let newProjectDiv = projectArray[projectArray.length-1];
        Display.projectCon().append(newProjectDiv.prepareProjectDiv());
    },
    toggleSelectedValue: function (originalValue, newValue) {
        originalValue.selected = false;
        newValue.selected = true;
    },
    toggleSelectedDiv: function (originalDiv, newDiv) {
        originalDiv.classList.remove('selected');
        newDiv.classList.add('selected');
    }
};


//Test To-Do Items
var firstToDo = new Task("VPN install", "Install VPN for Andrew's team", "Yesterday");

var unassigned = new Project('Unassigned');
unassigned.selected = true;
unassigned.findUnassignedTasks();

var secondToDo = new Task("Second Test", "This is a description for my test to-do", "12/17/2023", "High");
var thirdToDo = new Task("Test Task 3");
var fourthToDo = new Task("Test Task 4");

var firstProject = new Project('Test');
firstProject.addTask(secondToDo);


var secondProject = new Project("Clean House");
secondProject.addTask(thirdToDo);
secondProject.addTask(fourthToDo);

console.log(toDoArray);

export {
    Display,
};