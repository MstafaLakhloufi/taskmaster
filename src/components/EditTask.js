import React, { useState } from 'react';

const EditTask = ({ task, onUpdateTask, onCancel }) => {
  const [editedTask, setEditedTask] = useState(task);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTask.text.trim() === '') {
      setError('Task text cannot be empty.');
      return;
    }
    onUpdateTask(editedTask);
    setError('');
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editedTask.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default EditTask;
