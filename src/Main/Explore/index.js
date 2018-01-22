import React from "react";
import styled from "styled-components";
import { Slider, Title } from "../styled";
import Card from "./Card";
import img1 from "./Explore-1.png";
import img2 from "./Explore-2.png";
import img3 from "./Explore-3.png";

const Explore = styled.section`
  position: relative;
`;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Slider>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card link="/Homes" image={img1} title="Homes" />
        </div>

        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card link="/" image={img2} title="Experiences" />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card link="/" image={img3} title="Restaurants" />
        </div>
      </Slider>
    </Explore>
  );
};
