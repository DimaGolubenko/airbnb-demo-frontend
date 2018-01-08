import React from "react";
import styled from "styled-components";
import { Image } from "../styled";
import { Link } from "react-router-dom";

const Card = styled(Link)``;

const City = styled.h2`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export default props => (
  <Card to={props.link}>
    <Image src={props.image} alt="" />
    <City>{props.city}</City>
  </Card>
);
