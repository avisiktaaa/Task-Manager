document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("taskName").value.trim();
  const description = document.getElementById("taskDescription").value.trim();
  const dueDate = document.getElementById("taskDueDate").value;

  if (!name || !description || !dueDate) {
    alert("Please fill in all fields.");
    return;
  }

  const task = {
    id: Date.now(),
    name,
    description,
    dueDate,
    completed: false
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("msg").textContent = "Task added successfully!";

  document.getElementById("taskForm").reset();

    window.location.href = "taskhome.html";

});
