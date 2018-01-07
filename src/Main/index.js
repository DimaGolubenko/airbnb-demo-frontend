import React from "react";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";

export default () => {
  return (
    <main>
      <div className="container">
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </div>
    </main>
  );
};
