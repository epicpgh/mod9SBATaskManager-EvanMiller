



function TaskItem({task, onDelete, toggleCompleted}){

return(

<div className="task-item border p-2 rounded shadow-md mb-2" >

<h2 className="text-lg font-bold">{task.title}</h2>
<h3 className="text-sm text-gray-500">{task.dueDate}</h3>
<h3 className='text-sm'>{task.description}</h3>
<h4 className='text-sm font-md'>{task.status}</h4>

<div className="flex gap-2">
<button onClick={() => toggleCompleted(task.id)}>
    {task.status === "pending" ? "Mark as Completed" : "Mark as Pending"}
    </button>


<button onClick={() => onDelete(task.id)} className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button> 
</div>
</div>
)}

export default TaskItem