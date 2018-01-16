import React from "react";
import styled from "styled-components";
import close from "../assets/close.svg";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

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

export const Filter = styled.button`
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

  @media (min-width: 768px) {
    display: none;
  }
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 0.0625rem solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;
  z-index: 3;
`;

export const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid rgba(72, 72, 72, 0.2);

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: space-between;
    border: none;
  }
`;

export const Save = styled.button`
  width: 100%;
  display: block;
  margin: 0.5rem;
  box-sizing: border-box;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #ff5a5f;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px -1px 0px #d5d5d5;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  display: none;
  font-size: 1rem;
  padding: 1.5rem 2rem;
  font-family: "CircularAirBook", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 0.5rem;
  color: #636363;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: inherit;
  }
`;

export const Cancel = styled(Button)``;

export const Apply = styled(Button)`
  color: #0f7276;
`;
