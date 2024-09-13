import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical; /* Allow vertical resizing only */
`;

const SubmitButton = styled.button`
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
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
          required
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