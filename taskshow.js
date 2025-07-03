const taskListContainer = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskListContainer.innerHTML = "";

  if (tasks.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    if (task.completed) taskCard.classList.add("completed");

    taskCard.innerHTML = `
      <h3>${task.name}</h3>
      <p><strong>Description:</strong> ${task.description}</p>
      <p><strong>Due:</strong> ${task.dueDate}</p>
      <div class="task-actions">
        <button class="complete-btn" data-id="${task.id}">${task.completed ? "Undo" : "Complete"}</button>
        <button class="edit-btn" data-id="${task.id}">Edit</button>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
      </div>
    `;

    taskListContainer.appendChild(taskCard);
  });

  attachButtonEvents();
}

function attachButtonEvents() {
  document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"));
      const task = tasks.find(t => t.id === id);
      task.completed = !task.completed;
      saveAndRender();
    });
  });

  document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"));
      tasks = tasks.filter(t => t.id !== id);
      saveAndRender();
    });
  });

  document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      window.location.href = `taskedit.html?id=${id}`; 
    });
  });
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
