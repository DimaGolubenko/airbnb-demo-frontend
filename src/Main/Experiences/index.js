import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import img1 from "./Expiriences-1.png";
import img2 from "./Expiriences-2.png";
import img3 from "./Expiriences-3.png";
import img4 from "./Expiriences-4.png";

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
  display: block;
`;

const Image = styled.img`
  display: block;
  margin-bottom: 0.5rem;
`;

const Price = styled.span`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.1rem;
  padding-right: 0.5rem;
`;

const CardTitle = styled.span`
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  line-height: 4.5rem;
  color: #383838;
`;

const StarsList = styled.span``;

const Star = styled.span``;

export default () => {
  return (
    <section className="explore">
      <Title>Experiences</Title>
      <div className="row">
        <List>
          <div className="col-lg-3">
            <Card>
              <Link href="#">
                <Image src={img1} alt="" />
                <Price>$29</Price>
                <CardTitle>$29 Forest therapy</CardTitle>
              </Link>
              <div>
                <StarsList>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </StarsList>
              </div>
            </Card>
          </div>
        </List>
      </div>
    </section>
  );
};
