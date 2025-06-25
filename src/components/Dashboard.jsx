import { useState } from "react";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          }
        : task
    );

    setTasks(updatedTasks);
    }

    return (
      <>
        <h1>Dashboard</h1>

        <TaskFilter />

        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      </>
    );
  
}
export default Dashboard;
