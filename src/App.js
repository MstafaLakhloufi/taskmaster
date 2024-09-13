import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const AppContainer = styled.div`
  font-family: sans-serif;
  background-image: linear-gradient(to right, #74ebd5, #acb6e5); /* Example gradient */
  min-height: 100vh;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 20px;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleLogin = (user) => {
    // Here you would typically make an API call to authenticate the user
    // For now, let's just simulate a successful login
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  const handleSignup = (newUser) => {
    // Here you would typically make an API call to create a new user
    // For now, let's just log the new user data
    console.log("New user signed up:", newUser);
    // You might want to redirect to the login page or display a success message here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route 
            path="/tasks" 
            element={isLoggedIn ? ( 
              <>
                <AddTaskForm onAddTask={addTask} />
                <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />
              </>
            ) : (
              <Navigate to="/login" replace /> 
            )}
          />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;