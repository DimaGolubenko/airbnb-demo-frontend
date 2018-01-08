import React from "react";
import styled from "styled-components";

const Filters = styled.section`
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  padding: 0.75rem 0;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0.03rem 0 rgba(72, 72, 72, 0.3);
  z-index: 2;
`;

const Button = styled.button`
  display: ${props => (props.isHidden ? "none" : "inline")};
  padding: 0.4rem 1rem;
  margin-right: 0.75rem;
  font-size: 1rem;
  background-color: transparent;
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 0.25rem;
  cursor: pointer;

  @media (min-width: 992px) {
    display: inline;
  }
`;

export default () => (
  <Filters>
    <div className="container">
      <Button>Dates</Button>
      <Button>Guests</Button>
      <Button isHidden="true">Room type</Button>
      <Button isHidden="true">Price</Button>
      <Button isHidden="true">Instant book</Button>
      <Button>More filters</Button>
    </div>
  </Filters>
);
