
import { useState } from "react";


function TaskForm({onAddTask}) {

    const [form, setForm] = useState({
        title: "",
        status: "",
        priority: "medium",
    })

    function handleChange(e){
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value,
        })  );

    function handleSubmit(e){
        e.preventDefault()
    }   

    const newTask ={
        id: Date.now().toString,


        title: form.title,
        status: "pending",
        priority: form.priority,

    }

    onAddTask(newTask)
    setForm({ title: "", priority: "medium" })

    return (

        <>
        
        <h2>Task Form</h2>
        <form onSubmit = {handleSubmit}>
            <input type="text" name = "title" value = {form.title} onChange ={handleChange} placeholder="Task Title" />
            <input type="date" name = "dueDate" value = {form.dueDate} />
            <input type = "text" name = "status" placeholder="Task Status" />
            <select name = "priority" onChange={handleChange} value={form.priority} id="Task Priority">
                <option value = "low">Low</option>
                <option value = "medium">Medium</option>
                <option value = "high">High</option>
        </select>
                <input type = "checkbox" name = "completed" />
                <button type = "submit">Add Task</button>
        </form>

        </>
       
    );
    }


export default TaskForm;