import React from "react";
import styled from "styled-components";

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  margin-right: 1rem;
`;

const Item = styled.li`
  margin-left: 1rem;
  line-height: 1rem;
`;

const Link = styled.a`
  font-size: 0.75rem;
  color: #636363;
`;

export default () => {
  return (
    <Nav>
      <List>
        <Item>
          <Link href="/">Terms</Link>
        </Item>
        <Item>
          <Link href="/">Privacy</Link>
        </Item>
        <Item>
          <Link href="/">Site map</Link>
        </Item>
      </List>
    </Nav>
  );
};
