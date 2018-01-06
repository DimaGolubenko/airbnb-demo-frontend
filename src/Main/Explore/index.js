import React from "react";
import styled from "styled-components";
import { Slider, Title } from "../styled";
import img1 from "./Explore-1.png";
import img2 from "./Explore-2.png";
import img3 from "./Explore-3.png";

const Explore = styled.section`
  position: relative;
`;

const Card = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-decoration: none;
  border: 0.0625rem solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 4.5rem;
    align-items: center;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 78px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  @media (min-width: 768px) {
    width: 6rem;
    height: 4.5rem;
    margin-left: -0.0625rem;
    margin-top: -0.0625rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

const CardTitle = styled.h2`
  padding-left: 0.75rem;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  color: #383838;

  @media (min-width: 768px) {
    padding-left: 1.5rem;
    font-size: 1rem;
  }
`;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Slider>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card href="/">
            <Image src={img1} alt="" />
            <CardTitle>Homes</CardTitle>
          </Card>
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card href="/">
            <Image src={img2} alt="" />
            <CardTitle>Experiences</CardTitle>
          </Card>
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card href="/">
            <Image src={img3} alt="" />
            <CardTitle>Restaurants</CardTitle>
          </Card>
        </div>
      </Slider>
    </Explore>
  );
};
