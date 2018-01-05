import React from "react";
import styled from "styled-components";
import { List, Title } from "../styled";
import img1 from "./Explore-1.png";
import img2 from "./Explore-2.png";
import img3 from "./Explore-3.png";

const Explore = styled.section``;

const Card = styled.div`
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

const CardTitle = styled.h2`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 4.5rem;
  color: #383838;
`;

export default () => {
  return (
    <Explore>
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
    </Explore>
  );
};
