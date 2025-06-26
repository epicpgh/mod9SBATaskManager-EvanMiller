import { useState, useEffect } from "react";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { loadTasksFromStorage } from "./utils/taskUtils";
import {filterTasks} from "./utils/taskUtils";
function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });
  const filteredTasks = filterTasks(tasks, filters);

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

    
  }

  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
  
    return (
      <>
        <h1>Dashboard</h1>

        <TaskFilter onFilterChange={setFilters}/>

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
