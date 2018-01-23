import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Stars from '../../UI/Stars';
import { Image } from '../styled';

const Card = styled.div``;

const Price = styled.span`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.1rem;
  padding-right: 0.5rem;
`;

const CardTitle = styled.h2`
  display: inline;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const Reviews = styled.span`
  font-size: 0.75rem;
  line-height: 0.9rem;
`;

export default props => (
  <Card>
    <Link to={props.link}>
      <Image src={props.image} alt="" />
      <Price>{props.price}</Price>
      <CardTitle>{props.title}</CardTitle>
    </Link>
    <div>
      <Stars />
      <Reviews>{props.reviews}</Reviews>
    </div>
  </Card>
);
