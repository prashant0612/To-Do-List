const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
};

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";

    if(!taskName){
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }

   const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
        <input type="checkbox" class="task-check">
        <span class="taskName">${taskName}</span>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;

    tasksContainer.appendChild(task);
    taskCount++;
    displayCount(taskCount);
    newTaskInput.value = ''; // Clear the input field after adding a task

    // Attach event listeners for edit and delete buttons
    const editButton = task.querySelector(".edit");
    const deleteButton = task.querySelector(".delete");

    editButton.addEventListener("click", () => {
        const editedTaskName = prompt("Edit task:", taskName);
        if (editedTaskName !== null) {
            task.querySelector(".taskName").innerText = editedTaskName;
        }
    });

    deleteButton.addEventListener("click", () => {
        tasksContainer.removeChild(task);
        taskCount--;
        displayCount(taskCount);
    });
};


addBtn.addEventListener("click", addTask);