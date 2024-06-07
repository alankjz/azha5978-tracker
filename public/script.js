// Variables to keep track of form and task list elements
const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Event listener for form submission
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get form elements object
  const formElements = form.elements;
  
  // Get values from form elements
  const word = formElements.wordWord.value;
  const language = formElements.wordLanguage.value;
  const type = formElements.wordType.value;
  const definition = formElements.wordDefintion.value;
  const confidenceLevel = formElements.wordCL.value;
  
  // Call addTask function with form values
  addTask(word, language, type, definition, confidenceLevel);
  
  // Log the updated task list array
  console.log(taskList);
});

// Function to add task to task list
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
  
  taskList.push(newTask);

  displayTask(newTask);
}

// Function to display task details on the page
function displayTask(task) {
    // Create a new list item element
    let item = document.createElement("li");

    // Set data-id attribute to keep track of task ID
  item.setAttribute("data-id", task.id);
    
    // Populate the list item with task data using template literals
    item.innerHTML = `<p><strong>${task.word}</strong><br>Language: ${task.language}<br>Type: $${task.type}/hr<br>Definition: ${task.definition} hours<br>Confidence Level: ${task.confidenceLevel}</p>`;
    
     // Setup delete button DOM element
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

   // Listen for when the delete button is clicked
   delButton.addEventListener("click", function(event) {
    // Remove the task item from the page when button clicked
    item.remove();
    
    // Filter out the element corresponding with the list item and store the new task list
    taskList = taskList.filter(task => task.id !== parseInt(item.getAttribute("data-id")));
    
    // Log the updated task list array
    console.log(taskList);


  
  });

    // Append the list item to the task list
    taskList.appendChild(item);
    
    // Clear the form inputs
    form.reset();

}