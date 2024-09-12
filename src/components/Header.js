import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  width: 100%;
  padding: 10px 0;
  text-align: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
`;

const NavItem = styled.li`
  display: inline;
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ isLoggedIn, onLogout, currentUser }) => {
  return (
    <HeaderContainer>
      <h1>Task Master</h1>
      <nav>
        <NavList>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          {!isLoggedIn ? (
            <>
              <NavItem><NavLink to="/login">Login</NavLink></NavItem>
              <NavItem><NavLink to="/signup">Signup</NavLink></NavItem>
            </>
          ) : (
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