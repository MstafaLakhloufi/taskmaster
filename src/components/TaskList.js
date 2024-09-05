import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks = [], editTask, deleteTask }) {
  return (
    <div>
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Start by adding a new task!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              editTask={() => editTask(task)}
              deleteTask={() => deleteTask(task.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
