



function TaskItem({task, onDelete}){

return(

<>

<h2>{task.title}</h2>
<h3>{task.dueDate}</h3>
<h3>{task.descrition}</h3>
<h4>{task.status}</h4>
<button onClick={() => toggleCompleted(task.id)}>{task.status === "pending" ? "Mark as Completed" : "Mark as Pending"}</button>
<button onClick={() => onDelete(task.id)}>Delete</button> 
</>

)}

export default TaskItem