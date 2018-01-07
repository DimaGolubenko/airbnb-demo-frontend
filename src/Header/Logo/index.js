import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import arrow from "../../assets/arrow-down.svg";

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

const Arrow = styled.button`
  display: block;
  width: 0.4rem;
  height: 0.6rem;
  margin-left: 7px;
  border: none;
  background-color: transparent;
  background-image: url(${arrow});
  background-position: center center;
  background-size: 10px 7px;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

export default () => {
  return (
    <Logo href="/">
      <Img src={logo} />
      <Arrow />
    </Logo>
  );
};
