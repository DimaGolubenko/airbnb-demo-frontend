import React from "react";
import styled from "styled-components";

const Filters = styled.section`
  padding: 0.75rem 0;
  box-shadow: 0px 0.03rem 0px rgba(72, 72, 72, 0.3);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.75rem;
  font-size: 1rem;
  background-color: transparent;
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 0.25rem;
  cursor: pointer;
`;

export default () => (
  <Filters>
    <div className="container">
      <Button>Dates</Button>
      <Button>Guests</Button>
      <Button>Room type</Button>
      <Button>Price</Button>
      <Button>Instant book</Button>
      <Button>More filters</Button>
    </div>
  </Filters>
);
