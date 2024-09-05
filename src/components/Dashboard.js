import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import EditTask from './EditTask';

function Dashboard({ user }) {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/tasks', {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError('Could not load tasks. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchTasks();
    }
  }, [user]);

  const addTask = async (task) => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(task),
      });
      
      // Check for non-OK response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add task');
      }

      const newTask = await response.json();
      setTasks(prevTasks => [...prevTasks, newTask]);  // Update tasks state
    } catch (error) {
      console.error('Error adding task:', error);
      setError('Could not add task. Please try again.');
    }
  };

  // Other functions for updating and deleting tasks remain the same

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading tasks...</p>
      ) : error ? (
        <p>{error}</p>
      ) : editingTask ? (
        <EditTask task={editingTask} onUpdateTask={updateTask} onCancel={() => setEditingTask(null)} />
      ) : (
        <>
          <AddTask addTask={addTask} />
          <TaskList tasks={tasks} editTask={setEditingTask} deleteTask={deleteTask} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
