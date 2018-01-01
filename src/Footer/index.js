import React from "react";
import styled from "styled-components";

const Footer = styled.header`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Footer>
      <h2>Footer</h2>
    </Footer>
  );
};
