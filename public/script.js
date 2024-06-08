// DOM elements
let form = document.getElementById("wordForm"); // Selecting the form element
let wordList = document.getElementById("wordList"); // Selecting the list where words will be displayed
let tasks = []; // Array to store logged words

// Event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Preventing default form submission behavior
  
  // Extracting values from form fields
  const formElements = form.elements;
  const word = formElements.wordWord.value;
  const language = formElements.wordLanguage.value;
  const type = formElements.wordType.value;
  const definition = formElements.wordDefinition.value;
  const confidenceLevel = formElements.wordCL.value;
  
  // Adding the word to the word bank
  addTask(word, language, type, definition, confidenceLevel);
});

// Function to add a word to the word bank
function addTask(word, language, type, definition, confidenceLevel) {
  // Creating a new task object
  let newTask = {
    word: word,
    language: language,
    type: type,
    definition: definition,
    confidenceLevel: confidenceLevel,
    id: Date.now(), // Generating unique ID based on current timestamp
    date: new Date().toISOString(), // Recording the date of entry
  };
  
  // Adding the task to the tasks array
  tasks.push(newTask);
  saveTasksToLocalStorage(); // Saving tasks to local storage
  displayTask(newTask); // Displaying the newly added task
}

// Function to display a word in the word bank
function displayTask(task) {
  let item = document.createElement("li"); // Creating a new list item
  
  item.setAttribute("data-id", task.id); // Setting data attribute for identification
  
  // Populating the list item with word details
  item.innerHTML = `<p><strong>${task.word}</strong><br>Language: ${task.language}<br>Type: ${task.type}<br>Definition: ${task.definition}<br>Confidence Level: ${task.confidenceLevel}</p>`;
  
  // Creating and adding delete button for each word
  let delButton = document.createElement("button");
  delButton.classList.add("delete-button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  // Event listener for delete button click
  delButton.addEventListener("click", function(event) {
    item.remove(); // Removing the word from display
    tasks = tasks.filter(task => task.id !== parseInt(item.getAttribute("data-id"))); // Removing the word from tasks array
    saveTasksToLocalStorage(); // Saving updated tasks to local storage
  });

  wordList.appendChild(item); // Adding the list item to the word list
  
  form.reset(); // Resetting the form after word submission
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Storing tasks array in local storage
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []; // Retrieving tasks from local storage
  tasks = storedTasks;
  tasks.forEach(displayTask); // Displaying each task from local storage
}

// Function to log the word from search box
function logWord() {
  const word = document.querySelector('.search-input').value;
  if (word.trim() !== '') {
    document.getElementById('wordWord').value = word; // Setting the value of word input field
    document.getElementById('container').scrollIntoView({ behavior: 'smooth' }); // Scrolling to the word entry form
  } else {
    alert('Please enter a word to log.'); // Alerting user if no word is entered
  }
}

// Event listener for log button click
document.addEventListener('DOMContentLoaded', function() {
  const logButton = document.querySelector('.log-button');
  logButton.addEventListener('click', logWord);

  // Load and display tasks from local storage on page load
  loadTasksFromLocalStorage();
});

