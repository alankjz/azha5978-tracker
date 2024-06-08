// DOM elements
let form = document.getElementById("wordForm");
let wordList = document.getElementById("wordList");
let tasks = [];

// Event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formElements = form.elements;
  
  const word = formElements.wordWord.value;
  const language = formElements.wordLanguage.value;
  const type = formElements.wordType.value;
  const definition = formElements.wordDefinition.value;
  const confidenceLevel = formElements.wordCL.value;
  
  addTask(word, language, type, definition, confidenceLevel);
  console.log(tasks);
});

// Function to add a task
function addTask(word, language, type, definition, confidenceLevel) {
  let newTask = {
    word: word,
    language: language,
    type: type,
    definition: definition,
    confidenceLevel: confidenceLevel,
    id: Date.now(),
    date: new Date().toISOString(),
  };
  
  tasks.push(newTask);
  saveTasksToLocalStorage();
  displayTask(newTask);
}

// Function to display a task
function displayTask(task) {
  let item = document.createElement("li");

  item.setAttribute("data-id", task.id);
  
  item.innerHTML = `<p><strong>${task.word}</strong><br>Language: ${task.language}<br>Type: ${task.type}<br>Definition: ${task.definition}<br>Confidence Level: ${task.confidenceLevel}</p>`;
  
  let delButton = document.createElement("button");
  delButton.classList.add("delete-button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event) {
    item.remove();
    tasks = tasks.filter(task => task.id !== parseInt(item.getAttribute("data-id")));
    saveTasksToLocalStorage();
    console.log(tasks);
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
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = storedTasks;
  tasks.forEach(displayTask);
  console.log('Tasks loaded from local storage:', tasks);
}

// Function to log the word
function logWord() {
  const word = document.querySelector('.search-input').value;
  if (word.trim() !== '') {
    document.getElementById('wordWord').value = word;
    document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Please enter a word to log.');
  }
}

// Attach event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  const logButton = document.querySelector('.log-button');
  logButton.addEventListener('click', logWord);

  // Load and display tasks from local storage on page load
  loadTasksFromLocalStorage();
});
