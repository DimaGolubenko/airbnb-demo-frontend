import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import { List, Card, Link, SeeAll, Image, SliderArrow } from "../styled";
import StarsList from "../../common/StarsList";
import img1 from "./experiences-1.png";
import img2 from "./experiences-2.png";
import img3 from "./experiences-3.png";
import img4 from "./experiences-4.png";

const Experiences = styled.section``;

const Arrow = SliderArrow.extend`
  top: 9.5rem;
`;

const Price = styled.span`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.1rem;
  padding-right: 0.5rem;
`;

const CardTitle = styled.h2`
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
`;

const Reviews = styled.span`
  font-size: 0.75rem;
  line-height: 0.9rem;
`;

export default () => {
  return (
    <Experiences>
      <Title>
        Experiences
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <div className="row">
        <List>
          <div className="col-lg-3">
            <Card>
              <Link href="/">
                <Image src={img1} alt="" />
                <Price>$29</Price>
                <CardTitle>Forest therapy</CardTitle>
              </Link>
              <div>
                <StarsList />
                <Reviews>44 reviews</Reviews>
              </div>
            </Card>
          </div>

          <div className="col-lg-3">
            <Card>
              <Link href="/">
                <Image src={img2} alt="" />
              </Link>
              <Link href="/">
                <Price>$69</Price>
                <CardTitle>Whale watching</CardTitle>
              </Link>
              <div>
                <StarsList />
                <Reviews>46 reviews</Reviews>
              </div>
            </Card>
          </div>

          <div className="col-lg-3">
            <Card>
              <Link href="/">
                <Image src={img3} alt="" />
              </Link>
              <Link href="/">
                <Price>$69</Price>
                <CardTitle>Table Mountain Summit, Cable Car Down</CardTitle>
              </Link>
              <div>
                <StarsList />
                <Reviews>44 reviews</Reviews>
              </div>
            </Card>
          </div>

          <div className="col-lg-3">
            <Card>
              <Link href="/">
                <Image src={img4} alt="" />
              </Link>
              <Link href="/">
                <Price>$50</Price>
                <CardTitle>Salsa Night</CardTitle>
              </Link>
              <div>
                <StarsList />
                <Reviews>44 reviews</Reviews>
              </div>
            </Card>
          </div>

          <Arrow />
        </List>
      </div>
    </Experiences>
  );
};
