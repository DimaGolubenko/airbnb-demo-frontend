import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Stars from '../UI/Stars';

const Card = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Title = styled.p`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 0.1rem;
  text-overflow: ellipsis;
`;

const Price = styled.span`
  margin-right: 0.5rem;
`;

const Description = styled.p`
  margin: 0;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
`;

const Superhost = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
`;

export default props => (
  <Card>
    <Link to={props.link}>
      <Image src={props.image} alt="" />
      <Title>
        <Price>{props.price}</Price>
        {props.title}
      </Title>
    </Link>
    <Description>
      Entire {props.type} &#183; {props.beds}
    </Description>
    <Stars />
    <Superhost>{props.superhost} &#183; Superhost</Superhost>
  </Card>
);
