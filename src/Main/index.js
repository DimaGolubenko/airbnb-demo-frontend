import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "../Footer";

const Main = styled.main`
  margin-top: 8rem;
`;

export default () => {
  return (
    <div>
      <Main>
        <Helmet>
          <title>Main</title>
        </Helmet>
        <div className="container">
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </div>
      </Main>
      <Footer />
    </div>
  );
};
