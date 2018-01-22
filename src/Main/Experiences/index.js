import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import { Slider, SeeAll, SliderArrow } from "../styled";
import Card from "./Card";
import img1 from "./experiences-1.png";
import img2 from "./experiences-2.png";
import img3 from "./experiences-3.png";
import img4 from "./experiences-4.png";

const Experiences = styled.section`
  position: relative;
`;

const Arrow = SliderArrow.extend`
  top: 13.1rem;
`;

export default () => {
  return (
    <Experiences>
      <Title>
        Experiences
        <SeeAll to="/">See all</SeeAll>
      </Title>
      <Slider>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img1}
            price="$29"
            title="Forest therapy"
            reviews="44 reviews"
          />
        </div>

        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img2}
            price="$69"
            title="Whale watching"
            reviews="46 reviews"
          />
        </div>

        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img3}
            price="$69"
            title="Table Mountain Summit, Cable Car Down"
            reviews="44 reviews"
          />
        </div>

        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img4}
            price="$50"
            title="Salsa Night"
            reviews="44 reviews"
          />
        </div>
      </Slider>
      <Arrow />
    </Experiences>
  );
};
