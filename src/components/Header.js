import React from 'react'; // Importing React
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import styled from 'styled-components'; // Importing styled-components for styling

// Styled component for the header container
const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  width: 100%;
  padding: 10px 0;
  text-align: center;
`;

// Styled component for the navigation list
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
`;

// Styled component for navigation items
const NavItem = styled.li`
  display: inline;
  margin-right: 20px;
`;

// Styled component for navigation links
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ isLoggedIn, onLogout, currentUser }) => {
  return (
    <HeaderContainer>
      <h1>Task Master</h1> {/* Main title of the application */}
      <nav>
        <NavList>
          <NavItem><NavLink to="/">Home</NavLink></NavItem> {/* Link to the home page */}
          {!isLoggedIn ? (
            // Display login and signup links if not logged in
            <>
              <NavItem><NavLink to="/login">Login</NavLink></NavItem>
              <NavItem><NavLink to="/signup">Signup</NavLink></NavItem>
            </>
          ) : (
            // Display welcome message and logout button if logged in
            <>
              <NavItem>Welcome, {currentUser?.username || currentUser?.email}!</NavItem>
              <NavItem><button onClick={onLogout}>Logout</button></NavItem>
            </>
          )}
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;