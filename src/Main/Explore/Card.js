import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-decoration: none;
  border: 0.0625rem solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  @media (min-width: 768px) {
    width: 6rem;
    margin-left: -0.0625rem;
    margin-top: -0.0625rem;
    margin-bottom: -0.0625rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

const CardTitle = styled.h2`
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.75rem;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  color: #383838;

  @media (min-width: 768px) {
    padding-left: 1.5rem;
    font-size: 1rem;
  }
`;

export default props => (
  <Card to={props.link}>
    <Image src={props.image} alt="" />
    <CardTitle>{props.title}</CardTitle>
  </Card>
);
