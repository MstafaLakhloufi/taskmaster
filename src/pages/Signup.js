import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Container for centering the form vertically and horizontally in the viewport
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  padding: 20px;
`;

// Form section with background, padding, and box shadow for styling the form container
const FormSection = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 400px;

  // Responsive design for small screens
  @media (max-width: 768px) {
    width: 90%;
  }
`;

// Form element for layout; using flexbox to space inputs vertically
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px; // Space between the form elements
`;

// Styled input field for username, email, and password inputs
const InputField = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// Label styling for form inputs
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

// Styled submit button with color and hover effects
const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3e8e41;
  }
`;

// Error message styling for form validation feedback
const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

// Signup component that handles user signup form functionality
const Signup = ({ onSignup }) => {
  // State variables to store form inputs: username, email, password, and error message
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(null); // State for form error messages
  const navigate = useNavigate(); // React Router's hook for navigation

  // useEffect hook to reset form fields and error message when component mounts
  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword("");
    setError(null);
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Check if all fields are filled
    if (username && email && password) {
      // If valid, call onSignup prop function (passed from parent) with the user details
      onSignup({ username, email, password });

      // Navigate to the login page after successful signup
      navigate("/login");
    } else {
      // If not valid, set error message
      setError("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <FormSection>
        {/* Title for the signup form */}
        <h2>Signup</h2>

        {/* Display error message if there is an error */}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {/* Form element handling the signup */}
        <Form onSubmit={handleSubmit}>
          <div>
            {/* Username field */}
            <Label htmlFor="username">Username:</Label>
            <InputField
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state on change
              required // Input is required
            />
          </div>
          <div>
            {/* Email field */}
            <Label htmlFor="email">Email:</Label>
            <InputField
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              required // Input is required
            />
          </div>
          <div>
            {/* Password field */}
            <Label htmlFor="password">Password:</Label>
            <InputField
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
              required // Input is required
            />
          </div>
          {/* Submit button */}
          <SubmitButton type="submit">Signup</SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

// Export Signup component for use in other parts of the app
export default Signup;
