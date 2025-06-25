
import TaskItem from "./TaskItems";


function TaskList(tasks, onDelete, toggleCompleted) {
  return (
    <>
      <h2>Task List</h2>

      {tasks.map({tasks}) => ({

      <TaskItem key={tasks.id} task={tasks} onDelete={onDelete} toggleCompleted={toggleCompleted} />
 
        )
    }
   </>

    );
export default TaskList
