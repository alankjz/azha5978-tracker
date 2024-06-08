// DOM elements
const form = document.getElementById("wordForm");
const wordList = document.getElementById("wordList");
let tasks = {};

// Event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const { word, language, type, definition, confidenceLevel } = form.elements;
  const newTask = {
    word: word.value,
    language: language.value,
    type: type.value,
    definition: definition.value,
    confidenceLevel: confidenceLevel.value,
    id: Date.now(),
    date: new Date().toISOString(),
  };
  addTask(newTask);
  console.log(tasks);
});

// Function to add a task
function addTask(task) {
  tasks[task.word] = task;
  saveTaskToLocalStorage(task);
  displayTask(task);
}

// Function to display a task
function displayTask(task) {
  const item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = `
    <p>
      <strong>${task.word}</strong><br>
      Language: ${task.language}<br>
      Type: ${task.type}<br>
      Definition: ${task.definition}<br>
      Confidence Level: ${task.confidenceLevel}
    </p>
  `;

  const delButton = document.createElement("button");
  delButton.classList.add("delete-button");
  delButton.textContent = "Delete";
  item.appendChild(delButton);

  // Event listener for delete button
  delButton.addEventListener("click", function() {
    item.remove();
    delete tasks[task.word];
    saveTasksToLocalStorage();
    console.log('Task deleted. Updated tasks:', tasks);
  });

  wordList.appendChild(item);
  form.reset();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log('Tasks saved to local storage:', tasks);
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {};
  tasks = storedTasks;
  Object.values(tasks).forEach(displayTask);
  console.log('Tasks loaded from local storage:', tasks);
}

// Function to log the word
function logWord() {
  const wordInput = document.querySelector('.search-input').value;
  if (wordInput.trim() !== '') {
    document.getElementById('wordWord').value = wordInput;
    document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Please enter a word to log.');
  }
}

// Attach event listener to the log button
document.addEventListener('DOMContentLoaded', function() {
  const logButton = document.querySelector('.log-button');
  logButton.addEventListener('click', logWord);

  // Load and display tasks from local storage on page load
  loadTasksFromLocalStorage();
});
