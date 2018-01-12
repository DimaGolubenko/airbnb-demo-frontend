import React from "react";
import styled from "styled-components";
import GoogleMap from "./GoogleMap";
import Filters from "./Filters";
import Card from "./Card";
import Pagination from "./Pagination";
import Message from "./Message";
import Location from "./Location";
import img1 from "./homes-1.jpg";
import img2 from "./homes-2.jpg";
import img3 from "./homes-3.jpg";
import img4 from "./homes-4.jpg";
import img5 from "./homes-5.jpg";
import img6 from "./homes-6.jpg";

const Wrapper = styled.div``;

const Cards = styled.section`
  position: relative;
  margin-top: 8.5rem;
  box-sizing: border-box;
`;

export default class Homes extends React.Component {
  render() {
    return (
      <Wrapper>
        <Filters />
        <Cards>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <div className="row">
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img1}
                      price="$82"
                      title="La Salentina, see, nature & relax"
                      type="house"
                      beds="9 beds"
                      superhost="97"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img2}
                      price="$82"
                      title="Your private 3 bedr. riad and exclusi…"
                      type="house"
                      beds="5 beds"
                      superhost="161"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img3}
                      price="$200"
                      title="Dreamy Tropical Tree House"
                      type="treehouse"
                      beds="1 bed"
                      superhost="364"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img4}
                      price="$110"
                      title="Best location old town luxury loft"
                      type="apartment"
                      beds="1 bed"
                      superhost="369"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img5}
                      price="$83"
                      title="Lussuoso. Vista incantevole."
                      type="apartment"
                      beds="6 bed"
                      superhost="105"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img6}
                      price="$72"
                      title="In the historical center of Lecce"
                      type="house"
                      beds="3 bed"
                      superhost="221"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Cards>
        <div className="container">
          <Pagination />
          <Message />
        </div>
        <Location />
        <GoogleMap />
      </Wrapper>
    );
  }
}
