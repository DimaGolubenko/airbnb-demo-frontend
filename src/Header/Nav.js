import React from "react";
import styled from "styled-components";

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

const Link = styled.a`
  margin-right: 0.5rem;
  padding: 0.5rem;
  color: #383838;
  text-align: center;
  text-decoration: none;
`;

export default () => {
  return (
    <Nav>
      <Link href="/">Become a host</Link>
      <Link href="/">Help</Link>
      <Link href="/">Sign Up</Link>
      <Link href="/">Log In</Link>
    </Nav>
  );
};
