
import { useState } from "react";


function TaskForm({ onAddTask }) {
  const [form, setForm] = useState({
    title: "",
    dueDate: "",
    priority: "medium",
  });

      function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
    function handleSubmit(e){
        e.preventDefault()
        if (!form.title.trim()) {
            alert("Task title is required");
            return;
        }
      

    const newTask ={
        id: Date.now().toString(),


        title: form.title,
        dueDate: form.dueDate,
        status: "pending",
        priority: form.priority,

        completed: false,

    }

    onAddTask(newTask);
    setForm({ title: "", dueDate: "", priority: "medium" });
}

    return (

        <>
        
        <h2>Task Form</h2>
        <form onSubmit = {handleSubmit} className="flex flex-col gap-2 w-full max-w-md">
            <input type="text" 
            name = "title" 
            value = {form.title} 
            onChange ={handleChange} 
            placeholder="Task Title" />
            <input type="date" 
            name = "dueDate" 
            value = {form.dueDate}
            onChange = {handleChange}
            className="border p-2 rounded" />

            <select name = "priority" 
            onChange={handleChange} 
            value={form.priority}>
                <option value = "low">Low</option>
                <option value = "medium">Medium</option>
                <option value = "high">High</option>
        </select>
                <input type = "checkbox"
                 name = "completed" 
                 className='border p-2 rounded'/>
                <button type = "submit">Add Task</button>
        </form>

        </>
       
    );
    }


export default TaskForm;