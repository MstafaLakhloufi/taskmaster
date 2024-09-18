import React from 'react'; // Importing React
import TaskItem from './TaskItem'; // Importing TaskItem component
import styled from 'styled-components'; // Importing styled-components for styling

// Styled component for the task list container
const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%;
`;

// TaskList component definition
const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <TaskListContainer>
      {/* Map through the tasks array and render a TaskItem for each task */}
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} // Unique key for each TaskItem, helps React efficiently update and render components
          task={task} // Pass the current task as a prop to TaskItem
          onToggleComplete={onToggleComplete} // Pass the function to handle toggling task completion
          onDeleteTask={onDeleteTask} // Pass the function to handle deleting tasks
        />
      ))}
    </TaskListContainer>
  );
};

export default TaskList;