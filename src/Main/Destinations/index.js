import React from "react";
import styled from "styled-components";
import { Slider, Link, Title, Image, SliderArrow } from "../styled";
import img1 from "./destinations-1.png";
import img2 from "./destinations-2.png";
import img3 from "./destinations-3.png";
import img4 from "./destinations-4.png";
import img5 from "./destinations-5.png";
import img6 from "./destinations-6.png";

const Card = styled(Link)``;

const Destinations = styled.section`
  position: relative;
`;

const City = styled.h2`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const Arrow = SliderArrow.extend`
  top: 9.2rem;
`;

export default () => {
  return (
    <Destinations>
      <Title>Featured destinations</Title>
      <Slider>
        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card href="/">
            <Image src={img1} alt="" />
            <City>Paris</City>
          </Card>
        </div>

        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card href="/">
            <Image src={img2} alt="" />
            <City>Miami</City>
          </Card>
        </div>

        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card href="/">
            <Image src={img3} alt="" />
            <City>Tokyo</City>
          </Card>
        </div>

        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card href="/">
            <Image src={img4} alt="" />
            <City>Cape town</City>
          </Card>
        </div>

        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card href="/">
            <Image src={img5} alt="" />
            <City>Seoul</City>
          </Card>
        </div>

        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card href="/">
            <Image src={img6} alt="" />
            <City>Los Angeles</City>
          </Card>
        </div>

        <Arrow />
      </Slider>
    </Destinations>
  );
};
