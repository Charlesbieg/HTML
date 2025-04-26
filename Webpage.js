const taskInput = document.getElementById('taskText');
const taskList = document.getElementById('taskList');
const themeToggle = document.querySelector('.theme-toggle');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = '';
    updateStorage();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateStorage();
}

function updateStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
});

// Initialize
renderTasks();
