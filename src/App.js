import React, { useState } from 'react'; // Importing React and useState for state management
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importing Router, Routes, and Route for navigation
import styled, { createGlobalStyle } from 'styled-components'; // Importing styled-components for styling
import Header from './components/Header'; // Importing the Header component
import TaskList from './components/TaskList'; // Importing the TaskList component
import AddTaskForm from './components/AddTaskForm'; // Importing the AddTaskForm component
import Home from './pages/Home'; // Importing the Home page
import Login from './pages/Login'; // Importing the Login page
import Signup from './pages/Signup'; // Importing the Signup page

// Global styles applied throughout the app
const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

// Styled container for the entire app's layout
const AppContainer = styled.div`
  font-family: sans-serif;
  background-image: linear-gradient(to right, #74ebd5, #acb6e5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to check if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // State to track the current logged-in user
  const [currentUser, setCurrentUser] = useState(null);

  // Function to add a new task to the task list
  const addTask = (newTask) => {
    // Set a new task, assigning a unique ID using Date.now() and marking it as incomplete
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  // Function to toggle the completed status of a task
  const toggleComplete = (taskId) => {
    // Map through the tasks and flip the completed status of the task with the matching ID
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task from the list
  const deleteTask = (taskId) => {
    // Filter out the task with the given taskId from the task list
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to handle user login
  const handleLogin = (user) => {
    // Simulating a successful login, typically you'd make an API call here
    setIsLoggedIn(true); // Set logged in state to true
    setCurrentUser(user); // Store the logged-in user in state
  };

  // Function to handle user signup
  const handleSignup = (newUser) => {
    // Simulate a signup, typically you'd make an API call to create a new user here
    console.log("New user signed up:", newUser); // Log the new user information
    // Optionally, you could redirect the user to the login page after signup
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged in state to false
    setCurrentUser(null); // Clear the current user information
  };

  return (
    <Router>
      {/* Applying global styles */}
      <GlobalStyle />
      
      {/* Main app container for layout */}
      <AppContainer>
        {/* Header component with logout functionality and user info */}
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />
        
        {/* Defining app routes using react-router-dom */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the Login page with login functionality */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          {/* Route for the Signup page with signup functionality */}
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          
          {/* Route for the Tasks page, protected by login status */}
          <Route 
            path="/tasks" 
            element={
              isLoggedIn ? ( 
                // If logged in, show AddTaskForm and TaskList
                <>
                  <AddTaskForm onAddTask={addTask} />
                  <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />
                </>
              ) : (
                // If not logged in, redirect to login page
                <Navigate to="/login" replace /> 
              )
            } 
          />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;