import React from 'react';
import styled from 'styled-components';

import turnedOn from './turned-on.svg';
import turnedOff from './turned-off.svg';

const Wrapper = styled.div`
  margin-left: 2rem;
  margin-top: 0.5rem;
`;

const Form = styled.form``;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

const Switch = styled.label.attrs({
  for: 'toggle',
})`
  display: block;
  position: relative;
  width: 4rem;
  height: 2.5rem;
  box-sizing: border-box;
  border: ${props => (props.isActive ? '1px solid #008489' : '1px solid rgba(72, 72, 72, 0.3)')};
  border-radius: 1.25rem;
  background-color: ${props => (props.isActive ? '#008489' : 'rgba(72, 72, 72, 0.08)')};
  cursor: pointer;
  z-index: 1;
`;

const Toggle = styled.div`
  position: absolute;
  top: -1px;
  left: ${props => (props.isActive ? '1.5rem' : '-1px')};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isActive ? '#008489' : 'rgba(72, 72, 72, 0.3)')};
  background-color: #fff;
  background-image: url(${props => (props.isActive ? turnedOn : turnedOff)});
  background-size: ${props => (props.isActive ? '1rem' : '0.75rem')};
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  transition: left right 2s ease-out 0.5s;
  z-index: 2;
`;

export default ({ isActive, toggle }) => (
  <Wrapper>
    <Form>
      <Switch isActive={isActive} onClick={toggle}>
        <Checkbox />
        <Toggle isActive={isActive} />
      </Switch>
    </Form>
  </Wrapper>
);
