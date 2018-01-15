import React from "react";
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
  Count
} from "./styled";

import { ADULT, CHILDREN, INFANTS } from "../index";

export default props => {
  const decrementGuests = (type, count) => {
    if (count > 0) {
      --props.guests[type];
      props.decrementGuests(type, props.guests[type]);
    }
  };
  const incrementGuests = (type, count) => {
    const result = ++props.guests[type];
    props.decrementGuests(type, result);
  };

  return (
    <Categories>
      <Adult>
        <Left>
          <Title>Adult</Title>
        </Left>
        <Right>
          <Counter>
            <Minus
              disable={true}
              onClick={() => decrementGuests(ADULT, props.guests[ADULT])}
            />
            <Count>{props.guests.adult}</Count>
            <Plus onClick={() => incrementGuests(ADULT, props.guests[ADULT])} />
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
            <Minus
              disable={true}
              onClick={() => decrementGuests(CHILDREN, props.guests[CHILDREN])}
            />
            <Count>{props.guests.children}</Count>
            <Plus
              onClick={() => incrementGuests(CHILDREN, props.guests[CHILDREN])}
            />
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
            <Minus
              disable={true}
              onClick={() => decrementGuests(INFANTS, props.guests[INFANTS])}
            />
            <Count>{props.guests.infants}</Count>
            <Plus
              onClick={() => incrementGuests(INFANTS, props.guests[INFANTS])}
            />
          </Counter>
        </Right>
      </Infants>
    </Categories>
  );
};
