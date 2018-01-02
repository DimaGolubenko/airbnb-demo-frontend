import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import { List, Card, Link, SeeAll, Image, SliderArrow } from "../styled";
import StarsList from "../../common/StarsList";
import img1 from "./homes-1.png";
import img2 from "./homes-2.png";
import img3 from "./homes-3.png";

const Homes = styled.section``;

const CardTitle = styled.div`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-bottom: 0.1rem;
`;

const Description = styled.div`
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-bottom: 0.4rem;
`;

const Superhost = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Arrow = SliderArrow.extend`
  top: 5.1rem;
`;

export default () => {
  return (
    <Homes>
      <Title>
        Homes
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <div className="row">
        <List>
          <div className="col-lg-4">
            <Card>
              <Link href="/">
                <Image src={img1} alt="" />
                <CardTitle>$82 La Salentina, see, nature & relax</CardTitle>
              </Link>
              <Description>Entire house &#183; 9 beds</Description>
              <StarsList />
              <Superhost>97 &#183; Superhost</Superhost>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <Link href="/">
                <Image src={img2} alt="" />
                <CardTitle>
                  $82 Your private 3 bedr. riad and exclusi...
                </CardTitle>
              </Link>
              <Description>Entire house &#183; 5 beds</Description>
              <StarsList />
              <Superhost>161 &#183; Superhost</Superhost>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <Link href="/">
                <Image src={img3} alt="" />
                <CardTitle>$200 Dreamy Tropical Tree House</CardTitle>
              </Link>
              <Description>Entire treehouse &#183; 1 bed</Description>
              <StarsList />
              <Superhost>364 &#183; Superhost</Superhost>
            </Card>
          </div>

          <Arrow />
        </List>
      </div>
    </Homes>
  );
};
