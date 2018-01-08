import React from "react";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "../Footer";

export default () => {
  return (
    <div>
      <main>
        <div className="container">
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </div>
      </main>
      <Footer />
    </div>
  );
};
