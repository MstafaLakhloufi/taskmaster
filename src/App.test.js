import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [currentUser, setCurrentUser] = useState(null); // Store current user info

  // ... (your existing task management functions: addTask, toggleComplete, deleteTask)

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
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser}/> 
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
      </div>
    </Router>
  );
};

export default App;