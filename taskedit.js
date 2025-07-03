// Get task ID from URL
const urlParams = new URLSearchParams(window.location.search);
const taskId = parseInt(urlParams.get("id"));

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Find task index in array
let taskIndex = tasks.findIndex(t => t.id === taskId);

// If task doesn't exist, redirect to list
if (taskIndex === -1) {
  alert("Task not found!");
  window.location.href = "task-list.html";
}

// Pre-fill form with existing task data
document.getElementById("editName").value = tasks[taskIndex].name;
document.getElementById("editDescription").value = tasks[taskIndex].description;
document.getElementById("editDueDate").value = tasks[taskIndex].dueDate;

// Handle form submission
document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get updated input values
  const updatedName = document.getElementById("editName").value.trim();
  const updatedDescription = document.getElementById("editDescription").value.trim();
  const updatedDueDate = document.getElementById("editDueDate").value;

  // Update task in array
  tasks[taskIndex].name = updatedName;
  tasks[taskIndex].description = updatedDescription;
  tasks[taskIndex].dueDate = updatedDueDate;

  // Save updated tasks to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Redirect to task list
  window.location.href = "taskshow.html";
});
