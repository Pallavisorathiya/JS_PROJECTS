let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editTaskId = null;

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleForm(forceShow = null) {
  let formContainer = document.getElementById("taskFormContainer");
  if (forceShow === true || (forceShow === null && formContainer.classList.contains("d-none"))) {
    formContainer.classList.remove("d-none");
  } else {
    formContainer.classList.add("d-none");
  }
}

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  let filter = document.getElementById("priorityFilter").value;
  let search = document.getElementById("searchInput").value.toLowerCase();

  console.clear();
  console.log(" Current Filter:", filter);
  console.log(" Current Search:", search);

  let filteredTasks = tasks.filter(task => {
    let matchesPriority = (filter === "all" || task.priority === filter);
    let matchesSearch = task.title.toLowerCase().includes(search);
    return matchesPriority && matchesSearch;
  });

  console.log(" Matching Tasks:");
  filteredTasks.forEach(task => console.log(task));

  filteredTasks.forEach(task => {
    let card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card task-card ${task.priority}">
        <div class="card-body">
          <h5 class="card-title">${task.title}</h5>
          <p class="card-text">${task.description || "No Description"}</p>
          <p><strong>Due:</strong> ${task.dueDate}</p>
          <p><strong>Priority:</strong> ${task.priority}</p>
          <div class="d-flex justify-content-end gap-2">
            <button class="btn btn-sm btn-warning" onclick="editTask(${task.id})">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">Delete</button>
          </div>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

function addOrUpdateTask(e) {
  e.preventDefault();

  let title = document.getElementById("title").value.trim();
  let description = document.getElementById("description").value.trim();
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.getElementById("priority").value;

  if (!title || !dueDate) {
    alert("Title and Due Date are required!");
    return;
  }

  if (editTaskId !== null) {
    let index = tasks.findIndex(t => t.id === editTaskId);
    if (index > -1) {
      tasks[index] = { id: editTaskId, title, description, dueDate, priority };
      console.log(" Task Edited:", tasks[index]);
    }
    editTaskId = null;
  } else {
    let newTask = { id: Date.now(), title, description, dueDate, priority };
    tasks.push(newTask);
    console.log(" Task Added:", newTask);
  }

  saveTasks();
  displayTasks();
  document.getElementById("taskForm").reset();
  toggleForm(false);
}

function deleteTask(id) {
  console.log(" Task Deleted, ID:", id);
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  displayTasks();
}

function editTask(id) {
  let task = tasks.find(t => t.id === id);
  if (!task) return;

  console.log(" Editing Task:", task);
document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;
editTaskId = id;
  toggleForm(true);
}
document.getElementById("taskForm").addEventListener("submit", addOrUpdateTask);
document.getElementById("toggleFormBtn").addEventListener("click", () => toggleForm());
document.getElementById("priorityFilter").addEventListener("change", displayTasks);
document.getElementById("searchInput").addEventListener("input", displayTasks);
displayTasks();
