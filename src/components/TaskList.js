import React from 'react';
import TaskItem from './TaskItem';
import styled from 'styled-components';

const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%; /* Adjust as needed */
`;

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </TaskListContainer>
  );
};

export default TaskList;