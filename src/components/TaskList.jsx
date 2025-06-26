
import TaskItem from "./TaskItems";


function TaskList({tasks, onDelete, toggleCompleted}) {
  return (
    <div className="task-list">
      <h2 className='text-lg font-bold mb-2'>Task List</h2>
{tasksks.length === 0 ? (
        <p className='text-gray-500'>No tasks available</p>
      ) : (
        <ul className='list-none p-0'>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

   