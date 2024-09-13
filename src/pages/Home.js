import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const GetStartedButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
`;

const CoverImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg'); 
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const FeatureSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const FeatureCard = styled.div`
  width: 30%;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 45%;
    margin-bottom: 20px;
  }
`;

const FeatureIcon = styled.span`
  font-size: 2rem; 
  margin-bottom: 10px;
`;

const AboutSection = styled.section`
  text-align: center;
`;

const TeamMemberList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const TeamMemberItem = styled.li`
  margin: 0 20px;
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const SocialLink = styled.a`
  /* Style your social links here */
`;

const Home = () => {
  return (
    <HomeContainer>
      <CoverImage />

      <Link to="/login"> 
        <GetStartedButton>Get Started</GetStartedButton>
      </Link> 

      <Title>Task Master</Title> 
      <Description>Organize your tasks, boost your productivity</Description> 

      {/* Feature Section */}
      <FeatureSection>
        <FeatureCard>
          <FeatureIcon>✅</FeatureIcon> 
          <h3>Create and Manage Tasks</h3>
          <p>Easily add, edit, and delete tasks to stay organized.</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>📅</FeatureIcon> 
          <h3>Mark Tasks as Complete</h3>
          <p>Track your progress by marking tasks as complete.</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon> 
          <h3>User Authentication</h3>
          <p>Securely log in and manage your personal task list.</p>
        </FeatureCard>
      </FeatureSection>

      {/* About Section */}
      <AboutSection>
        <h2>About the Project</h2>
        <p>
          This Task Manager project was born out of our desire to create a simple yet effective tool to help individuals stay on top of their tasks and achieve their goals. 
          We wanted to build an intuitive and user-friendly application that makes task management a breeze. 
          This is a Portfolio Project for Holberton School, showcasing our skills in React, routing, and state management.
        </p>

        <h3>Meet the Team</h3>
        <TeamMemberList>
          <TeamMemberItem>
            <TeamMemberImage src="https://avatars.githubusercontent.com/u/133282548?v=4" alt="Salmane's Profile" />
            <h4>Salmane Ben Yakhlaf</h4>
            <SocialLink href="https://www.linkedin.com/in/salmane-b-a20787158/" target="_blank">LinkedIn</SocialLink> |
            <SocialLink href="https://github.com/salmaneben" target="_blank">GitHub</SocialLink> |
            <SocialLink href="https://x.com/Salmanemks" target="_blank">X</SocialLink>
          </TeamMemberItem>
          <TeamMemberItem>
            <TeamMemberImage src="https://avatars.githubusercontent.com/u/111161472?v=4" alt="El Mustapha's Profile" />
            <h4>El Mustapha Lakhloufi</h4>
            <SocialLink href="https://www.linkedin.com/in/el-mustapha-lakhloufi-3278bb207/" target="_blank">LinkedIn</SocialLink> | 
            <SocialLink href="https://github.com/MstafaLakhloufi" target="_blank">GitHub</SocialLink> | 
            <SocialLink href="https://x.com/EL_Lakhloufi" target="_blank">X</SocialLink> 
          </TeamMemberItem>
        </TeamMemberList>

        <a href="https://github.com/MstafaLakhloufi/taskmaster" target="_blank">View on GitHub</a>
      </AboutSection>

    </HomeContainer>
  );
};

export default Home;