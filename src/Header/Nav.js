import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.li`
  margin-right: 0.5rem;
`;

const Link = styled.a`
  padding: 0.5rem;
  color: #383838;
  text-align: center;
  text-decoration: none;
`;

export default () => {
  return (
    <Nav>
      <List>
        <Item>
          <Link href="/">Become a host</Link>
        </Item>
        <Item>
          <Link href="/">Help</Link>
        </Item>
        <Item>
          <Link href="/">Sign Up</Link>
        </Item>
        <Item>
          <Link href="/">Log In</Link>
        </Item>
      </List>
    </Nav>
  );
};
