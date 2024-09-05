import React from 'react';

function TaskItem({ task, editTask, deleteTask }) {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={editTask}>Edit</button>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TaskItem;
