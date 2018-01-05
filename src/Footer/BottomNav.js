import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  margin-right: 1rem;
`;

const Link = styled.a`
  margin-left: 1rem;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #636363;
`;

export default () => {
  return (
    <Nav>
      <Link href="/">Terms</Link>
      <Link href="/">Privacy</Link>
      <Link href="/">Site map</Link>
    </Nav>
  );
};
