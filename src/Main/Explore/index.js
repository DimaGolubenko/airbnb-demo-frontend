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
  align-items: center;
  box-sizing: border-box;
  height: 4.5rem;
  text-decoration: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

const Image = styled.img`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 6rem;
  height: 4.5rem;
  margin-right: 1.5rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const CardTitle = styled.h2`
  padding-left: 7.5rem;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  color: #383838;
`;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Slider>
        <div className="col-md-5 col-lg-4">
          <Card href="/">
            <Image src={img1} alt="" />
            <CardTitle>Homes</CardTitle>
          </Card>
        </div>
        <div className="col-md-5 col-lg-4">
          <Card href="/">
            <Image src={img2} alt="" />
            <CardTitle>Experiences</CardTitle>
          </Card>
        </div>
        <div className="col-md-5 col-lg-4">
          <Card href="/">
            <Image src={img3} alt="" />
            <CardTitle>Restaurants</CardTitle>
          </Card>
        </div>
      </Slider>
    </Explore>
  );
};
