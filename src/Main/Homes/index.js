import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import { Slider, SeeAll, SliderArrow } from "../styled";
import Card from "../../Homes/Card";
import img1 from "./homes-1.png";
import img2 from "./homes-2.png";
import img3 from "./homes-3.png";

const Homes = styled.section`
  position: relative;
`;

const Arrow = SliderArrow.extend`
  top: 8.7rem;
`;

export default () => {
  return (
    <Homes>
      <Title>
        Homes
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <Slider>
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            link="/"
            image={img1}
            title="$82 La Salentina, see, nature & relax"
            descriptin="Entire house &#183; 9 beds"
            superhost="97 &#183; Superhost"
          />
        </div>

        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            link="/"
            image={img2}
            title="$82 Your private 3 bedr. riad and exclusi..."
            descriptin="Entire house &#183; 5 beds"
            superhost="161 &#183; Superhost"
          />
        </div>

        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            link="/"
            image={img3}
            title="$200 Dreamy Tropical Tree House"
            descriptin="Entire treehouse &#183; 1 bed"
            superhost="364 &#183; Superhost"
          />
        </div>

        <Arrow />
      </Slider>
    </Homes>
  );
};
