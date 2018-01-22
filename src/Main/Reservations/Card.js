import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Image } from "../styled";

const Card = styled(Link)``;

const Category = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.5rem;
  line-height: 0.6px;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 0.6rem;
    line-height: 0.75px;
  }
`;

const CardTitle = styled.h2`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  line-height: 1rem;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

const AverageCheck = styled.span`
  display: block;
  line-height: 1rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 0.75rem;
  line-height: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

export default props => (
  <Card to={props.link}>
    <Image src={props.image} alt="" />
    <Category>{props.category}</Category>
    <CardTitle>{props.title}</CardTitle>
    <AverageCheck>{props.averageCheck}</AverageCheck>
  </Card>
);
