import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  padding: 20px;
`;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputField = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

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

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
    setError(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      onLogin({ email, password });
      navigate("/tasks");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <FormSection>
        <h2>Login</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email:</Label>
            <InputField
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <InputField
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

export default Login;