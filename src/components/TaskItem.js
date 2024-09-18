import React from 'react'; // Importing React
import styled from 'styled-components'; // Importing styled-components for styling

// Styled component for individual task items
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

// TaskItem component definition
const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <TaskItemContainer className={task.completed ? 'completed' : ''}>
      {/* Checkbox to mark task as complete/incomplete */}
      <input 
        type="checkbox" 
        checked={task.completed} // Checked state based on task completion
        onChange={() => onToggleComplete(task.id)} // Toggle task completion when checkbox changes
      />
      {/* Display task title */}
      <h3>{task.title}</h3>
      {/* Display task description */}
      <p>{task.description}</p>
      {/* Button to delete the task */}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </TaskItemContainer>
  );
};

export default TaskItem;