// src/components/AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{padding:"7px", paddingLeft:"62px"}}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" style={{backgroundColor:"#34aeeb", marginLeft:"1em", borderRadius:"15px"}}>Add</button>
    </form>
  );
};

export default AddTodo;
