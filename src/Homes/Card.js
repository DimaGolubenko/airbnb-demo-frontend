import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarsList from "../UI/StarsList";

const Card = styled.div``;

const Image = styled.img`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h2`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

const Description = styled.p`
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  @media (min-width: 768px) {
    line-height: 1.2rem;
    margin-bottom: 0.4rem;
  }
`;

const Superhost = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
`;

export default props => (
  <Card>
    <Link to={props.link}>
      <Image src={props.image} alt="" />
      <CardTitle>{props.title}</CardTitle>
    </Link>
    <Description>{props.description}</Description>
    <StarsList />
    <Superhost>{props.superhost}</Superhost>
  </Card>
);
