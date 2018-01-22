import React from "react";
import styled from "styled-components";
import { Title as HomesTitle } from "../styled";
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

const Title = styled(HomesTitle)`
  margin-bottom: 0;
`;

export default () => {
  return (
    <Homes>
      <Title>
        Homes
        <SeeAll to="/Homes">See all</SeeAll>
      </Title>
      <Slider>
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            link="/"
            image={img1}
            price="$82"
            title="La Salentina, see, nature & relax"
            type="house"
            beds="9 beds"
            superhost="97"
          />
        </div>

        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            link="/"
            image={img2}
            price="$82"
            title="Your private 3 bedr. riad and exclusi…"
            type="house"
            beds="5 beds"
            superhost="161"
          />
        </div>

        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            link="/"
            image={img3}
            price="$200"
            title="Dreamy Tropical Tree House"
            type="treehouse"
            beds="1 bed"
            superhost="364"
          />
        </div>

        <Arrow />
      </Slider>
    </Homes>
  );
};
