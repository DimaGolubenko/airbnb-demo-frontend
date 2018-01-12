import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Pagination = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 992px) {
    width: 66%;
  }
`;

const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const PageNumber = styled.span`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  color: ${props => (props.isCurrent ? "#fff" : "#0f7276")};
  background-color: ${props => (props.isCurrent ? "#0f7276" : "transparent")};
  border-radius: 1rem;
  cursor: pointer;

  &:last-child {
    margin-right: 4rem;
  }
`;

const Arrow = styled.span`
  width: 2rem;
  height: 2rem;
  border: 1px solid #008489;
  border-color: #008489;
  cursor: pointer;
`;

const ArrowRight = styled(Arrow)`
  margin-left: 1.5rem;
  border-radius: 1rem;
  background-image: url(${arrow});
  background-size: 0.375rem 0.625rem;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Count = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-align: center;
`;

export default () => (
  <Pagination>
    <Pages>
      <PageNumber isCurrent="true">1</PageNumber>
      <PageNumber>2</PageNumber>
      <PageNumber>3</PageNumber>
      <PageNumber>...</PageNumber>
      <PageNumber>17</PageNumber>
      <ArrowRight />
    </Pages>
    <Count>1 – 18 of 300+ Rentals</Count>
  </Pagination>
);
