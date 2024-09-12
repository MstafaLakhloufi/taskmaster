import React from 'react';
import styled from 'styled-components';

const TaskItemContainer = styled.li`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &.completed {
    text-decoration: line-through;
    color: #aaa;
  }
`;

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <TaskItemContainer className={task.completed ? 'completed' : ''}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggleComplete(task.id)} 
      />
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </TaskItemContainer>
  );
};

export default TaskItem;