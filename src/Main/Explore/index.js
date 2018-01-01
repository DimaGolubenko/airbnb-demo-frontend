import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import img1 from "./Explore-1.png";
import img2 from "./Explore-2.png";
import img3 from "./Explore-3.png";

const List = styled.div`
  display: flex;
  display-wrap: wrap;
  width: 100%;
`;

const Card = styled.div`
  height: 4.5rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Image = styled.img`
  width: 6rem;
  height: 4.5rem;
  margin-right: 1.5rem;
`;

const CardTitle = styled.span`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 4.5rem;
  color: #383838;
`;

export default () => {
  return (
    <section className="explore">
      <Title>Explore Airbnb</Title>
      <div className="row">
        <List>
          <div className="col-lg-4">
            <Card>
              <Link href="#">
                <Image src={img1} alt="" />
                <CardTitle>Homes</CardTitle>
              </Link>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <Link href="#">
                <Image src={img2} alt="" />
                <CardTitle>Experiences</CardTitle>
              </Link>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <Link href="#">
                <Image src={img3} alt="" />
                <CardTitle>Restaurants</CardTitle>
              </Link>
            </Card>
          </div>
        </List>
      </div>
    </section>
  );
};
