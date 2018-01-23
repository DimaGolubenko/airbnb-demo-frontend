import React from 'react';
import styled from 'styled-components';

const Info = styled.p`
  margin-bottom: 5.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  color: #636363;

  @media (min-width: 992px) {
    margin-right: 34%;
  }
`;

export default () => (
  <Info>
    Enter dates to see full pricing. Additional fees apply. Taxes may be added.
  </Info>
);
