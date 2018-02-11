import React from 'react';
import {
  Categories,
  Adult,
  Children,
  Infants,
  Left,
  Right,
  Title,
  Subtitle,
  Counter,
  Minus,
  Plus,
  Count,
} from './styled';

export default (props) => {
  const decrementGuests = (type, count) => {
    const minimalCount = type === 'adults' ? 1 : 0;
    if (count > minimalCount) {
      props.decrementGuests(type, count - 1);
    }
  };
  const incrementGuests = (type, count) => {
    props.incrementGuests(type, Number(count) + 1);
  };

  const { adults, children, infants } = props.guests;

  return (
    <Categories>
      <Adult>
        <Left>
          <Title>Adult</Title>
        </Left>
        <Right>
          <Counter>
            <Minus disable onClick={() => decrementGuests('adults', adults)} />
            <Count>{props.guests.adults}</Count>
            <Plus onClick={() => incrementGuests('adults', adults)} />
          </Counter>
        </Right>
      </Adult>

      <Children>
        <Left>
          <Title>Children</Title>
          <Subtitle>Ages 2 - 12</Subtitle>
        </Left>
        <Right>
          <Counter>
            <Minus disable onClick={() => decrementGuests('children', children)} />
            <Count>{props.guests.children}</Count>
            <Plus onClick={() => incrementGuests('children', children)} />
          </Counter>
        </Right>
      </Children>

      <Infants>
        <Left>
          <Title>Infants</Title>
          <Subtitle>Under 2</Subtitle>
        </Left>
        <Right>
          <Counter>
            <Minus disable onClick={() => decrementGuests('infants', infants)} />
            <Count>{props.guests.infants}</Count>
            <Plus onClick={() => incrementGuests('infants', infants)} />
          </Counter>
        </Right>
      </Infants>
    </Categories>
  );
};
