



export function filterTasks(tasks, searchTerm) {

    const {status, priority, searchTerm} = filters;

    return tasks.filter((task) => {
          const matchStatus = !status || task.status === status;
const matchPriority = !priority || task.priority === priority;
const matchSearch  = !searchTerm || task.searchTerm.toLowerCase() === searchTerm.toLowerCase();

return matchStatus && matchPriority && matchSearch;
    });}


export function sortTasks(tasks, sortBy) {
    const sortTasks = { dueDate, priority } = sortTasks;

    if (sortBy === 'dueDate'){
        return[...tasks].sort((a, b)=> new Date(a.dueDate) - new Date(b.dueDate))

        }else if (sortBy === 'priority'){
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            return [...tasks].sort((a, b)=> priorityOrder(a.priority) - priorityOrder(b.priority))}
return tasks
        }
        
  export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
export function saveTasksToStorage(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasksFromStorage() {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
}