import React from "react";
import styled from "styled-components";
import close from "../assets/close.svg";

export const Wrapper = styled.div``;

export const Filters = styled.section`
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  padding: 0.75rem 0;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0.03rem 0 rgba(72, 72, 72, 0.3);
  z-index: 2;
`;

export const Cards = styled.section`
  position: relative;
  margin-top: 8.5rem;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: ${props => (props.isHidden ? "none" : "inline")};
  padding: 0.4rem 1rem;
  margin-right: 0.75rem;
  font-size: 0.9rem;
  color: ${props => (props.opened ? "#fff" : "#383838")};
  background-color: ${props => (props.opened ? "#008489" : "transparent")};
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 0.25rem;
  cursor: pointer;

  @media (min-width: 992px) {
    display: inline;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  width: 1rem;
  height: 1rem;
  border: none;
  background-image: url(${close});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
`;

export const Reset = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  font-size: 0.9rem;
  color: #0f7276;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;
