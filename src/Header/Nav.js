import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Nav = styled.nav`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

const Link = styled(RouterLink)`
  margin-right: 0.5rem;
  padding: 0.5rem;
  color: #383838;
  text-align: center;
  text-decoration: none;
`;

export default () => (
  <Nav>
    <Link to="/">Become a host</Link>
    <Link to="/">Help</Link>
    <Link to="/">Sign Up</Link>
    <Link to="/">Log In</Link>
  </Nav>
);
