import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 0.9rem;
  line-height: 1.5rem;
  ul {
    display: flex;
    justify-content: flex-end;
  }
  li {
    margin-right: 0.5rem;
  }
  a {
    padding: 0.5rem;
    color: #383838;
    text-align: center;
    text-decoration: none;
  }
`;

export default () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#">Become a host</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
        <li>
          <a hred="#">Log In</a>
        </li>
      </ul>
    </Nav>
  );
};
