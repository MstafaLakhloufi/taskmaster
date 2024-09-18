import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons';

// Container for the entire home page layout
const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

// Title component with custom font size and margin
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;
// Button styling for "Get Started" with a background color and padding
const GetStartedButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
`;

// Cover image component with background image properties
const CoverImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg'); 
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

// Section for displaying features with flexbox for layout
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

// Icon style for the feature section
const FeatureIcon = styled.span`
  font-size: 2rem; 
  margin-bottom: 10px;
`;

const AboutSection = styled.section`
  text-align: center;
`;

// Team members' list with flexbox for layout
const TeamMemberList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

// Individual team member styling with margin
const TeamMemberItem = styled.li`
  margin: 0 20px;
  text-align: center;
`;

// Image styling for team member's profile pictures
const TeamMemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;
// Container for social media links
const SocialLinksContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 20px;
`;

// Individual social media link styles
const SocialLink = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #007bff;
    color: white;
  }

  &:active {
    background-color: #0056b3;
    color: white;
  }
`;

// Placeholder for social media links
//const SocialLink = styled.a`
  /* Style your social links here */
//`;

const Home = () => {
  return (
    <HomeContainer>
      {/* Cover image at the top of the page */}
      <CoverImage />

      <Link to="/login"> 
        <GetStartedButton>Get Started</GetStartedButton>
      </Link> 

      <Title>Task Master</Title> 
      <Description>Organize your tasks, boost your productivity</Description> 

      {/* Feature Section: Displays the main features of the app */}
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

      {/* About Section: Describes the project and its purpose */}
      <AboutSection>
        <h2>About the Project</h2>
        <p>
          This Task Manager project was born out of our desire to create a simple yet effective tool to help individuals stay on top of their tasks and achieve their goals. 
          We wanted to build an intuitive and user-friendly application that makes task management a breeze. 
          This is a Portfolio Project for Holberton School, showcasing our skills in React, routing, and state management.
        </p>
      {/* Displaying team members with profile pictures and social links */}
        <h3>Meet the Team</h3>
        <TeamMemberList>
          <TeamMemberItem>
          <TeamMemberImage src="https://avatars.githubusercontent.com/u/133282548?v=4" alt="Salmane's Profile" />
            <h4>Salmane Ben Yakhlaf</h4>
            <SocialLink href="https://www.linkedin.com/in/salmane-b-a20787158/" target="_blank" aria-label="Salmane's LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink> |
            <SocialLink href="https://github.com/salmaneben" target="_blank" aria-label="Salmane's GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink> |
            <SocialLink href="https://x.com/Salmanemks" target="_blank" aria-label="Salmane's X">
            <FontAwesomeIcon icon={faXTwitter} />
            </SocialLink>
          </TeamMemberItem>
          <TeamMemberItem>
            <TeamMemberImage src="https://avatars.githubusercontent.com/u/111161472?v=4" alt="El Mustapha's Profile" />
            <h4>El Mustapha Lakhloufi</h4>
            <SocialLink href="https://www.linkedin.com/in/el-mustapha-lakhloufi-3278bb207/" target="_blank" aria-label="El Mustapha's LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink> | 
            <SocialLink href="https://github.com/MstafaLakhloufi" target="_blank" aria-label="El Mustapha's GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink> | 
            <SocialLink href="https://x.com/EL_Lakhloufi" target="_blank" aria-label="El Mustapha's X">
            <FontAwesomeIcon icon={faXTwitter} />
            </SocialLink> 
          </TeamMemberItem>
        </TeamMemberList>

        <a href="https://github.com/MstafaLakhloufi/taskmaster" target="_blank">View on GitHub</a>
      </AboutSection>

    </HomeContainer>
  );
};

// Export the Home component to be used in other parts of the app
export default Home;