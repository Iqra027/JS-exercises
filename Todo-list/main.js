const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    console.log(new Date().getTime());
    if (taskText !== '') {
        const task={
            id: Date.now(),
            text: taskText,
            completed: false    
        }
        addTaskToDom(task);
        saveTaskToLocalStorage(task);
        todoInput.value = '';
        todoInput.focus();
    }
    // console.log(taskText);
}

function addTaskToDom(task) {
    const li = document.createElement('li');
    li.className = `todo-item ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;
    li.innerHTML += ` 
    <input type="checkbox" class="complete-checkbox">
    <span class="task-text">${task.text}</span>
    <button class="Edit-btn">Edit</button> 
    <button class="delete-btn">Delete</button> `;
    todoList.appendChild(li);

    attachEventListnner(li, task);
}

function attachEventListnner(li, task) {
    const checkbox = li.querySelector('.complete-checkbox');
    const editBtn = li.querySelector('.Edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');

    checkbox.addEventListener('change', () => toggleTaskCompletion(li, task));
    editBtn.addEventListener('click', () => editTask(li, task));
    deleteBtn.addEventListener('click', () => deleteTask(li, task));
}

function toggleTaskCompletion(li, task) {
    li.classList.toggle('completed');
    task.completed = !task.completed;
    saveTaskToLocalStorage(task);
}

function editTask(li, task) {
    const taskText = li.querySelector('.task-text');
    const newText = prompt('Edit your task:', task.text);
    if (newText !== null) {
        task.text = newText;
        taskText.textContent = newText;
        saveTaskToLocalStorage(task);
    }
}

function deleteTask(li, task) {
    const id = li.dataset.id;
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(t => t.id != id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    li.remove();
}

document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

function saveTaskToLocalStorage(task) {
    let oldtasks = getTasksFromLocalStorage();
    oldtasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(oldtasks));
}

function loadTasksFromLocalStorage() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTaskToDom(task));
}

loadTasksFromLocalStorage();

function getTasksFromLocalStorage() {
       let oldtasks = JSON.parse(localStorage.getItem('tasks')) || [];
         return oldtasks;
}



