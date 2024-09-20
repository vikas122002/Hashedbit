import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to handle task input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Function to add task
  const addTask = () => {
    if (task.trim() !== '') {
      const newTasks = [...tasks, task];
      setTasks(newTasks.sort()); // Sorting tasks in ascending order
      setTask(''); // Clear input field
    }
  };

  // Function to delete task
  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((t) => t !== taskToDelete);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(t)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
