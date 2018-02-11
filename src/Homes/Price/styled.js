import styled from 'styled-components';
import ReactRheostat from 'rheostat';

import price from './price.svg';

export const Range = styled.h2`
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #383838;
  font-family: 'CircularAirLight', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const Info = styled.p`
  margin-bottom: 110px;
  font-size: 0.75rem;
  font-family: 'CircularAirLight', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const Rheostat = styled(ReactRheostat)`
  margin: 0 1rem;

  .rheostat-background {
    position: relative;
    width: 260px;
    height: 6px;
    background-color: #008489;

    &:before {
      content: '';
      position: absolute;
      left: 16px;
      bottom: 6px;
      display: block;
      width: 144px;
      height: 80px;
      background-image: url(${price});
      background-size: cover;
      background-position: center center;
    }
  }

  .rheostat-handle {
    position: absolute;
    margin-top: -18px;
    margin-left: -18px;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background-color: #fff;
    border: 1px solid #008489;
    border-radius: 1rem;
    box-sizing: border-box;
    z-index: 1;
  }
`;
