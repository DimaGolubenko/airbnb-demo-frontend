import React from "react";
import styled from "styled-components";
import { List, Card, Link, Title, Image, SliderArrow } from "../styled";
import img1 from "./destinations-1.png";
import img2 from "./destinations-2.png";
import img3 from "./destinations-3.png";
import img4 from "./destinations-4.png";
import img5 from "./destinations-5.png";
import img6 from "./destinations-6.png";

const Destinations = styled.section``;

const City = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const Arrow = SliderArrow.extend`
  top: 5.6rem;
`;

export default () => {
  return (
    <Destinations>
      <Title>Featured destinations</Title>
      <div className="row">
        <List>
          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img1} alt="" />
                <City>Paris</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img2} alt="" />
                <City>Miami</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img3} alt="" />
                <City>Tokyo</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img4} alt="" />
                <City>Cape town</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img5} alt="" />
                <City>Seoul</City>
              </Link>
            </Card>
          </div>

          <div className="col-lg-2">
            <Card>
              <Link href="/">
                <Image src={img6} alt="" />
                <City>Los Angeles</City>
              </Link>
            </Card>
          </div>

          <Arrow />
        </List>
      </div>
    </Destinations>
  );
};
