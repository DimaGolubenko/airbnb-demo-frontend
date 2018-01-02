import React from "react";
import styled from "styled-components";

import logo from "./logoGray.svg";

const Logo = styled.a`
  margin-right: 0.5rem;
`;

const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export default () => {
  return (
    <Logo href="/" alt="">
      <Img src={logo} title="" />
    </Logo>
  );
};
