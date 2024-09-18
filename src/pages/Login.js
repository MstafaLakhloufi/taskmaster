import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Container for centering the form in the viewport
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  padding: 20px;
`;

// Section for styling the login form with background color, padding, and shadow
const FormSection = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 400px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

// Form styling for layout, using flexbox for vertical alignment
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// Input field styles for the email and password fields
const InputField = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// Label styles for input fields (email and password)
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

// Submit button styles with hover effect
const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

// Login component for handling user authentication
const Login = ({ onLogin }) => {
  // State for managing input field values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate(); // React Router hook for navigation

  // Reset input fields and error when the component mounts or re-renders
  useEffect(() => {
    setEmail("");
    setPassword("");
    setError(null);
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form from reloading the page

    // Validate that both email and password fields are filled
    if (email && password) {
      // Call the onLogin prop function (passed down from parent component) with email and password
      onLogin({ email, password });
      // Navigate to the "/tasks" page on successful login
      navigate("/tasks");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <FormSection>
        {/* Title for the login form */}
        <h2>Login</h2>
        {/* Display error message if error state is set */}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {/* Form element handling login submission */}
        <Form onSubmit={handleSubmit}>
          <div>
            {/* Email field with label and input */}
            <Label htmlFor="email">Email:</Label>
            <InputField
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              required // Input is required
            />
          </div>
          <div>
            {/* Password field with label and input */}
            <Label htmlFor="password">Password:</Label>
            <InputField
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              required // Input is required
            />
          </div>
          {/* Submit button to trigger form submission */}
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

// Export the Login component for use in other parts of the app
export default Login;