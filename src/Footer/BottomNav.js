import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  margin-right: 0.75rem;

  @media (min-width: 768px) {
    margin-right: 1.5rem;
  }
`;

const Link = styled.a`
  margin-right: 0.75rem;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #636363;

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
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
