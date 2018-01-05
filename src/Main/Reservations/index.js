import React from "react";
import styled from "styled-components";
import { List, Link, Title, SeeAll, Image, SliderArrow } from "../styled";
import img1 from "./reservations-1.png";
import img2 from "./reservations-2.png";
import img3 from "./reservations-3.png";
import img4 from "./reservations-4.png";

const Reservations = styled.section``;

const Card = styled(Link)``;

const Category = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.6rem;
  line-height: 0.75px;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
`;

const CardTitle = styled.h2`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
`;

const AverageCheck = styled.span`
  display: block;
  line-height: 1rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
`;

const Arrow = SliderArrow.extend`
  top: 3.9rem;
`;

export default () => {
  return (
    <Reservations>
      <Title>
        Popular reservations around the world
        <SeeAll href="/">See all</SeeAll>
      </Title>
      <div className="row">
        <List>
          <div className="col-lg-3">
            <Card href="/">
              <Image src={img1} alt="" />
              <Category>Speakeasy</Category>
              <CardTitle>Chumley's</CardTitle>
              <AverageCheck>About $60 per person</AverageCheck>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card href="/">
              <Image src={img2} alt="" />
              <Category>Korean gastropub</Category>
              <CardTitle>Hanjan</CardTitle>
              <AverageCheck>About $50 per person</AverageCheck>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card href="/">
              <Image src={img3} alt="" />
              <Category>German american</Category>
              <CardTitle>Prime Meats</CardTitle>
              <AverageCheck>About $55 per person</AverageCheck>
            </Card>
          </div>
          <div className="col-lg-3">
            <Card href="/">
              <Image src={img4} alt="" />
              <Category>Fine seafood</Category>
              <CardTitle>Seaprice</CardTitle>
              <AverageCheck>About $70 per person</AverageCheck>
            </Card>
          </div>
          <Arrow />
        </List>
      </div>
    </Reservations>
  );
};
