import React, { useState } from 'react'; // Importing React and useState for state management
import styled from 'styled-components';  // Importing styled-components for styling

// Styled component for the form container
const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Styled component for input fields
const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

// Styled component for textarea
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical;
`;

// Styled component for the submit button
const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// AddTaskForm component definition
const AddTaskForm = ({ onAddTask }) => {
  // State to hold the task title
  const [title, setTitle] = useState('');
  // State to hold the task description
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    onAddTask({ title, description }); // Calling the onAddTask function passed as prop
    setTitle(''); // Clearing the title input field
    setDescription(''); // Clearing the description input field
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <InputField 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          required // Making this field required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <TextArea 
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <SubmitButton type="submit">Add Task</SubmitButton>
    </FormContainer>
  );
};

export default AddTaskForm;