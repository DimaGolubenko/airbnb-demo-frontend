import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './logoGray.svg';

const Logo = styled(Link)`
  margin-right: 0.5rem;
`;

const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export default () => (
  <Logo to="/" alt="">
    <Img src={logo} title="" />
  </Logo>
);
