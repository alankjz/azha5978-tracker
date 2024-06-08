let form = document.getElementById("wordForm");
let wordList = document.getElementById("wordList");
let tasks = [];

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

function addTask(word, language, type, definition, confidenceLevel) {
  let newTask = {
    word: word,
    language: language,
    type : type,
    definition : definition,
    confidenceLevel : confidenceLevel,
    id : Date.now(),
    date: new Date().toISOString(),
  };
  
  tasks.push(newTask);

  displayTask(newTask);
}

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

    console.log(tasks);

  });

    wordList.appendChild(item);
    
    form.reset();
}

function saveTasksToLocalStorage(tasks) {
  // Get the existing tasks from local storage
  const newTask = JSON.parse(localStorage.getItem('newTasks')) || [];
  // Add new task to the array
  newTask.push(tasks);
  // Save back to local storage
  localStorage.setItem('newTask', JSON.stringify(newTask));
}

// Load tasks and display them
function loadTasksFromLocalStorage() {
  const newTask = JSON.parse(localStorage.getItem('newTask')) || [];
  newTask.forEach(tasks => {
      console.log(tasks); // Here you would typically create a list item for each task and display it in the UI
  });
}


saveTasksToLocalStorage('test');
loadTasksFromLocalStorage();


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
});

