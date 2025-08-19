import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("All");

  // Add Task
  const addTask = () => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  // Toggle Task Completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filtered Tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true; // All
  });

  return (
    <div style={styles.container}>
      <h2>📝 To-Do List</h2>

      {/* Input */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={taskText}
          placeholder="Add a new task..."
          onChange={(e) => setTaskText(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add</button>
      </div>

      {/* Filter Buttons */}
      <div style={styles.filterContainer}>
        {["All", "Completed", "Pending"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.filterButton,
              backgroundColor: filter === f ? "#0d6efd" : "#ddd",
              color: filter === f ? "#fff" : "#000",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul style={styles.taskList}>
        {filteredTasks.length === 0 && <li>No tasks found</li>}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              ...styles.taskItem,
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={styles.taskText}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Simple inline styles
const styles = {
  container: { width: "350px", margin: "auto", textAlign: "center", padding: "20px" },
  inputContainer: { display: "flex", gap: "8px", marginBottom: "10px" },
  input: { flex: 1, padding: "5px" },
  addButton: { padding: "5px 10px", cursor: "pointer" },
  filterContainer: { marginBottom: "10px" },
  filterButton: { margin: "0 5px", padding: "5px 10px", cursor: "pointer", border: "none" },
  taskList: { listStyle: "none", padding: 0 },
  taskItem: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5px" },
  taskText: { flex: 1, marginLeft: "8px" },
  deleteButton: { background: "transparent", border: "none", cursor: "pointer", fontSize: "14px" },
};
