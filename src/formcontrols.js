import Task from "./tasks";
import Project from "./projects.js";
import { toDoArray } from "./homepage";
import { Display } from "./display.js";

var FormControls = {
    populateTaskForm: function () {
        let taskForm = document.createElement('div');
        taskForm.setAttribute('id','task-form-container');
        taskForm.innerHTML = 
            `
            <div class="form-title">Add a To-Do</div>
            <form class="task-form">
                <div class="form-input">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" size="33">
                </div>
                <div class="form-input form-desc">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" rows="3" cols="33"></textarea>
                </div>
                <div class="form-input">
                    <label for="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="description" size="33">
                </div>
                <div class="form-input">
                    <label for="priority">Priority:</label>
                    <input type="text" id="priority" name="priority" size="33">
                </div>
            </form>
            <div class="submit-btn-con">
                <button class="submit-btn">Create</button>
            </div>
            `
        return taskForm;
    },
    populateProjectForm: function () {
        let projectForm = document.createElement('div');
        projectForm.setAttribute('id', 'project-form-container');
        projectForm.innerHTML = 
            `
            <div class="form-title">Add a To-Do</div>
            <form class="project-form">
                <div class="form-input">
                    <label for="project-title">Project Name:</label>
                    <input type="text" id="project-title" name="project-title" size="33">
                </div>
                <div class="form-input select">
                    <label for="tasks">Add Tasks: </label>
                </div>
            </form>
            <div class="submit-project-con">
                <button class="submit-project">Create</button>
            </div>
            `
        return projectForm;
    },
    dropdown: function () {
        let dropdownList = document.createElement('select');
        dropdownList.id = 'dropdown-tasks';
        dropdownList.innerHTML = 
            `
            <option value="none">None</option>
            `;
        for (let d=0; d<toDoArray.length;d++) {
            let dropdownOption = document.createElement('option');
            dropdownOption.value = toDoArray[d].title;
            dropdownOption.text = toDoArray[d].title;
            dropdownList.append(dropdownOption);
        };
        let dropdownDiv = document.querySelector('.select');
        dropdownDiv.append(dropdownList);
    },
    addFormListener: function () {
        let submitBtn = document.querySelector('.submit-btn');
        submitBtn.addEventListener('click', function() {
            new Task(
                document.querySelector('#title').value,
                document.querySelector('#description').value,
                document.querySelector('#dueDate').value,
                document.querySelector('#priority').value
            );
            Display.addNewTask();
            Display.removeFormFromScreen();
        });
    },
    addProjectListener: function () {
        let projectFormBtn = document.querySelector('.submit-project');
        projectFormBtn.addEventListener('click', function() {
            new Project(
                document.getElementById('project-title').value,
            );
            Display.addNewProject();
            Display.removeFormFromScreen();
        });
    },
};

export default FormControls;