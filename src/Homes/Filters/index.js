import React from "react";
import styled from "styled-components";
import Dates from "../Dates";
import { Button } from "./styled";

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

export default () => (
  <Filters>
    <div className="container">
      <Dates />
      <Button>Guests</Button>
      <Button isHidden="true">Room type</Button>
      <Button isHidden="true">Price</Button>
      <Button isHidden="true">Instant book</Button>
      <Button>More filters</Button>
    </div>
  </Filters>
);
