import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const NavList = styled.ul`
  display: flex; /* Use flexbox to align items horizontally */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo>Disaster</Logo>
      <NavList>
        <NavItem><a href="/">Home</a></NavItem>
        <NavItem><a href="/about">About</a></NavItem>
        <NavItem><a href="/services">Services</a></NavItem>
        <NavItem><a href="/contact">Contact</a></NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
