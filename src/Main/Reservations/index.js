import React from "react";
import styled from "styled-components";
import { Slider, Title, SeeAll, SliderArrow } from "../styled";
import Card from "./Card";
import img1 from "./reservations-1.png";
import img2 from "./reservations-2.png";
import img3 from "./reservations-3.png";
import img4 from "./reservations-4.png";

const Reservations = styled.section`
  position: relative;
`;

const Arrow = SliderArrow.extend`
  top: 7.5rem;
`;

export default () => {
  return (
    <Reservations>
      <Title>
        Popular reservations around the world
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <Slider>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img1}
            category="Speakeasy"
            title="Chumley's"
            averageCheck="About $60 per person"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img2}
            category="Korean gastropub"
            title="Hanjan"
            averageCheck="About $50 per person"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img3}
            category="German american"
            title="Prime Meats"
            averageCheck="About $55 per person"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            link="/"
            image={img4}
            category="Fine seafood"
            title="Seaprice"
            averageCheck="About $70 per person"
          />
        </div>
        <Arrow />
      </Slider>
    </Reservations>
  );
};
