const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const total = tasks.length;
const completed = tasks.filter(task => task.completed).length;
const pending = total - completed;

const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

document.getElementById("totalTasks").textContent = total;
document.getElementById("completedTasks").textContent = completed;
document.getElementById("pendingTasks").textContent = pending;

const fill = document.getElementById("progressFill");
fill.style.width = percent + "%";
fill.textContent = percent + "%";

// Milestone messages
const milestoneBox = document.getElementById("milestones");

if (completed === 0) {
  milestoneBox.textContent = "Start working on your first task!";
} else if (completed === 1) {
  milestoneBox.textContent = "🎯 Great! You finished your first task.";
} else if (percent >= 50 && percent < 100) {
  milestoneBox.textContent = "✅ You're halfway there. Keep going!";
} else if (percent === 100 && total > 0) {
  milestoneBox.textContent = "🏁 All tasks completed. Amazing job!";
} else {
  milestoneBox.textContent = "Keep up the good work!";
}
