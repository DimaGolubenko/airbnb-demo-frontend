import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Logo = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Img = styled.img`
  display: block;
  width: 2rem;
  height: 2rem;
`;

export default () => {
  return (
    <Logo href="/">
      <Img src={logo} />
    </Logo>
  );
};
